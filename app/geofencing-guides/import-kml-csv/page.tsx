import { ArrowLeft, Upload } from "lucide-react"

export default function ImportKMLCSV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/geofencing-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Geofencing Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-5">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl shadow-md">
            <Upload className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Import Geofences via KML or CSV</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Quickly import multiple virtual zones using industry-standard file formats like KML and CSV.
          </p>
        </section>

        {/* Guide Content */}
        <section className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl shadow-lg p-10 space-y-12">
          {/* Formats */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Supported File Formats</h2>
            <p className="text-slate-700">
              The system accepts two file types for bulk geofence import: <strong>KML</strong> and <strong>CSV</strong>. Each has unique strengths:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">KML Format</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Supports complex polygon shapes</li>
                  <li>Includes full geographic data</li>
                  <li>Multiple geofences in one file</li>
                  <li>Compatible with Google Earth</li>
                  <li>Can include metadata and styles</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">CSV Format</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Simple and easy to edit</li>
                  <li>Best for circular geofences</li>
                  <li>Works with Excel and Google Sheets</li>
                  <li>Ideal for large data sets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* KML Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">KML File Structure</h2>
            <p className="text-slate-700">Your file should follow this XML structure:</p>
            <pre className="bg-slate-100 p-4 rounded-xl overflow-x-auto text-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <Placemark>
      <name>Geofence Name</name>
      <description>Geofence Description</description>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <coordinates>
              -122.366,37.816,0
              -122.365,37.816,0
              -122.365,37.815,0
              -122.366,37.815,0
              -122.366,37.816,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
  </Document>
</kml>`}
            </pre>

            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Polygons must be closed (first and last point same)</li>
              <li>Limit 100 geofences per file</li>
              <li>Max file size: 10MB</li>
            </ul>
          </div>

          {/* CSV Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">CSV File Structure</h2>
            <p className="text-slate-700">Include the following columns:</p>

            <div className="overflow-auto">
              <table className="min-w-full text-sm border border-slate-300">
                <thead className="bg-slate-100 text-left">
                  <tr>
                    <th className="px-4 py-2 border border-slate-300">Column</th>
                    <th className="px-4 py-2 border border-slate-300">Required</th>
                    <th className="px-4 py-2 border border-slate-300">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["name", "Yes", "Geofence name"],
                    ["latitude", "Yes", "Center latitude"],
                    ["longitude", "Yes", "Center longitude"],
                    ["radius", "Yes", "Radius in meters"],
                    ["description", "No", "Geofence description"],
                  ].map(([col, req, desc]) => (
                    <tr key={col}>
                      <td className="px-4 py-2 border border-slate-300">{col}</td>
                      <td className="px-4 py-2 border border-slate-300">{req}</td>
                      <td className="px-4 py-2 border border-slate-300">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold">Example:</h3>
            <pre className="bg-slate-100 p-4 rounded-xl overflow-x-auto text-sm">
{`name,latitude,longitude,radius,description
"Warehouse A",40.7128,-74.0060,500,"Main distribution center"
"Customer Site 1",40.7589,-73.9851,200,"Delivery location"
"Service Center",40.6892,-74.0445,300,"Vehicle maintenance facility"`}
            </pre>
          </div>

          {/* Import Instructions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Import Process</h2>

            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li>Go to the Geofence management section</li>
              <li>Click on <strong>Import Geofences</strong></li>
              <li>Select file type: <em>KML</em> or <em>CSV</em></li>
              <li>Choose and upload your file</li>
              <li>Preview and validate geofence data</li>
              <li>Choose import rules:
                <ul className="list-disc ml-6 mt-1">
                  <li>Overwrite duplicates</li>
                  <li>Skip existing entries</li>
                  <li>Apply default alert settings</li>
                </ul>
              </li>
              <li>Click <strong>Import</strong> to finish</li>
            </ol>
          </div>

          {/* Troubleshooting */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Troubleshooting</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li><strong>Invalid coordinates:</strong> Ensure all values are real-world lat/longs</li>
              <li><strong>File too large:</strong> Keep files under 10MB</li>
              <li><strong>Duplicate names:</strong> Use unique names</li>
              <li><strong>Test small:</strong> Try importing 1–2 items first</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 mt-24">
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
