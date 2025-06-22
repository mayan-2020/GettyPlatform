import { ArrowLeft, Shield } from "lucide-react";

export default function AccessLevelUsers() {
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
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Access Level Users</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Configure user access levels and security permissions for different roles and set up subaccounts for
            clients.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Setting Up a Subaccount for a Client</h2>
            <p>
              Follow these steps to create a restricted access account for clients that only shows specific vehicles and
              data.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Create a Tag</h3>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Navigate to the Tags management section</li>
                <li>Click "Create New Tag"</li>
                <li>Give the tag a descriptive name (e.g., "Client_ABC_Vehicles")</li>
                <li>Save the tag</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Create a View</h3>
              <p>
                Set up a view that defines what vehicles the client will see when they log in. Make sure it's linked to the
                tag you just created.
              </p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Go to Views management</li>
                <li>Create a new view</li>
                <li>Link the view to the tag created in Step 1</li>
                <li>Configure the view settings as needed</li>
                <li>Save the view</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Add a New User</h3>
              <p>Create the user account that the client will use to access the system.</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Go to Admin → Manage users</li>
                <li>Click "Create new user"</li>
                <li>
                  Fill in the required fields:
                  <ul className="list-disc list-inside ml-5 text-slate-600">
                    <li>Username</li>
                    <li>Password</li>
                    <li>Email address</li>
                    <li>Full name</li>
                  </ul>
                </li>
                <li>Save the user with default settings</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 4: Create a Role</h3>
              <p>Set up a custom role that defines the specific permissions for the client.</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Navigate to Admin → Roles</li>
                <li>Create a new role</li>
                <li>Take a copy of the "Operator" role as a starting point</li>
                <li>
                  Configure the role settings:
                  <ul className="list-disc list-inside ml-5 text-slate-600">
                    <li><strong>ReadView:</strong> Select the view created in Step 2</li>
                    <li><strong>ReadData:</strong> Select the tag created in Step 1</li>
                    <li><strong>Users:</strong> Select the user created in Step 3</li>
                  </ul>
                </li>
                <li>Enter all other required details</li>
                <li>Save the role</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 5: Remove User from Default Role</h3>
              <p>Ensure the client user only has access through the custom role you created.</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Return to the Manage Users panel</li>
                <li>Click on the user created in Step 3</li>
                <li>In the Roles section, deselect any default roles</li>
                <li>Ensure only the new custom role is selected</li>
                <li>Save the changes</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 6: Test and Share Login Credentials</h3>
              <p>Verify the setup works correctly before sharing access with the client.</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Log out of your admin account</li>
                <li>Log in using the client's username and password</li>
                <li>Verify that only the intended vehicles are visible</li>
                <li>Test that the client can only access permitted features</li>
                <li>Once confirmed, send the credentials to the client via secure communication</li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Security Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Use strong passwords for client accounts</li>
                <li>Regularly review and update client permissions</li>
                <li>Monitor client account activity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Organization Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Use consistent naming conventions for tags, views, and roles</li>
                <li>Document which vehicles belong to which clients</li>
                <li>Keep a record of client access permissions</li>
                <li>Regularly audit client accounts and permissions</li>
              </ul>
            </div>
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
