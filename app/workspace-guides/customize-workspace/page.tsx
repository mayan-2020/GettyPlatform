import { ArrowLeft, Settings } from "lucide-react";

export default function CustomizeWorkspace() {
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
            <Settings className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Customize your Workspace</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Learn how to personalize your workspace layout, panels, and interface elements to optimize your workflow.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Workspace Overview</h2>
            <p>
              A Workspace is a specified layout of the user interface. You can create multiple Workspaces for different
              tasks.
            </p>

            <p>A Workspace keeps track of the following information:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>A list of positions and sizes</li>
              <li>Columns visible in lists</li>
              <li>Sort order in lists</li>
              <li>Current view</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700">Default Workspaces</h2>
            <p>
              By default, a newly created application comes with <strong>two different workspaces</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Default:</strong> The standard workspace layout
              </li>
              <li>
                <strong>All:</strong> An alternative workspace configuration
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700">Managing Workspaces</h2>
            <p>You can access workspace management options through the workspace dropdown menu, which includes:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Default:</strong> Switch to the default workspace
              </li>
              <li>
                <strong>All:</strong> Switch to the "All" workspace view
              </li>
              <li>
                <strong>Manage Users:</strong> Access user management from workspace context
              </li>
              <li>
                <strong>Manage workspaces...:</strong> Open the workspace management interface
              </li>
              <li>
                <strong>Workspace settings...:</strong> Configure current workspace settings
              </li>
              <li>
                <strong>Save:</strong> Save changes to the current workspace
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700">Creating Custom Workspaces</h2>
            <p>To create a new workspace tailored to your specific needs:</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>Access the workspace dropdown menu</li>
              <li>Select "Manage workspaces..."</li>
              <li>Create a new workspace with your desired configuration</li>
              <li>Customize panel positions, sizes, and visibility</li>
              <li>Save your workspace for future use</li>
            </ol>

            <h2 className="text-2xl font-semibold text-blue-700">Workspace Customization Options</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Panel Layout:</strong> Arrange panels according to your workflow
              </li>
              <li>
                <strong>Column Configuration:</strong> Choose which columns are visible in lists
              </li>
              <li>
                <strong>Sort Preferences:</strong> Set default sorting for data lists
              </li>
              <li>
                <strong>View Settings:</strong> Configure the default view for your workspace
              </li>
            </ul>
          </div>
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
