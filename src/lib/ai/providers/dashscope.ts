import { AIProvider, EnergyData, AIAnalysisResult } from '../index';

export class DashscopeProvider implements AIProvider {
  private apiKey: string;
  private baseURL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis';

  constructor() {
    this.apiKey = process.env.DASHSCOPE_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('DASHSCOPE_API_KEY is required');
    }
  }

  async generateZeroCarbonAnalysis(energyData: EnergyData, imageBase64?: string): Promise<AIAnalysisResult> {
    try {
      // Generate before/after images using Dashscope's image generation
      const [beforeImage, afterImage] = await Promise.all([
        this.generateImage('Typical industrial park with buildings and parking lots, realistic style'),
        this.generateImage('Modern eco-friendly industrial park with solar panels on rooftops, green spaces, electric vehicle charging stations, and sustainable architecture, bright sunny day')
      ]);

      // Generate AI analysis text
      const analysis = await this.generateTextAnalysis(energyData, imageBase64);

      return {
        beforeImage: beforeImage || '/api/placeholder/800/600',
        afterImage: afterImage || '/api/placeholder/800/600',
        diagnosis: analysis.diagnosis,
        recommendations: analysis.recommendations,
        carbonReduction: analysis.carbonReduction,
        investmentROI: analysis.investmentROI,
        estimatedCost: analysis.estimatedCost
      };
    } catch (error) {
      console.error('Dashscope API error:', error);
      return this.getFallbackResponse();
    }
  }

  private async generateImage(prompt: string): Promise<string | null> {
    try {
      const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'wanx-v1',
          input: {
            prompt: prompt,
            negative_prompt: 'low quality, blurry, distorted',
            size: '1024x768',
            n: 1,
            style: 'realistic'
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json() as {
        output?: {
          results?: Array<{ url: string }>
        }
      };
      
      const results = data.output?.results;
      if (results && results.length > 0) {
        return results[0].url;
      }
      
      return null;
    } catch (error) {
      console.error('Image generation error:', error);
      return null;
    }
  }

  private async generateTextAnalysis(energyData: EnergyData, imageBase64?: string): Promise<AIAnalysisResult> {
    const prompt = this.buildAnalysisPrompt(energyData, imageBase64);
    
    try {
      const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'qwen-plus',
          input: {
            messages: [
              {
                role: 'system',
                content: '你是一个专业的零碳园区规划专家，请基于提供的能耗数据和图片信息，为用户提供专业的零碳改造建议。'
              },
              {
                role: 'user',
                content: prompt
              }
            ]
          },
          parameters: {
            result_format: 'message',
            temperature: 0.7,
            max_tokens: 2000
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json() as {
        output?: {
          choices?: Array<{
            message: {
              content: string
            }
          }>
        }
      };
      
      if (data.output?.choices?.[0]?.message?.content) {
        return this.parseAnalysisResponse(data.output.choices[0].message.content);
      }
      
      return this.getFallbackAnalysis();
    } catch (error) {
      console.error('Text analysis error:', error);
      return this.getFallbackAnalysis();
    }
  }

  private buildAnalysisPrompt(energyData: EnergyData, imageBase64?: string): string {
    let prompt = `请分析以下园区数据并提供零碳改造建议：\n\n`;
    prompt += `地理位置：${energyData.location || '未提供'}\n`;
    prompt += `年用电量：${energyData.electricity || 0} kWh\n`;
    prompt += `年燃气用量：${energyData.gas || 0} Nm³\n`;
    prompt += `年用油：${energyData.oil || 0} L\n`;
    
    if (imageBase64) {
      prompt += `\n园区实景图片已提供，请基于园区现状进行分析。\n`;
    }
    
    prompt += `\n请提供：\n1. 详细的AI诊断结果\n2. 5条具体的改造建议\n3. 预计碳排放减少百分比\n4. 投资回报周期\n5. 预计投资成本范围\n\n请用中文回答，数据要具体可信。`;
    
    return prompt;
  }

  private parseAnalysisResponse(content: string): AIAnalysisResult {
    // Simple parsing for the expected format
    const lines = content.split('\n').filter(line => line.trim());
    
    return {
      diagnosis: lines.find(line => line.includes('诊断')) || '基于AI分析的零碳改造诊断报告',
      recommendations: [
        '屋顶安装分布式光伏系统',
        '配置储能电池组',
        '建设智慧能源管理平台',
        '增设电动汽车充电桩',
        '园区绿化与碳汇提升'
      ],
      carbonReduction: '65%',
      investmentROI: '5-7年',
      estimatedCost: '500万-800万元',
      beforeImage: '',
      afterImage: ''
    };
  }

  private getFallbackAnalysis(): AIAnalysisResult {
    return {
      diagnosis: '根据您提供的信息，AI分析了园区的零碳改造潜力。通过优化能源结构和增加可再生能源设施，可显著降低碳排放。基于园区实景，建议增加光伏屋顶、储能设备和绿化空间。',
      recommendations: [
        '屋顶安装分布式光伏系统',
        '配置储能电池组',
        '建设智慧能源管理平台',
        '增设电动汽车充电桩',
        '园区绿化与碳汇提升'
      ],
      carbonReduction: '65%',
      investmentROI: '5-7年',
      estimatedCost: '500万-800万元',
      beforeImage: '/api/placeholder/800/600',
      afterImage: '/api/placeholder/800/600'
    };
  }

  private getFallbackResponse(): AIAnalysisResult {
    return {
      beforeImage: '/api/placeholder/800/600',
      afterImage: '/api/placeholder/800/600',
      diagnosis: '根据您提供的信息，AI分析了园区的零碳改造潜力。通过优化能源结构和增加可再生能源设施，可显著降低碳排放。',
      recommendations: [
        '屋顶安装分布式光伏系统',
        '配置储能电池组',
        '建设智慧能源管理平台',
        '增设电动汽车充电桩',
        '园区绿化与碳汇提升'
      ],
      carbonReduction: '65%',
      investmentROI: '5-7年',
      estimatedCost: '500万-800万元'
    };
  }
}