import {
  MapPin,
  Bell,
  BarChart3,
  Car,
  Users,
  FolderOpen,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Settings,
  Shield,
  Rocket,
  Navigation,
  Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const features = [
    {
      icon: BookOpen,
      title: "Easy to Follow",
      description: "Step-by-step guides for geofencing, alerts, reporting and more",
    },
    {
      icon: CheckCircle,
      title: "Step-by-Step",
      description: "Clear instructions that guide you through each process",
    },
    {
      icon: Settings,
      title: "Complete Guide",
      description: "Comprehensive documentation covering all features",
    },
  ]

  const exploreCards = [
    {
      icon: MapPin,
      title: "Geofencing",
      description: "Set up virtual boundaries and get alerts when vehicles enter or exit areas",
      link: "View guides",
      href: "/geofencing-guides",
    },
    {
      icon: Bell,
      title: "Alerts",
      description: "Configure email and real-time notifications for important events",
      link: "View guides",
      href: "/alerts-guides",
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "Generate detailed analytics and export data in multiple formats",
      link: "View guides",
      href: "/reports-guides",
    },
    {
      icon: Car,
      title: "Vehicle Management",
      description: "Manage devices, maintenance schedules and vehicle information",
      link: "View guides",
      href: "/vehicle-management-guides",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Create users, manage groups and control access permissions",
      link: "View guides",
      href: "/user-management-guides",
    },
    {
      icon: Shield,
      title: "Access Level Users",
      description: "Configure user access levels and security permissions for different roles",
      link: "View guides",
      href: "/access-level-users",
    },
    {
      icon: FolderOpen,
      title: "Workspace",
      description: "Manage multiple sites, organize assets and configure workspace settings",
      link: "View guides",
      href: "/workspace-guides",
    },
    {
      icon: Navigation,
      title: "Tracking Tool",
      description: "Advanced tracking features and tools for comprehensive fleet monitoring",
      link: "View guides",
      href: "/tracking-tool-guides",
    },
    {
      icon: Globe,
      title: "Coordinates",
      description: "Work with GPS coordinates, location data, and mapping functionalities",
      link: "View guides",
      href: "/coordinates-guides",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg mb-8">
            <Rocket className="w-5 h-5" />
            <span className="font-medium">Get Started with Getty Tech Platform</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Explore Details Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Explore Details...</h2>
          <p className="text-slate-600">Click on any feature to get the instructions</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {exploreCards.map((card, index) => (
            <Card
              key={index}
              className="border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <card.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">{card.description}</p>

                    {card.bulletPoints && (
                      <div className="text-sm text-slate-600 mb-4 space-y-3">
                        {card.bulletPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-2">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              {typeof point === "string" ? (
                                <span>{point}</span>
                              ) : (
                                <div>
                                  <span className="block mb-2">{point.text}</span>
                                  <img
                                    src={point.image || "/placeholder.svg"}
                                    alt={
                                      point.image?.includes("gcs")
                                        ? "GCS coordinates popup showing latitude, longitude and copy functionality"
                                        : "MGRS context menu showing right-click options including Get MGRS"
                                    }
                                    className="border border-gray-200 rounded-lg shadow-sm max-w-full h-auto"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <a
                      href={card.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      {card.link}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white mb-2">© 2024 Getty Tech. All rights reserved.</p>
          <p className="text-sm text-white mb-1">Comprehensive GPS tracking solutions for new business needs</p>
          <p className="text-sm text-white mb-2">Address: Italian Village 1 House No 283</p>
          <p className="text-sm text-white mb-2">
            For inquiries, contact us at{" "}
            <a href="mailto:support@gettytech.com" className="text-blue-400 hover:text-blue-300">
              support@gettytech.com
            </a>
          </p>
          <a href="https://gettysecure.com" className="text-sm text-blue-400 hover:text-blue-300">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
