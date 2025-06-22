import { ArrowLeft, User } from "lucide-react"

export default function DriverGuide() {
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
            <User className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Driver Management</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Manage driver assignments and track driver identification in your fleet management system.
          </p>
        </section>

        {/* Content Sections */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 prose prose-slate max-w-none">
          <h2>Driver Field Display</h2>
          <p>
            A driver field is shown next to each vehicle’s license plate in the system. When a vehicle is in use, the
            assigned driver is automatically displayed.
          </p>

          <h2>How Driver Detection Works</h2>
          <p>
            When the vehicle is turned on, the system detects the driver ID using RFID cards or key fobs. The driver’s
            name then appears in the driver field in real-time.
          </p>

          <h2>Driver ID Detection Methods</h2>
          <p>The system currently supports the following detection methods:</p>
          <ul>
            <li>RFID cards</li>
            <li>Driver key fobs</li>
            <li>Optional keypad/manual entry (if enabled)</li>
          </ul>

          <h2>Benefits of Driver Tracking</h2>
          <ul>
            <li>
              <strong>Real-time Identification:</strong> See who is driving each vehicle instantly
            </li>
            <li>
              <strong>Accountability:</strong> Monitor driver behavior and trip history
            </li>
            <li>
              <strong>Security:</strong> Ensure only authorized drivers are using fleet vehicles
            </li>
            <li>
              <strong>Compliance:</strong> Satisfy regulatory requirements for driver management
            </li>
          </ul>

          <h2>Visual Example</h2>
          <p>Below is an example of how the driver field appears within the platform interface:</p>
          <img
            src="/images/driver-field.png"
            alt="Driver field interface showing driver information"
            className="border border-gray-300 rounded-lg shadow-sm my-6"
          />
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
