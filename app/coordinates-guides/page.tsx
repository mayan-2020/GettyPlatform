import { ArrowLeft, Globe } from "lucide-react";

export default function CoordinatesGuides() {
  const coordinateGuides = [
    {
      title: "GCS",
      description:
        "Geographic Coordinate System - Click anywhere on the map to get latitude and longitude coordinates with copy functionality",
      image: "/images/gcs-coordinates.png",
      imageAlt: "GCS coordinates popup showing latitude, longitude and copy functionality",
    },
    {
      title: "MGRS",
      description: "Military Grid Reference System - Right-click anywhere on the map to get MGRS coordinates",
      image: "/images/mgrs-context-menu.png",
      imageAlt: "MGRS context menu showing right-click options including Get MGRS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Platform</span>
          </a>
          <img
            src="/images/getty-logo.png"
            alt="Getty Tech Logo"
            className="h-9 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl shadow-sm">
            <Globe className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Coordinates Guides</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Learn how to work with GPS coordinates, location data, and mapping functionalities using different
            coordinate systems.
          </p>
        </section>

        {/* Guides List */}
        <section className="space-y-10 max-w-4xl mx-auto">
          <ul className="space-y-8">
            {coordinateGuides.map((guide, idx) => (
              <li key={idx} className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mt-1 md:mt-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{guide.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{guide.description}</p>
                  <img
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="border border-gray-200 rounded-lg shadow-sm max-w-full h-auto"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for new business needs</p>
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
  );
}
