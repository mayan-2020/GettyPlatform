import { ArrowLeft, Wrench } from "lucide-react"

export default function MaintenanceGuide() {
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
            <Wrench className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Vehicle Maintenance Management</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Keep your fleet in optimal condition with automated maintenance schedules and smart reminders based on mileage or time intervals.
          </p>
        </section>

        {/* Content Sections */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 prose prose-slate max-w-none">
          <h2>Overview</h2>
          <p>
            Maintenance reminders help you keep track of routine services like oil changes, inspections, and other
            vehicle upkeep. The system automatically alerts you when a service is due based on mileage or time.
          </p>

          <h2>How Maintenance Reminders Work</h2>
          <ol>
            <li>Set your preferred maintenance interval (e.g., every 5,000 km or every 6 months)</li>
            <li>The system tracks vehicle mileage and/or elapsed time</li>
            <li>When a threshold is met, a reminder is triggered</li>
            <li>You log the completed service in the system</li>
            <li>The next maintenance cycle is automatically scheduled</li>
          </ol>

          <h2>Maintenance Scheduling Options</h2>

          <h3>Kilometer-Based Maintenance</h3>
          <ul>
            <li><strong>Oil Changes:</strong> Every 5,000–10,000 km</li>
            <li><strong>Tire Rotation:</strong> Every 8,000–12,000 km</li>
            <li><strong>Brake Inspection:</strong> Every 20,000–30,000 km</li>
            <li><strong>Major Service:</strong> Every 50,000–100,000 km</li>
          </ul>

          <h3>Time-Based Maintenance</h3>
          <ul>
            <li><strong>Daily:</strong> Pre-trip safety checks</li>
            <li><strong>Weekly:</strong> Fluid and pressure checks</li>
            <li><strong>Monthly:</strong> Full vehicle inspection</li>
            <li><strong>Annually:</strong> Registration, emissions testing</li>
          </ul>

          <h2>Maintenance Types</h2>

          <h3>Engine Maintenance</h3>
          <ul>
            <li>Oil and filter changes</li>
            <li>Air filter replacement</li>
            <li>Spark plug replacement</li>
            <li>Coolant system service</li>
          </ul>

          <h3>Safety Systems</h3>
          <ul>
            <li>Brake inspection</li>
            <li>Tire rotation and alignment</li>
            <li>Lighting and electrical checks</li>
            <li>Suspension system check</li>
          </ul>

          <h3>Compliance</h3>
          <ul>
            <li>Registration renewals</li>
            <li>Vehicle safety inspections</li>
            <li>Emission testing</li>
            <li>DOT/commercial inspections</li>
          </ul>

          <h2>Notification System</h2>
          <ul>
            <li><strong>Dashboard Alerts:</strong> In-platform indicators</li>
            <li><strong>Email Notifications:</strong> Automatic email reminders</li>
            <li><strong>Mobile Push:</strong> Alerts on connected mobile devices</li>
            <li><strong>Advance Notices:</strong> Get alerted before the due date</li>
          </ul>

          <h2>Logging and Tracking</h2>
          <ul>
            <li><strong>Service Logs:</strong> History of completed maintenance</li>
            <li><strong>Cost Tracking:</strong> Record expenses by vehicle</li>
            <li><strong>Vendor Info:</strong> Log who performed the service</li>
            <li><strong>Parts Tracking:</strong> List used parts and materials</li>
          </ul>

          <h2>Benefits</h2>
          <ul>
            <li><strong>Prevent Breakdowns:</strong> Stay ahead of unexpected issues</li>
            <li><strong>Extend Lifespan:</strong> Longer-lasting fleet vehicles</li>
            <li><strong>Reduce Costs:</strong> Fewer emergency repairs</li>
            <li><strong>Ensure Safety:</strong> Safer vehicles on the road</li>
            <li><strong>Regulatory Compliance:</strong> Meet inspection deadlines</li>
            <li><strong>Boost Efficiency:</strong> Smoother operations</li>
          </ul>

          <h2>Setup Guide</h2>
          <ol>
            <li><strong>List Tasks:</strong> Define services by vehicle type</li>
            <li><strong>Set Intervals:</strong> Choose km/time triggers</li>
            <li><strong>Add Notifications:</strong> Choose recipients and channels</li>
            <li><strong>Train Staff:</strong> Ensure proper use of system</li>
            <li><strong>Log Completion:</strong> Track each maintenance session</li>
          </ol>

          <h2>Reporting & Analysis</h2>
          <ul>
            <li><strong>Service History:</strong> Full logs per vehicle</li>
            <li><strong>Cost Trends:</strong> Spot high-maintenance vehicles</li>
            <li><strong>Compliance Tracking:</strong> Stay audit-ready</li>
            <li><strong>Predictive Insights:</strong> Plan ahead with data</li>
          </ul>
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
