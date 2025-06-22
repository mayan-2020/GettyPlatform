import { ArrowLeft, Users2 } from "lucide-react"

export default function ManagingUserGroupsTeams() {
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
              <Users2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Managing User Groups and Teams</h1>
            <p className="text-lg text-slate-600">
              Learn how to organize users into groups and teams by assigning specific views to different roles, enabling
              efficient access control and data organization.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Overview</h2>
            <p>
              This guide shows how to assign specific views to users using roles, effectively creating user groups and
              teams with controlled access to different parts of your fleet data. By organizing users this way, you can
              ensure that each team only sees the vehicles and information relevant to their responsibilities.
            </p>

            <h2>Prerequisites: Creating Tags and Views</h2>
            <p>
              The very first step is to have tags and views created in your system for later assignment to your different
              roles. Tags help organize your vehicles into logical groups, while views define what data users can see.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Important:</strong> Read the guide on how to create tags and views before proceeding with role
                    assignments.
                  </p>
                </div>
              </div>
            </div>

            <h3>What are Tags and Views?</h3>
            <ul>
              <li>
                <strong>Tags:</strong> Labels that help categorize vehicles, drivers, or other assets (e.g., "Sales Team",
                "Delivery Trucks", "North Region")
              </li>
              <li>
                <strong>Views:</strong> Filtered displays that show only specific tagged items to users (e.g., "Sales Team
                View" shows only vehicles tagged with "Sales Team")
              </li>
            </ul>

            <h2>Assigning Views to Different User Groups</h2>
            <p>
              Now that your tags and views are created, you need to assign them to your user's roles to create effective
              user groups and teams.
            </p>

            <p>You have two options:</p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-4">Choose Your Approach:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-green-800">Option A: Modify Existing Roles</h4>
                  <p className="text-sm text-green-700">
                    Assign views to existing roles. The modification will apply to all users under the same role.
                  </p>
                  <p className="text-sm text-green-600 italic">
                    Best for: Simple team structures where all users in a role need the same access.
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-800">Option B: Create Role Copies</h4>
                  <p className="text-sm text-blue-700">
                    Assign views to copies of existing roles. This case is useful if you want to have, for example, two
                    operator users with similar privileges, but using different views.
                  </p>
                  <p className="text-sm text-blue-600 italic">
                    Best for: Complex team structures where users need similar permissions but different data access.
                  </p>
                </div>
              </div>
            </div>

            <h2>Option A: Modifying Existing Roles</h2>
            <p>Use this approach when you want all users in a role to have access to the same views.</p>

            <h3>Step-by-Step Process:</h3>
            <ol>
              <li>
                Select <strong>Main Menu → Admin → Roles</strong> from the menu.
              </li>
              <li>
                Select a role, e.g. <strong>_Operators</strong>.
              </li>
              <li>Check all users you want to be included in this role.</li>
              <li>
                Under <strong>Views → _ReadViews</strong> select the views you want this role to have access to.
              </li>
              <li>
                Click <strong>Save</strong>.
              </li>
            </ol>

            <h3>Example Use Cases for Option A:</h3>
            <ul>
              <li>
                <strong>Regional Teams:</strong> All "North Region Operators" see only vehicles in the northern territory
              </li>
              <li>
                <strong>Department Access:</strong> All "Maintenance Staff" see only maintenance-related vehicles and data
              </li>
              <li>
                <strong>Client Groups:</strong> All "Client ABC Users" see only vehicles belonging to that specific client
              </li>
            </ul>

            <h2>Option B: Creating Role Copies</h2>
            <p>
              Use this approach when you need users with similar permissions but different data access within the same
              general role type.
            </p>

            <h3>Step-by-Step Process:</h3>
            <ol>
              <li>Make a copy of your user role (refer to the "Assigning Roles to Users" guide for detailed steps).</li>
              <li>Give the copied role a descriptive name (e.g., "Operator_SalesTeam" or "Operator_DeliveryTeam").</li>
              <li>Repeat the steps from Option A for the new role copy.</li>
            </ol>

            <h3>Example Use Cases for Option B:</h3>
            <ul>
              <li>
                <strong>Multiple Sales Teams:</strong> "Sales Team A Operators" and "Sales Team B Operators" with same
                permissions but different vehicle access
              </li>
              <li>
                <strong>Shift-Based Access:</strong> "Day Shift Operators" and "Night Shift Operators" seeing different
                vehicle sets
              </li>
              <li>
                <strong>Project Teams:</strong> "Project Alpha Operators" and "Project Beta Operators" with access to
                project-specific vehicles
              </li>
            </ul>

            <h2>Best Practices for User Group Management</h2>

            <h3>Naming Conventions</h3>
            <ul>
              <li>
                <strong>Use Descriptive Names:</strong> "Sales_North_Operators" instead of "Role_Copy_1"
              </li>
              <li>
                <strong>Include Purpose:</strong> Indicate what the group does or what they access
              </li>
              <li>
                <strong>Be Consistent:</strong> Use the same naming pattern across all groups
              </li>
            </ul>

            <h3>Organization Tips</h3>
            <ul>
              <li>
                <strong>Start Simple:</strong> Begin with basic groups and add complexity as needed
              </li>
              <li>
                <strong>Regular Reviews:</strong> Periodically review group assignments to ensure they still make sense
              </li>
              <li>
                <strong>Document Structure:</strong> Keep records of which groups have access to what data
              </li>
              <li>
                <strong>Test Access:</strong> Verify that users can see the correct data after group assignments
              </li>
            </ul>

            <h3>Security Considerations</h3>
            <ul>
              <li>
                <strong>Principle of Least Privilege:</strong> Give groups only the minimum access needed
              </li>
              <li>
                <strong>Avoid Overlaps:</strong> Ensure users aren't in multiple conflicting groups
              </li>
              <li>
                <strong>Regular Audits:</strong> Review group memberships and access rights regularly
              </li>
              <li>
                <strong>Clear Boundaries:</strong> Make sure group responsibilities don't overlap unnecessarily
              </li>
            </ul>

            <h2>Common Team Structures</h2>

            <h3>Geographic Teams</h3>
            <ul>
              <li>North Region Team</li>
              <li>South Region Team</li>
              <li>East/West Regional Teams</li>
              <li>City-specific teams</li>
            </ul>

            <h3>Functional Teams</h3>
            <ul>
              <li>Sales Team</li>
              <li>Delivery Team</li>
              <li>Maintenance Team</li>
              <li>Emergency Services Team</li>
            </ul>

            <h3>Client-Based Teams</h3>
            <ul>
              <li>Client A Management Team</li>
              <li>Client B Operations Team</li>
              <li>Multi-client Support Team</li>
            </ul>

            <h3>Hierarchical Teams</h3>
            <ul>
              <li>Management Level (full access)</li>
              <li>Supervisor Level (department access)</li>
              <li>Operator Level (limited access)</li>
              <li>Read-only Level (view only)</li>
            </ul>

            <h2>Troubleshooting Common Issues</h2>

            <h3>Users Can't See Expected Data</h3>
            <ul>
              <li>Verify the user is assigned to the correct role</li>
              <li>Check that the role has the appropriate views assigned</li>
              <li>Ensure the views include the correct tags</li>
              <li>Confirm vehicles are properly tagged</li>
            </ul>

            <h3>Users See Too Much Data</h3>
            <ul>
              <li>Review role assignments for overlapping access</li>
              <li>Check if user is assigned to multiple roles</li>
              <li>Verify view filters are correctly configured</li>
              <li>Consider creating more restrictive role copies</li>
            </ul>

            <h3>Group Management Becomes Complex</h3>
            <ul>
              <li>Simplify role structure by consolidating similar groups</li>
              <li>Use more specific tags to better organize data</li>
              <li>Document group purposes and access levels</li>
              <li>Regular cleanup of unused roles and views</li>
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
