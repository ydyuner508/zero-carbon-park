'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "什么是零碳园区？",
    answer: "零碳园区是指通过可再生能源替代、能源效率提升、碳汇建设等措施，实现园区内碳排放与碳吸收平衡，达到净零碳排放目标的产业园区。"
  },
  {
    question: "AI生成的改造方案准确吗？",
    answer: "AI生成的方案基于大数据和算法模型，提供初步的改造方向和概念设计。实际实施前需要专业工程师进行现场勘察和详细设计。"
  },
  {
    question: "使用这个工具需要付费吗？",
    answer: "基础AI诊断服务完全免费，可以生成初步的改造效果图和建议。如需专业的详细方案和工程实施，我们提供付费的专家咨询服务。"
  },
  {
    question: "支持哪些类型的园区？",
    answer: "目前支持工业园、产业园、物流园、科技园等各类产业园区。未来我们将扩展至更多类型的建筑和区域。"
  },
  {
    question: "数据安全如何保障？",
    answer: "我们严格遵守数据保护法规，所有上传的数据仅用于AI分析，不会泄露给第三方，7天后自动删除。"
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h1>
          <p className="text-lg text-gray-600">
            找到关于零碳园区和AI诊断服务的答案
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pr-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            还有疑问？
          </h2>
          <p className="text-gray-600 mb-4">
            联系我们的专家团队，获取更详细的解答
          </p>
          <a
            href="/upgrade"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
          >
            预约专家咨询
          </a>
        </div>
      </div>
    </div>
  );
}