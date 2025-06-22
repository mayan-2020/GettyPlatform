import { ArrowLeft, Shield } from "lucide-react"

export default function SeatbeltGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/vehicle-management-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Vehicle Management Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl shadow-sm">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Seatbelt Monitoring</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Monitor seatbelt usage and ensure driver safety compliance with real-time alerts and indicators.
          </p>
        </section>

        {/* Content Sections */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 prose prose-slate max-w-none">
          <h2>Seatbelt Status Indicator</h2>
          <p>
            The seatbelt monitoring system displays a visual indicator (SB) that shows the current seatbelt status for
            each vehicle. The icon will be displayed in red if the car is moving and the seatbelt is not fastened.
          </p>

          <div className="my-8">
            <img
              src="/images/seatbelt-field.png"
              alt="Seatbelt status indicator showing red alert when seatbelt is not fastened"
              className="border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <h2>Configurable Alert Conditions</h2>
          <p>
            We can control when the seatbelt alert should be activated. The system can be configured to trigger the red
            icon under the following conditions:
          </p>
          <ul>
            <li>
              <strong>Vehicle Start:</strong> Once the car is turned on and seatbelt is not fastened
            </li>
            <li>
              <strong>Speed Threshold:</strong> When the vehicle speed exceeds 10 km/h without seatbelt fastened
            </li>
            <li>
              <strong>Time Duration:</strong> When the seatbelt has not been fastened for more than 5 minutes
            </li>
          </ul>

          <h2>Safety Benefits</h2>
          <ul>
            <li>
              <strong>Driver Safety:</strong> Ensure drivers are properly secured while operating vehicles
            </li>
            <li>
              <strong>Compliance Monitoring:</strong> Track seatbelt usage across your entire fleet
            </li>
            <li>
              <strong>Risk Reduction:</strong> Minimize injury risk in case of accidents
            </li>
            <li>
              <strong>Insurance Benefits:</strong> Demonstrate safety compliance to insurance providers
            </li>
          </ul>

          <h2>Alert Management</h2>
          <p>
            The seatbelt monitoring system provides flexible configuration options to balance safety enforcement with
            practical operational needs. Fleet managers can adjust the sensitivity and timing of alerts based on their
            specific requirements and operational environment.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
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
