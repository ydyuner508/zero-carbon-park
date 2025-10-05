import Link from "next/link";
import { ArrowRight, Upload, Zap, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI帮您规划零碳园区未来
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              上传数据或图片，1分钟生成AI改造图，让零碳园区触手可及
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              立即体验
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">上传</h3>
            <p className="text-gray-600">上传园区能耗数据或实景图片</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">生成</h3>
            <p className="text-gray-600">AI智能生成零碳改造效果图</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">查看</h3>
            <p className="text-gray-600">获取专业诊断与改造建议</p>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-green-600 text-2xl font-bold mb-2">免费体验</div>
              <p className="text-gray-600">无需付费，立即获得AI初步诊断</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-green-600 text-2xl font-bold mb-2">无需安装</div>
              <p className="text-gray-600">在线使用，随时随地生成报告</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-green-600 text-2xl font-bold mb-2">AI可视化</div>
              <p className="text-gray-600">直观展示零碳改造后的效果</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
