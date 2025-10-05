'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function UpgradePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    parkName: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">提交成功！</h2>
            <p className="text-gray-600 mb-6">
              您的需求已收到，我们的专家将在24小时内与您联系
            </p>
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">专家定制方案预约</h1>
          <p className="text-lg text-gray-600">
            填写您的信息，我们的专家团队将为您提供一对一的零碳园区建设咨询
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  电话 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入您的联系电话"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入您的邮箱地址"
                />
              </div>

              <div>
                <label htmlFor="parkName" className="block text-sm font-medium text-gray-700 mb-2">
                  园区名称 *
                </label>
                <input
                  type="text"
                  name="parkName"
                  id="parkName"
                  required
                  value={formData.parkName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入园区名称"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  备注信息
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请描述您的具体需求或问题"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    提交中...
                  </>
                ) : (
                  <>
                    提交预约
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">联系我们</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">电话咨询</h3>
                  <p className="text-gray-600">400-123-4567</p>
                  <p className="text-sm text-gray-500">工作日 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">邮件咨询</h3>
                  <p className="text-gray-600">consult@zerocarbonpark.com</p>
                  <p className="text-sm text-gray-500">24小时内回复</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">公司地址</h3>
                  <p className="text-gray-600">北京市朝阳区<br />零碳科技园A座</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">服务承诺</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• 24小时内专业顾问联系</li>
                <li>• 免费初步方案设计</li>
                <li>• 全程项目跟踪服务</li>
                <li>• 投资回报分析报告</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}