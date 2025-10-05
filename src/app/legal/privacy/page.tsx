export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">隐私政策</h1>
          <p className="text-gray-600">最后更新日期：2025年10月5日</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 信息收集</h2>
            <p className="text-gray-700">
              我们收集您在使用零碳园区工具站时主动提供的信息，包括：
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>园区能耗数据（用电量、燃气用量、用油等）</li>
              <li>园区图片或视频资料</li>
              <li>园区位置信息</li>
              <li>联系信息（仅在预约专家服务时收集）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 信息使用</h2>
            <p className="text-gray-700">
              收集的信息仅用于以下目的：
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>生成AI零碳改造方案和诊断报告</li>
              <li>提供个性化的专家咨询服务</li>
              <li>改进我们的AI算法和服务质量</li>
              <li>发送服务相关的通知和更新</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 信息保护</h2>
            <p className="text-gray-700">
              我们采用业界标准的安全措施保护您的信息：
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>所有数据传输采用HTTPS加密</li>
              <li>上传数据7天后自动删除</li>
              <li>不会出售或共享您的信息给第三方</li>
              <li>严格限制内部员工访问权限</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cookie使用</h2>
            <p className="text-gray-700">
              我们使用Cookie来改善用户体验，包括：
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>保存用户偏好设置</li>
              <li>分析网站使用情况</li>
              <li>优化服务性能</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 用户权利</h2>
            <p className="text-gray-700">
              您拥有以下权利：
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>随时查看和修改您的个人信息</li>
              <li>要求删除您的所有数据</li>
              <li>选择不接收营销信息</li>
              <li>撤回之前的信息使用同意</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 政策变更</h2>
            <p className="text-gray-700">
              我们可能会不时更新本隐私政策。任何变更都会在本页面公布，
              重大变更我们会通过邮件通知注册用户。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 联系我们</h2>
            <p className="text-gray-700">
              如有任何隐私相关问题，请联系我们：
            </p>
            <div className="text-gray-700 mt-2">
              <p>邮箱：privacy@zerocarbonpark.com</p>
              <p>电话：400-123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}