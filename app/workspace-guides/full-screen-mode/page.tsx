import { ArrowLeft, Maximize } from "lucide-react";

export default function FullScreenMode() {
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
            <Maximize className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Full-screen mode</h1>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-8 max-w-4xl mx-auto prose prose-slate">
          <p>
            Full-screen mode enables the user to use their entire screen for the map, making it easier to see their
            fleet. Other panels are hidden in full-screen mode but still appear in your normal workspace when not in
            full-screen mode. Looking to create a full-screen workspace with restricted data/panel access? Check out the
            guide on{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              kiosk mode
            </a>
            .
          </p>

          <h2>Accessing Full-Screen Mode</h2>
          <p>Inside the application toolbar, you can find the full-screen mode button.</p>

          <h2>Benefits of Full-Screen Mode</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Enhanced Visibility:</strong> Use your entire screen real estate for map viewing
            </li>
            <li>
              <strong>Better Fleet Overview:</strong> See more vehicles and coverage area at once
            </li>
            <li>
              <strong>Reduced Distractions:</strong> Hide unnecessary panels for focused monitoring
            </li>
            <li>
              <strong>Presentation Mode:</strong> Ideal for displaying fleet status on large screens or projectors
            </li>
          </ul>

          <h2>How to Use Full-Screen Mode</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Locate the full-screen mode button in the application toolbar</li>
            <li>Click the button to enter full-screen mode</li>
            <li>The map will expand to fill your entire screen</li>
            <li>To exit full-screen mode, press the Escape key or click the exit full-screen button</li>
          </ol>

          <h2>What Happens in Full-Screen Mode</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All side panels and toolbars are hidden</li>
            <li>The map becomes the primary focus</li>
            <li>Vehicle markers and fleet information remain visible</li>
            <li>Essential controls may still be accessible via overlay menus</li>
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
