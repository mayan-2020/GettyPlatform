import { ArrowLeft, Activity } from "lucide-react"

export default function EventPanelGuide() {
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
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16 prose prose-slate max-w-none">
        {/* Page Header */}
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl shadow-sm">
            <Activity className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Event Panel</h1>
          <p className="text-lg leading-relaxed">
            The Event Panel is designed to make your user experience efficient and easy by providing real-time monitoring of vehicle violations and events.
          </p>
        </section>

        {/* Content Sections */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12">
          <h2>Real-Time Event Monitoring</h2>
          <p>
            The Event Panel provides a comprehensive overview of all vehicle violations and events happening in real-time across your fleet. This centralized dashboard allows you to quickly identify and respond to any issues as they occur.
          </p>

          <div className="my-8">
            <img
              src="/images/event-panel.png"
              alt="Event Panel interface showing various vehicle violations including speeding, unplug alerts, SOS events, and seatbelt violations"
              className="border border-gray-300 rounded-lg shadow-sm w-full"
            />
          </div>

          <h2>Event Categories</h2>
          <p>The Event Panel displays different types of violations and events, including:</p>
          <ul>
            <li><strong>Speed Violations:</strong> Alerts when vehicles exceed speed limits (e.g., "Over 100 km/h")</li>
            <li><strong>Device Alerts:</strong> Notifications for device tampering or disconnection ("Unplug Alert")</li>
            <li><strong>Emergency Events:</strong> SOS alerts and emergency situations ("Vehicle SOS", "Lighter SOS")</li>
            <li><strong>Safety Violations:</strong> Seatbelt compliance monitoring ("Seatbelt not fastened")</li>
          </ul>

          <h2>Key Benefits</h2>
          <ul>
            <li><strong>Efficient User Experience:</strong> All critical events are displayed in one centralized location</li>
            <li><strong>Real-Time Detection:</strong> Violations are detected and displayed immediately as they occur</li>
            <li><strong>Easy Monitoring:</strong> Visual indicators and counters make it simple to track event frequency</li>
            <li><strong>Quick Response:</strong> Immediate visibility allows for faster response to critical situations</li>
          </ul>

          <h2>Data Management and Reporting</h2>
          <p>
            In case of any violations, you will detect them in real-time through the Event Panel. All event data is automatically saved and stored in comprehensive reports. This dual approach ensures that:
          </p>
          <ul>
            <li>You can respond immediately to urgent situations</li>
            <li>Historical data is preserved for analysis and compliance</li>
            <li>Trends and patterns can be identified over time</li>
            <li>Reports can be generated for management review</li>
          </ul>

          <h2>Vehicle Control and Management</h2>
          <p>
            This way, you can effectively control your vehicles by having complete visibility into their operations. The Event Panel serves as your command center for:
          </p>
          <ul>
            <li><strong>Proactive Monitoring:</strong> Identify issues before they become major problems</li>
            <li><strong>Fleet Oversight:</strong> Maintain control over your entire fleet from one interface</li>
            <li><strong>Compliance Management:</strong> Ensure vehicles and drivers adhere to safety standards</li>
            <li><strong>Performance Tracking:</strong> Monitor fleet performance and identify improvement opportunities</li>
          </ul>

          <h2>Event Status Indicators</h2>
          <p>The Event Panel uses color-coded indicators to help you quickly assess the severity of events:</p>
          <ul>
            <li><strong>Red Triangles:</strong> Active violations requiring immediate attention</li>
            <li><strong>Blue Triangles:</strong> Important events that need monitoring</li>
            <li><strong>Gray Triangles:</strong> Event categories with no current violations</li>
          </ul>

          <h2>Best Practices</h2>
          <ul>
            <li>Regularly monitor the Event Panel throughout the day</li>
            <li>Set up appropriate alert thresholds for different event types</li>
            <li>Review event reports periodically to identify trends</li>
            <li>Train staff on proper response procedures for different event types</li>
            <li>Use event data to improve fleet policies and driver training</li>
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
