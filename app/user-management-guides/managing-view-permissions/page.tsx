import { ArrowLeft, Shield } from "lucide-react";

export default function ManagingViewPermissions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/user-management-guides"
            className="flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to User Management Guides
          </a>
          <img
            src="/images/getty-logo.png"
            alt="Getty Tech Logo"
            className="h-8 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-10 prose prose-slate max-w-none space-y-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Managing View Permissions
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Learn how to create and customize application roles to control user access to views and system features.
            </p>
          </div>

          {/* Content */}
          <h2>Application Roles</h2>
          <ol>
            <li>Login with an Admin user in your application.</li>
            <li>
              Click on <strong>Main Menu → Admin → Roles</strong>.
            </li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-md shadow-sm">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> if you don't see this option, make sure you have <code>_EditApplicationPrivileges</code> permission enabled in your application. Read more about how to add privileges and features to an application.
            </p>
          </div>

          <p>By default, an application has four predefined roles:</p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zdkgpkCuMyp0dBCzngQDLRTwiDRw0p.png"
              alt="Roles interface showing the four default roles (_Administrator, _Driver, _Operator, _Unit) with their descriptions and Create copy buttons"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <table className="min-w-full border-collapse border border-gray-300 my-6 rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Role
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  _Administrator
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  All features and rights are enabled by default.
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  _Operator
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  No access to Administrator-type features like adding users, managing event rules, and creating views.
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  _Unit
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Can send information to the server, but lacks the right to log in to the Asset Tracker interface.
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  _Driver
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  To be used for drivers only. Read more about driver options here.
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Editing and Customising Roles</h2>
          <p>
            To create custom roles, we strongly recommend making copies of the standard roles before making any modifications.
          </p>

          <h3>Step 1: Create a Copy</h3>
          <ol>
            <li>Click on <strong>Create copy</strong></li>
          </ol>

          <h3>Step 2: Define Role Details</h3>
          <ol start={2}>
            <li>
              Define a name to this new role, then click <strong>Next</strong>.
            </li>
          </ol>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-noR4vPvWvgd5hnINyIU51Ka0B6OL2Q.png"
              alt="Role creation dialog showing Details section with Name field as 'Copy of _Operator' and Description as 'A custom operator role'"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MMunhNqukukScedqvlh9NApGygr4aY.png"
              alt="Privileges configuration screen showing Auto allow new items options and a tree view of various admin privileges with checkboxes"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <ul>
            <li>
              <strong>Auto-allow new items</strong> is useful when you install new plugins and add them later on in your application. When this option is activated, the users belonging to this role will have the selected features enabled without manual intervention.
            </li>
            <li>
              <strong>Applies to</strong> If 'Only items created by this role' is selected, it sets the privileges automatically if they were enabled by this role. Otherwise, all new items will be enabled by default for this role.
            </li>
          </ul>

          <h3>Step 4: Assign Users</h3>
          <ol start={4}>
            <li>Finally, select which user(s) will belong to this new role</li>
          </ol>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3xawpfcgdnn31Yd68QGIwHaXMnw1Xn.png"
              alt="Users assignment screen showing a table with Name, Username, and Email columns where users can be selected for the role"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <h3>Step 5: Save and Clean Up</h3>
          <ol start={5}>
            <li>Click on <strong>Save</strong>.</li>
            <li>Remove the selected user(s) from other roles to avoid overlapping.</li>
          </ol>

          <h2>View Permission Management</h2>
          <p>
            Managing view permissions is crucial for controlling what data users can access in your application. By creating custom roles with specific privileges, you can:
          </p>

          <ul>
            <li><strong>Control Data Access:</strong> Limit which views and data sets users can see</li>
            <li><strong>Manage Feature Access:</strong> Enable or disable specific application features per role</li>
            <li><strong>Ensure Security:</strong> Prevent unauthorized access to sensitive information</li>
            <li><strong>Streamline User Experience:</strong> Show only relevant features to each user type</li>
          </ul>

          <h2>Key Privileges for View Management</h2>
          <p>When configuring roles for view permissions, pay attention to these key privilege categories:</p>

          <h3>Administrative Privileges</h3>
          <ul>
            <li><strong>_CreateUser:</strong> Ability to create new users</li>
            <li><strong>_DeleteUser:</strong> Ability to remove users</li>
            <li><strong>_EditApplicationPrivileges:</strong> Modify application-level permissions</li>
            <li><strong>_EditUsers:</strong> Modify existing user accounts</li>
          </ul>

          <h3>Data Access Privileges</h3>
          <ul>
            <li><strong>_ReadData:</strong> Access to view fleet and vehicle data</li>
            <li><strong>_ReadMessageFields:</strong> Access to message and communication data</li>
            <li><strong>_ReadUserOverview:</strong> View user information and status</li>
          </ul>

          <h3>View and Interface Privileges</h3>
          <ul>
            <li><strong>Views permissions:</strong> Control which custom views users can access</li>
            <li><strong>Workspace permissions:</strong> Manage workspace and layout access</li>
            <li><strong>Plugin permissions:</strong> Enable or disable specific plugin features</li>
          </ul>

          <h2>Best Practices for Role Management</h2>

          <h3>Planning and Design</h3>
          <ul>
            <li>Start with Standard Roles: Always copy existing roles rather than creating from scratch</li>
            <li>Use Descriptive Names: Choose clear, meaningful names for custom roles</li>
            <li>Document Role Purpose: Include detailed descriptions of what each role is intended for</li>
            <li>Plan for Growth: Consider future needs when designing role structures</li>
          </ul>

          <h3>Security Considerations</h3>
          <ul>
            <li>Principle of Least Privilege: Grant only the minimum permissions necessary</li>
            <li>Avoid Role Overlap: Remove users from conflicting roles to prevent permission conflicts</li>
            <li>Regular Audits: Periodically review role assignments and permissions</li>
            <li>Test Thoroughly: Verify that roles work as expected before deploying to users</li>
          </ul>

          <h3>Maintenance and Updates</h3>
          <ul>
            <li>Monitor Plugin Updates: Use "Auto-allow new items" carefully for automatic updates</li>
            <li>Version Control: Keep track of role changes and modifications</li>
            <li>User Feedback: Gather input from users about access needs and limitations</li>
            <li>Regular Cleanup: Remove unused roles and consolidate similar ones</li>
          </ul>

          <h2>Common Role Scenarios</h2>

          <h3>Department-Based Roles</h3>
          <ul>
            <li>Sales Team Role: Access to customer-related views and sales reports</li>
            <li>Maintenance Team Role: Vehicle maintenance data and scheduling features</li>
            <li>Dispatch Role: Real-time tracking and route management capabilities</li>
          </ul>

          <h3>Hierarchical Roles</h3>
          <ul>
            <li>Manager Role: Broader access with reporting and oversight capabilities</li>
            <li>Supervisor Role: Team-specific access with limited administrative features</li>
            <li>Operator Role: Day-to-day operational access without administrative rights</li>
          </ul>

          <h3>Client-Facing Roles</h3>
          <ul>
            <li>Client Portal Role: Limited access to client-specific data only</li>
            <li>External Partner Role: Restricted access for third-party collaborators</li>
            <li>Read-Only Role: View-only access for stakeholders and auditors</li>
          </ul>

          <h2>Troubleshooting Role Issues</h2>

          <h3>Users Can't Access Expected Features</h3>
          <ul>
            <li>Verify the user is assigned to the correct role</li>
            <li>Check that the role has the necessary privileges enabled</li>
            <li>Ensure there are no conflicting role assignments</li>
            <li>Confirm the application has the required privileges activated</li>
          </ul>

          <h3>Permission Conflicts</h3>
          <ul>
            <li>Remove users from overlapping roles</li>
            <li>Review privilege inheritance settings</li>
            <li>Check "Auto-allow new items" configurations</li>
            <li>Verify role hierarchy and dependencies</li>
          </ul>

          <h3>Performance Issues</h3>
          <ul>
            <li>Limit the number of roles per user</li>
            <li>Optimize privilege selections to avoid unnecessary permissions</li>
            <li>Regular cleanup of unused roles and permissions</li>
            <li>Monitor system performance with complex role structures</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm mb-2">© 2024 Getty Tech. All rights reserved.</p>
          <p className="text-sm mb-1">Comprehensive GPS tracking solutions for new business needs</p>
          <p className="text-sm mb-2">Address: Italian Village 1 House No 283</p>
          <a href="https://gettysecure.com" className="text-sm text-blue-400 hover:text-blue-300">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  );
}
