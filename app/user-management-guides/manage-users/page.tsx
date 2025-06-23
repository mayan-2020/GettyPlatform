import { ArrowLeft, UserPlus } from "lucide-react"

export default function ManageUsers() {
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
              <UserPlus className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Manage Users</h1>
            <p className="text-lg text-slate-600">
              Learn how to add new users or make changes to existing ones using the Manage Users panel.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Overview</h2>
            <p>
              Need to add a new user or make changes to existing ones in your application? All user-related actions are
              now streamlined and easily accessible via the Manage Users panel. In this article, you'll learn how to
              efficiently use the Manage Users panel, with tips and tricks to make your day-to-day operations smoother.
            </p>

            <h2>How to Access</h2>
            <ol>
              <li>Press on the Main Menu in the top left corner of the page</li>
              <li>
                Navigate to <strong>Admin</strong> and select <strong>Manage Users</strong>
              </li>
            </ol>

            <h2>1. Invite User</h2>
            <p>
              The Invite Users feature lets you quickly invite team members to your Getty Secure platform. You can assign them
              roles such as Administrator or Operator, and they'll gain access immediately upon accepting the invite.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Invited users with web and mobile login privileges only get managed from the
                    select list panel.
                  </p>
                </div>
              </div>
            </div>

            <h3>This is a great way to:</h3>
            <ul>
              <li>Expand your team quickly</li>
              <li>Control access levels</li>
              <li>Improve collaboration and operational efficiency</li>
            </ul>

            <h2>2. Create a Custom User</h2>
            <p>
              Want to manually create a user instead of sending an invite? Use the <strong>Create Custom User</strong>{" "}
              button. It opens a form where you can enter all the required information for the new user.
            </p>

            <h2>3. Search Bar</h2>
            <p>Looking for a specific user? Use the search bar to filter by:</p>
            <ul>
              <li>Name</li>
              <li>Tags</li>
              <li>Roles</li>
              <li>Driver ID</li>
              <li>Custom fields</li>
              <li>or any other data that is enabled</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> The search only works with data that is currently visible in the table.
                    For example, if you're searching by role but the "Role" column isn't enabled, the search will return
                    no results.
                  </p>
                </div>
              </div>
            </div>

            <h2>4. User Table Columns</h2>
            <p>
              The user table displays comprehensive information about each user in your system. The available columns
              include:
            </p>
            <ul>
              <li>
                <strong>Username:</strong> The unique identifier for each user
              </li>
              <li>
                <strong>Display name:</strong> The user's full or display name
              </li>
              <li>
                <strong>Email:</strong> Contact email address
              </li>
              <li>
                <strong>Phone contact:</strong> Phone number for the user
              </li>
              <li>
                <strong>Driver ID:</strong> Unique driver identification number
              </li>
              <li>
                <strong>Role:</strong> User's assigned role (Administrator, Users, etc.)
              </li>
              <li>
                <strong>Tags:</strong> Custom tags for organization and filtering
              </li>
              <li>
                <strong>Custom Fields:</strong> Additional custom data fields
              </li>
            </ul>

            <p>
              You can customize which columns are visible by right-clicking the table header to enable or disable specific
              columns based on your needs.
            </p>

            <h2>5. Export as CSV</h2>
            <p>
              Need to analyze or share user data? Use the <strong>Export as CSV</strong> button to download the user list.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> The export will only include the columns currently visible in the table. Be
                    sure to enable all the data you need before exporting.
                  </p>
                </div>
              </div>
            </div>

            <h2>User Management Features</h2>
            <p>The Manage Users panel provides several key features for efficient user administration:</p>
            <ul>
              <li>
                <strong>Quick Invitations:</strong> Send invites with predefined roles and permissions
              </li>
              <li>
                <strong>Custom User Creation:</strong> Manually create users with specific configurations
              </li>
              <li>
                <strong>Advanced Search:</strong> Filter users by multiple criteria simultaneously
              </li>
              <li>
                <strong>Flexible Display:</strong> Customize table columns to show relevant information
              </li>
              <li>
                <strong>Data Export:</strong> Export user data for external analysis or backup
              </li>
            </ul>
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
