'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, AlertCircle } from 'lucide-react';

export default function GeneratePage() {
  const [energyData, setEnergyData] = useState({
    electricity: '',
    gas: '',
    oil: '',
    location: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleEnergyDataChange = (field: string, value: string) => {
    setEnergyData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('electricity', energyData.electricity);
      formData.append('gas', energyData.gas);
      formData.append('oil', energyData.oil);
      formData.append('location', energyData.location);
      
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Store result in sessionStorage for the result page
          sessionStorage.setItem('aiResult', JSON.stringify(result.data));
          router.push('/result');
        } else {
          alert('生成失败，请重试');
        }
      } else {
        alert('生成失败，请重试');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('生成失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">上传园区数据</h1>
          <p className="text-lg text-gray-600">填写能耗数据或上传园区图片，AI将为您生成零碳改造方案</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Energy Data Upload */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-green-600" />
                能耗数据（可选）
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    用电量 (kWh)
                  </label>
                  <input
                    type="number"
                    value={energyData.electricity}
                    onChange={(e) => handleEnergyDataChange('electricity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：100000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    燃气用量 (Nm³)
                  </label>
                  <input
                    type="number"
                    value={energyData.gas}
                    onChange={(e) => handleEnergyDataChange('gas', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    用油 (L)
                  </label>
                  <input
                    type="number"
                    value={energyData.oil}
                    onChange={(e) => handleEnergyDataChange('oil', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：10000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    园区位置
                  </label>
                  <input
                    type="text"
                    value={energyData.location}
                    onChange={(e) => handleEnergyDataChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="例如：北京市朝阳区"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Upload className="mr-2 h-5 w-5 text-green-600" />
                园区图片（可选）
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="园区图片预览"
                      className="mx-auto h-48 w-auto rounded-lg object-cover"
                    />
                  ) : (
                    <div>
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600">
                        点击上传园区实景图，支持JPG、PNG格式
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        文件大小不超过20MB，可跳过此步骤
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-400" />
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    温馨提示：能耗数据和图片至少填写一项，AI将根据可用信息生成改造方案
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    生成中...
                  </>
                ) : (
                  '生成AI诊断报告'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}