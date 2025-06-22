import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function SOSGuide() {
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
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-red-100 text-red-600 rounded-xl shadow-sm">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">SOS Emergency System</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Emergency response system that allows drivers to quickly alert fleet managers and emergency contacts in case of urgent situations.
          </p>
        </section>

        {/* Content Sections */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 prose prose-slate max-w-none">
          <h2>SOS Field Overview</h2>
          <p>
            The SOS field is added to the main overview to be easy to detect any issue the driver is facing. This prominent placement ensures that emergency situations can be quickly identified and responded to by fleet managers and emergency personnel.
          </p>

          <div className="my-8">
            <img
              src="/images/sos-field.png"
              alt="Vehicle SOS status indicator showing normal state with green icon"
              className="border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <h2>Emergency Activation</h2>
          <p>
            Once the alarm button is pressed by the driver, the red icon will be activated in the SOS field. This visual indicator immediately alerts fleet managers to the emergency situation and triggers the emergency response protocol.
          </p>

          <h2>Notification System</h2>
          <p>When an SOS alert is activated, different types of notifications will be received by the receiver, including:</p>
          <ul>
            <li><strong>Email Alerts:</strong> Immediate email notifications to designated emergency contacts</li>
            <li><strong>Push Notifications:</strong> Real-time alerts to mobile devices and fleet management apps</li>
            <li><strong>Dashboard Alerts:</strong> Visual and audio alerts on the main monitoring dashboard</li>
            <li><strong>Escalation Notifications:</strong> Automatic escalation to supervisors if initial alerts are not acknowledged</li>
          </ul>

          <h2>Emergency Response Features</h2>
          <ul>
            <li><strong>Location Tracking:</strong> Immediate GPS location sharing when SOS is activated</li>
            <li><strong>Two-Way Communication:</strong> Ability to communicate with the driver during emergency</li>
            <li><strong>Emergency Contacts:</strong> Automatic notification to pre-configured emergency contacts</li>
            <li><strong>Incident Documentation:</strong> Automatic logging of emergency events for review and analysis</li>
          </ul>

          <h2>SOS Status Indicators</h2>
          <ul>
            <li><strong>Green Icon:</strong> Normal operation, no emergency</li>
            <li><strong>Red Icon:</strong> Emergency activated, immediate attention required</li>
            <li><strong>Flashing Red:</strong> Critical emergency with escalated priority</li>
          </ul>

          <h2>Best Practices</h2>
          <ul>
            <li>Train drivers on proper SOS system usage and when to activate alerts</li>
            <li>Regularly test the SOS system to ensure proper functionality</li>
            <li>Maintain updated emergency contact information</li>
            <li>Establish clear emergency response procedures for different types of situations</li>
            <li>Monitor SOS system performance and response times</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
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
