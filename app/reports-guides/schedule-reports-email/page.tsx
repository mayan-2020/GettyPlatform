import { ArrowLeft, Mail } from "lucide-react"

export default function ScheduleReportsEmail() {
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
        {/* Page Title */}
        <section className="mb-12 text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Schedule Reports via Email
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Automatically send reports to team members by configuring scheduled email delivery.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-3xl shadow p-10 border border-slate-200 space-y-10">
          {/* Configuration Steps */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-blue-700">Configuration</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>
                Navigate to <strong>Main Menu → Reports → Manage Reports</strong> or{" "}
                <a href="#" className="text-blue-600 hover:underline">generate a report instance</a>{" "}
                by following the steps from the previous guide.
              </li>
              <li>
                Select the report you wish to schedule. A settings window will appear.
              </li>
              <li>
                In the left-side menu, select <strong>Schedule</strong>.
              </li>
              <li>
                Toggle <strong>Scheduling active</strong> to enable automatic delivery.
              </li>
            </ol>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Additional Options</h2>
            <p className="text-slate-700">Once scheduling is enabled, you can configure:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Email recipients</li>
              <li>Report frequency (daily, weekly, monthly)</li>
              <li>Preferred delivery time</li>
              <li>Output format (PDF, CSV, Excel)</li>
              <li>Custom subject and message body</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Test the report with a small group before organization-wide delivery</li>
              <li>Schedule reports during working hours to ensure timely review</li>
              <li>Maintain accurate recipient lists to avoid email issues</li>
              <li>Check email logs for failed or bounced deliveries</li>
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
