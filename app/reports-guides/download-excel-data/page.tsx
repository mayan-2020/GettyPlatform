import { ArrowLeft, FileSpreadsheet } from "lucide-react"

export default function DownloadExcelData() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/reports-guides"
            className="flex items-center text-white hover:text-blue-300 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Reports Guides
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
            <FileSpreadsheet className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Download Reports as Excel</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Generate and download your GPS report data as Excel or CSV files to analyze and use in your company
            workflows.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-3xl shadow p-10 border border-slate-200 space-y-10">
          {/* Steps */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-blue-700">Step-by-Step Guide</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                Navigate to <strong>Main Menu → Reports → Manage Reports</strong> or choose from existing reports.
              </li>
              <li>
                Select the <strong>report parameters</strong> (date range, event rules, tags, and users).
              </li>
              <li>Click <strong>Run</strong> to render the report for preview.</li>
              <li>
                After previewing, click <strong>Download</strong> or choose to <strong>Send via Email</strong>.
              </li>
            </ol>
          </div>

          {/* Format Options */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Available Formats</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li><strong>Excel (.xlsx):</strong> Ideal for full-featured data analysis</li>
              <li><strong>CSV (.csv):</strong> Lightweight and compatible with all spreadsheet tools</li>
              <li><strong>CSV ZIP (.zip):</strong> Compressed format for large reports</li>
              <li><strong>PDF (.pdf):</strong> Printable format for documentation or sharing</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Why Excel?</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Perform advanced calculations and pivot analysis</li>
              <li>Create custom charts and graphs</li>
              <li>Apply your company’s branding and formatting</li>
              <li>Integrate with your reporting dashboards or BI tools</li>
              <li>Merge GPS data with other Excel-based records</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Always preview the report before downloading</li>
              <li>Use date filters to avoid large files and improve performance</li>
              <li>For large reports, prefer CSV ZIP to avoid browser issues</li>
              <li>Name files with clear titles and date ranges (e.g., <code>Report_Fleet_June2025.xlsx</code>)</li>
              <li>Keep periodic backups of Excel reports for audits or review</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-10 px-6 mt-24">
        <div className="max-w-7xl mx-auto text-center text-sm space-y-1">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for evolving business needs</p>
          <p>Address: Italian Village 1, House No. 283</p>
          <a href="https://gettysecure.com" className="text-blue-400 hover:text-blue-300 transition">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
