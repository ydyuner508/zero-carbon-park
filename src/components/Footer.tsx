'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">零碳园区工具站</span>
            </div>
            <p className="text-gray-400 mb-4">
              让AI帮您规划零碳园区未来，上传数据或图片，1分钟生成AI改造图与诊断报告。
            </p>
            <p className="text-sm text-gray-500">
              致力于推动中国碳中和进程，为园区企业提供专业的零碳解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-gray-400 hover:text-white transition-colors"
                >
                  开始体验
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors"
                >
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="text-gray-400 hover:text-white transition-colors"
                >
                  专家咨询
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors"
                >
                  隐私政策
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"
                >
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"
                >
                  免责声明
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 零碳园区工具站. 保留所有权利.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                技术支持：400-123-4567
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}