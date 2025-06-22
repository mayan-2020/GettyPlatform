import { ArrowLeft, Key } from "lucide-react"

export default function ChangePassword() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <a
              href="/user-management-guides"
              className="flex items-center text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to User Management Guides
            </a>
            <div className="flex items-center">
              <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-10">
          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
              <Key className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">How to Change Password from Application?</h1>
            <p className="text-lg text-slate-600">
              This article describes how a logged-in user can reset their password in the GpsGate web application. There
              are 2 ways in which the user can change their password. Let's have a look.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>1. User Settings</h2>
            <p>
              Once a user logs in to the application, they can navigate to{" "}
              <strong>Main Menu &gt; Username &gt; User Settings</strong>. The Settings page will now open in which you
              can select 'Password' from the left and enter your 'Current Password' and 'New Password.' Then, click on
              'Save.'
            </p>

            <p>
              <strong>Note:</strong> If you don't see 'Password' in the left, you have to activate the{" "}
              <em>'_ChangePassword'</em> privilege in the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Application Privileges
              </a>
              .
            </p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OPLcy8i2zrAZSL07kK1BZi1xnT8Xbl.png"
                alt="Password change settings screen showing Current password and New password fields with Save and Cancel buttons"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h2>2. User-details page</h2>
            <p>
              Once a user logs in to the application, they can navigate to{" "}
              <strong>Main Menu &gt; Admin &gt; Manage Users</strong>, and click on their name in the list of users. Their
              user-details page will open where they can view the password field. Now, they can just fill in the new
              password and press on 'Save.'
            </p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZwDSag5FUj96exweKq2J7zW1ukrAnO.png"
                alt="User account creation form interface showing user details with highlighted password field"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <p>You can now log in with your new password the next time you log in to the application.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-16">
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
