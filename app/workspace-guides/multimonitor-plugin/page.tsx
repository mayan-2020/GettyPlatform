import { ArrowLeft, Monitor } from "lucide-react";

export default function MultiMonitorPlugin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/workspace-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Workspace Guides</span>
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
            <Monitor className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">MultiMonitor plugin</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            MultiMonitor plugin allows you to show multiple maps on a different monitor.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-8 max-w-4xl mx-auto prose prose-slate">
          <p>
            With this plugin, you can pop out up to nine additional maps, either showing a static area of the map or
            follow a specific asset.
          </p>

          <h2>Setup</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              In <strong>Site Admin (Legacy)</strong> go to the <strong>Plugins</strong> &gt;{" "}
              <strong>My Plugins</strong> tab
            </li>
            <li>
              Click on <strong>Get More Plugins</strong>
            </li>
            <li>
              Install <strong>MultiMonitor</strong>
            </li>
            <li>
              Go to the <strong>Privileges and Features</strong> of your application and enable{" "}
              <strong>Multimonitor</strong> privilege
            </li>
          </ol>

          <h2>Benefits of MultiMonitor Setup</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Enhanced Monitoring:</strong> View multiple areas simultaneously
            </li>
            <li>
              <strong>Asset Tracking:</strong> Follow specific vehicles on dedicated screens
            </li>
            <li>
              <strong>Improved Productivity:</strong> Monitor different regions without switching views
            </li>
            <li>
              <strong>Control Room Efficiency:</strong> Perfect for dispatch and monitoring centers
            </li>
            <li>
              <strong>Flexible Display:</strong> Up to nine additional map windows
            </li>
          </ul>

          <h2>Use Cases</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dispatch Centers:</strong> Monitor multiple service areas simultaneously
            </li>
            <li>
              <strong>Fleet Operations:</strong> Track different vehicle groups on separate screens
            </li>
            <li>
              <strong>Emergency Services:</strong> Monitor critical areas and response units
            </li>
            <li>
              <strong>Logistics:</strong> Track deliveries across different regions
            </li>
          </ul>

          <h2>Configuration Options</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Static Area Display:</strong> Show a fixed geographic region
            </li>
            <li>
              <strong>Asset Following:</strong> Automatically track specific vehicles
            </li>
            <li>
              <strong>Multiple Windows:</strong> Open up to nine additional map views
            </li>
            <li>
              <strong>Independent Controls:</strong> Each monitor can have different zoom and focus
            </li>
          </ul>

          <h2>Best Practices</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Plan your monitor layout based on operational needs</li>
            <li>Assign specific areas or assets to each monitor</li>
            <li>Ensure adequate screen resolution for clear map viewing</li>
            <li>Train operators on multi-monitor navigation</li>
            <li>Consider monitor positioning for optimal viewing angles</li>
          </ul>

          <h2>Technical Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multiple monitor hardware setup</li>
            <li>Sufficient graphics card capability</li>
            <li>Adequate system memory for multiple map instances</li>
            <li>Proper monitor calibration and positioning</li>
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
  );
}
