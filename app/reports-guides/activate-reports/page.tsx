import { ArrowLeft, BarChart3 } from "lucide-react"

export default function ActivateReports() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/reports-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Reports Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-5">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl shadow-md">
            <BarChart3 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Activate Reports</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn how to enable and configure reporting tools to gain actionable insights from your fleet data.
          </p>
        </section>

        {/* Step-by-Step Guide */}
        <section className="bg-white rounded-3xl shadow-md p-10 space-y-12 border border-slate-200">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Accessing Reports</h2>
            <p>
              Reports can be accessed through the platform’s reporting section. For advanced templates or specialized
              needs, contact your system administrator for assistance.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Report Activation Process</h2>
            <p>
              Follow these steps to activate and configure reports in your GPS tracking platform.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Navigate to Reports Section</h3>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Log into your fleet dashboard</li>
                <li>Click on <strong>Reports</strong> from the main navigation menu</li>
                <li>Explore available templates and report types</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Enable Report Generation</h3>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Go to the report configuration panel</li>
                <li>Select the desired report types</li>
                <li>Connect data sources and define filters</li>
                <li>Set user access permissions for reports</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Configure Report Parameters</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>Date Range:</strong> Choose the timeframe to analyze</li>
                <li><strong>Vehicle Selection:</strong> Pick which vehicles to include</li>
                <li><strong>Report Frequency:</strong> Set daily, weekly, or monthly generation</li>
                <li><strong>Output Format:</strong> Choose PDF, CSV, or Excel</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Custom Reports</h2>
            <p>
              Need a custom report layout or data type? Reach out to your system admin to have tailored reports built
              for your exact needs.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Start with predefined templates to get quick insights</li>
              <li>Periodically review report settings and update filters</li>
              <li>Ensure only authorized users can access sensitive reports</li>
              <li>Test each report with small datasets before scaling</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 mt-24">
        <div className="max-w-7xl mx-auto text-center text-sm space-y-1">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for evolving business needs</p>
          <p>Address: Italian Village 1, House No. 283</p>
          <a
            href="https://gettysecure.com"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
