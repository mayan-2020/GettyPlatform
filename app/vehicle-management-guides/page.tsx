import { ArrowLeft, Car } from "lucide-react"

export default function VehicleManagementGuides() {
  const vehicleManagementGuides = [
    {
      title: "Driver",
      href: "/vehicle-management-guides/driver",
    },
    {
      title: "Seatbelt",
      href: "/vehicle-management-guides/seatbelt",
    },
    {
      title: "SOS",
      href: "/vehicle-management-guides/sos",
    },
    {
      title: "Maintenance",
      href: "/vehicle-management-guides/maintenance",
    },
    {
      title: "Event panel",
      href: "/vehicle-management-guides/event-panel",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Platform
            </a>
            <div className="flex items-center">
              <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
            <Car className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Vehicle Management Guides</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive guides to help you manage vehicles, drivers, safety features, and emergency systems for your
            fleet tracking operations.
          </p>
        </div>

        {/* Guides List */}
        <div className="mb-10">
          <ul className="space-y-3 ml-4">
            {vehicleManagementGuides.map((guide, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <a href={guide.href} className="text-left group block">
                    <h3 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white mb-2">© 2024 Getty Tech. All rights reserved.</p>
          <p className="text-sm text-white mb-1">Comprehensive GPS tracking solutions for new business needs</p>
          <p className="text-sm text-white mb-2">Address: Italian Village 1 House No 283</p>
          <a href="https://gettysecure.com" className="text-sm text-blue-400 hover:text-blue-300">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
