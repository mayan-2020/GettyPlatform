import { ArrowLeft, Layers } from "lucide-react";

export default function MapLayers() {
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
            <Layers className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Map Layers</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Configure and customize different map layers to enhance your fleet tracking visualization.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-8 max-w-4xl mx-auto prose prose-slate">
         

          <h2>What Map Layers Typically Include</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Switch between different map types (satellite, terrain, street view)</li>
            <li>Add overlay information like traffic, weather, or points of interest</li>
            <li>Customize the visual appearance of your tracking interface</li>
            <li>Toggle various data layers on and off for better visibility</li>
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
