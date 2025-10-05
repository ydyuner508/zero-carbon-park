import { DashscopeProvider } from './providers/dashscope';

export interface EnergyData {
  electricity: number;
  gas: number;
  oil: number;
  location: string;
  hasImage: boolean;
}

export interface AIAnalysisResult {
  beforeImage: string;
  afterImage: string;
  diagnosis: string;
  recommendations: string[];
  carbonReduction: string;
  investmentROI: string;
  estimatedCost: string;
}

export interface AIProvider {
  generateZeroCarbonAnalysis(energyData: EnergyData, imageBase64?: string): Promise<AIAnalysisResult>;
}

export function getAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER || 'dashscope';
  
  switch (provider) {
    case 'dashscope':
      return new DashscopeProvider();
    default:
      return new DashscopeProvider();
  }
}