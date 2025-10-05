'use client';

import { useState, useEffect } from 'react';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';

interface ResultData {
  beforeImage?: string;
  afterImage?: string;
  diagnosis?: string;
  recommendations?: string[];
  carbonReduction?: string;
  investmentROI?: string;
  estimatedCost?: string;
}

export default function ResultPage() {
  const [resultData, setResultData] = useState<ResultData>({
    beforeImage: '/api/placeholder/800/600',
    afterImage: '/api/placeholder/800/600',
    diagnosis: '根据您提供的数据，AI判断该园区可通过增加光伏屋顶、储能设备和智慧能源管理系统减少约65%的碳排放，预计投资回报周期为5-7年。',
    recommendations: [
      '屋顶安装500kW分布式光伏系统',
      '配置200kWh储能电池组',
      '建设智慧能源管理平台',
      '增设电动汽车充电桩',
      '园区绿化与碳汇提升'
    ],
    carbonReduction: '65%',
    investmentROI: '5-7年',
    estimatedCost: '500万-800万元'
  });

  useEffect(() => {
    const storedResult = sessionStorage.getItem('aiResult');
    if (storedResult) {
      setResultData(JSON.parse(storedResult));
    }
  }, []);

  const handleDownloadPDF = () => {
    import('@/lib/pdf-generator').then(({ generatePDF }) => {
      generatePDF('零碳园区AI诊断报告', resultData);
    });
  };

  const handleUpgrade = () => {
    window.location.href = '/upgrade';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI零碳改造诊断报告</h1>
          <p className="text-lg text-gray-600">基于您的数据生成的零碳园区改造方案</p>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">改造前后对比</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">改造前</h3>
              <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>原始园区图</p>
                  <p className="text-sm">AI示意图，非工程设计</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">改造后</h3>
              <div className="bg-green-100 rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-green-700">
                  <p>零碳园区效果图</p>
                  <p className="text-sm">AI示意图，非工程设计</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Diagnosis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI诊断结果</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="text-green-800">{resultData.diagnosis}</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">改造建议</h2>
          <ul className="space-y-3">
            {resultData.recommendations?.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
          >
            <Download className="mr-2 h-5 w-5" />
            下载PDF报告
          </button>
          <button
            onClick={handleUpgrade}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
          >
            获取专家定制方案
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Upgrade CTA */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              AI帮您先预诊，专家帮您精准落地
            </h3>
            <p className="text-blue-700 mb-4">
              获取AI+专家联合定制方案，让零碳园区建设更加精准高效
            </p>
            <button
              onClick={handleUpgrade}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              立即预约专家咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Watermark */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>* AI示意图仅供参考，具体实施方案请咨询专业工程师</p>
        </div>
      </div>
    </div>
  );
}