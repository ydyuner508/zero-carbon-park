// Simple PDF generation utility using browser's print functionality
export const generatePDF = (title: string, content: {
  beforeImage?: string;
  afterImage?: string;
  diagnosis?: string;
  recommendations?: string[];
  carbonReduction?: string;
  investmentROI?: string;
  estimatedCost?: string;
}) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { 
          font-family: 'Microsoft YaHei', Arial, sans-serif; 
          margin: 40px; 
          line-height: 1.6; 
          color: #333;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px; 
          border-bottom: 2px solid #10b981; 
          padding-bottom: 20px;
        }
        .section { 
          margin-bottom: 25px; 
        }
        .section h2 { 
          color: #059669; 
          border-left: 4px solid #10b981; 
          padding-left: 10px; 
          margin-bottom: 15px;
        }
        .recommendations ul { 
          padding-left: 20px; 
        }
        .recommendations li { 
          margin-bottom: 8px; 
        }
        .watermark { 
          color: #6b7280; 
          font-size: 12px; 
          text-align: center; 
          margin-top: 40px; 
          border-top: 1px solid #e5e7eb; 
          padding-top: 20px;
        }
        .image-container {
          text-align: center;
          margin: 20px 0;
        }
        .image-container img {
          max-width: 100%;
          height: auto;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>零碳园区AI诊断报告</h1>
        <p>生成时间：${new Date().toLocaleString('zh-CN')}</p>
      </div>

      <div class="section">
        <h2>改造前后对比</h2>
        <div class="image-container">
          <p><strong>改造前：</strong> 原始园区状态</p>
          <img src="${content.beforeImage || ''}" alt="改造前" />
        </div>
        <div class="image-container">
          <p><strong>改造后：</strong> 零碳园区效果图</p>
          <img src="${content.afterImage || ''}" alt="改造后" />
        </div>
      </div>

      <div class="section">
        <h2>AI诊断结果</h2>
        <p>${content.diagnosis || ''}</p>
      </div>

      <div class="section recommendations">
        <h2>改造建议</h2>
        <ul>
          ${content.recommendations?.map((rec: string) => `<li>${rec}</li>`).join('') || ''}
        </ul>
      </div>

      <div class="section">
        <h2>预计效果</h2>
        <p><strong>碳排放减少：</strong> ${content.carbonReduction || ''}</p>
        <p><strong>投资回报周期：</strong> ${content.investmentROI || ''}</p>
        <p><strong>预计投资：</strong> ${content.estimatedCost || ''}</p>
      </div>

      <div class="watermark">
        <p>* 本报告由AI生成，仅供参考。具体实施方案请咨询专业工程师。</p>
        <p>零碳园区工具站 | ${new Date().getFullYear()}</p>
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Trigger print dialog
  setTimeout(() => {
    printWindow.print();
  }, 500);
};