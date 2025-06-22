import { ArrowLeft, UserCheck } from "lucide-react"

export default function AssigningRolesUsers() {
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
              <UserCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Assigning Roles to Users</h1>
            <p className="text-lg text-slate-600">
              Learn how to use roles with privileges and features to control user access and permissions in your
              application.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Using Roles with Privileges and Features</h2>
            <p>
              Roles are used to give user rights. A user with a Role has access to a set of features and privileges in an
              application.
            </p>

            <h2>Application Roles</h2>
            <ol>
              <li>Login with an Admin user in your application.</li>
              <li>
                Click on <strong>Main Menu → Admin → Roles</strong>.
              </li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> If you don't see this option, make sure you have _EditApplicationPrivileges
                    permission enabled in your application. Read more about how to add privileges and features to an
                    application.
                  </p>
                </div>
              </div>
            </div>

            <p>By default, an application has four predefined roles:</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ytu4z1RPB7sc9nNZEmt8R7KCXC7W5S.png"
                alt="Roles interface showing default roles: _Administrator, _Driver, _Operator, and _Unit with their descriptions and Create copy buttons"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>_Administrator</strong>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">All features and rights are enabled by default.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>_Operator</strong>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    No access to Administrator-type features like adding users, managing event rules, and creating views.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>_Unit</strong>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Can send information to the server, but lacks the right to log in to the Asset Tracker interface.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>_Driver</strong>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    To be used for drivers only. Read more about driver options here.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Editing and Customising Roles</h2>
            <p>
              To create custom roles, we strongly recommend making copies of the standard roles before making any
              modifications.
            </p>

            <h3>Step 1: Create a Copy</h3>
            <ol>
              <li>
                Click on <strong>Create copy</strong>
              </li>
            </ol>

            <h3>Step 2: Define Role Details</h3>
            <ol start={2}>
              <li>
                Define a name to this new role, then click <strong>Next</strong>.
              </li>
            </ol>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mf0zwFG8MaQqNw406XpEdDvmI89Qg8.png"
                alt="Role creation dialog showing Details section with Name field filled as 'Copy of _Operator' and Description as 'A custom operator role'"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h3>Step 3: Configure Privileges</h3>
            <ol start={3}>
              <li>
                Select the options presented according to your needs and the privileges you want to enable for this role.
              </li>
            </ol>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pgh96Y3R6qTdM0DrMmjuqC4YtmTLCB.png"
                alt="Privileges configuration screen showing Auto allow new items options and a tree view of various admin privileges with checkboxes"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <ul>
              <li>
                <strong>Auto-allow new items</strong> is useful when you install new plugins and add them later on in your
                application. When this option is activated, the users belonging to this role will have the selected
                features enabled without manual intervention.
              </li>
              <li>
                <strong>Applies to</strong> If 'Only items created by this role' is selected, it sets the privileges
                automatically if they were enabled by this role. Otherwise, all new items will be enabled by default for
                this role.
              </li>
            </ul>

            <h3>Step 4: Assign Users</h3>
            <ol start={4}>
              <li>Finally, select which user(s) will belong to this new role</li>
            </ol>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-64Fbub2p0C5T8uCdsjjytTkbFPelzi.png"
                alt="Users assignment screen showing a table with Name, Username, and Email columns where users can be selected for the role"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h3>Step 5: Save and Clean Up</h3>
            <ol start={5}>
              <li>
                Click on <strong>Save</strong>.
              </li>
              <li>Remove the selected user(s) from other roles to avoid overlapping.</li>
            </ol>

            <h2>Best Practices</h2>
            <ul>
              <li>
                <strong>Copy Before Modifying:</strong> Always create copies of standard roles rather than modifying them
                directly
              </li>
              <li>
                <strong>Avoid Role Overlap:</strong> Remove users from other roles when assigning them to new custom roles
              </li>
              <li>
                <strong>Use Descriptive Names:</strong> Give your custom roles clear, descriptive names that indicate
                their purpose
              </li>
              <li>
                <strong>Regular Review:</strong> Periodically review role assignments to ensure they still match user
                responsibilities
              </li>
              <li>
                <strong>Principle of Least Privilege:</strong> Grant only the minimum permissions necessary for users to
                perform their tasks
              </li>
            </ul>

            <h2>Common Use Cases</h2>
            <ul>
              <li>
                <strong>Department-Specific Roles:</strong> Create roles for different departments (Sales, Operations,
                Maintenance)
              </li>
              <li>
                <strong>Client Access Roles:</strong> Limited roles for external clients to view only their vehicles
              </li>
              <li>
                <strong>Temporary Access:</strong> Roles for contractors or temporary staff with limited permissions
              </li>
              <li>
                <strong>Regional Managers:</strong> Roles that provide access to specific geographic regions or vehicle
                groups
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
