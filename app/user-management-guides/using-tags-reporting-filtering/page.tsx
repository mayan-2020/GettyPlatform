import { ArrowLeft, FileText } from "lucide-react";

export default function UsingTagsReportingFiltering() {
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
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mx-auto mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Using Tags for Reporting and Filtering
          </h1>
          <p className="text-lg text-slate-600">
            Learn how to give different roles of users access to different reports using tags and role-based
            permissions.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6">
          <h2>Give Users Rights to See Specific Reports</h2>
          <p>This guide shows how to give different roles of users access to different reports.</p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GVHAWQkJeGtNcpP05uKVKRaLSQFWss.png"
              alt="Three user interfaces showing different report access levels - Administrator with full access, Operator 1 with Event Rule reports, and Operator 2 with Trip & Idle reports"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <h2>Step 1: Create tags</h2>
          <p>First, you create tags for the groups of assets you want to display.</p>
          <p>
            <a href="/user-management-guides/creating-managing-tags" className="text-blue-600 hover:text-blue-700">
              Read how to create tags for your users here
            </a>
            .
          </p>

          <h2>Step 2: Select your reports</h2>
          <p>When assigning reports to your users, you need to verify which reports you want them to see.</p>
          <p>You could either assign them to default reports or create instances of those default reports.</p>
          <p>
            <a href="/reports-guides/activate-reports" className="text-blue-600 hover:text-blue-700">
              Read how to create report instances here (manage reports section)
            </a>
          </p>

          <h2>Step 3: Verify your user roles</h2>
          <p>Users can belong to common or different roles. You can check this by using the overview feature.</p>
          <p>
            If you want different user roles to see different reports, you'll have to make copies of the roles and
            assign each user to the corresponding role.
          </p>
          <p>
            <a href="/user-management-guides/assigning-roles-users" className="text-blue-600 hover:text-blue-700">
              Read how to create custom roles for your users (editing/customizing roles section)
            </a>
            .
          </p>

          <h2>Step 4: Assign the reports to each role</h2>
          <p>
            You can select which reports each role will be able to see, by using the privileges under{" "}
            <strong>Plugins → Reporting → _ViewReport</strong>
          </p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uN7V9yrnleitGAmZEO070sdg6dygcL.png"
              alt="Role privileges configuration interface showing the tree structure under Plugins > Reporting > _ViewReport with various report types that can be assigned to roles"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <h2>Report Access Levels</h2>
          <p>Based on the role configuration, users will have different levels of report access:</p>

          <h3>Administrator Access</h3>
          <ul>
            <li>
              <strong>Full Report Management:</strong> Access to "Manage Reports" functionality
            </li>
            <li>
              <strong>All Report Types:</strong> Can view all Event Rule and Trip & Idle reports
            </li>
            <li>
              <strong>Both Tag and User Reports:</strong> Access to reports filtered by tags and users
            </li>
            <li>
              <strong>Report Creation:</strong> Can create new report instances and modify existing ones
            </li>
          </ul>

          <h3>Operator 1 Access (Event Rule Focus)</h3>
          <ul>
            <li>
              <strong>Event Rule detailed (Tag):</strong> Detailed event reports filtered by tags
            </li>
            <li>
              <strong>Event Rule detailed (User):</strong> Detailed event reports filtered by users
            </li>
            <li>
              <strong>Event Rule summary (Tag):</strong> Summary event reports filtered by tags
            </li>
            <li>
              <strong>Event Rule summary (User):</strong> Summary event reports filtered by users
            </li>
          </ul>

          <h3>Operator 2 Access (Trip & Idle Focus)</h3>
          <ul>
            <li>
              <strong>Trip & Idle daily (Tag):</strong> Daily trip and idle time reports filtered by tags
            </li>
            <li>
              <strong>Trip & Idle detailed (Tag):</strong> Detailed trip and idle time reports filtered by tags
            </li>
          </ul>

          <h2>Benefits of Role-Based Report Access</h2>
          <ul>
            <li>
              <strong>Focused Information:</strong> Users see only reports relevant to their responsibilities
            </li>
            <li>
              <strong>Improved Security:</strong> Sensitive data is only accessible to authorized personnel
            </li>
            <li>
              <strong>Reduced Complexity:</strong> Simplified interface with fewer irrelevant options
            </li>
            <li>
              <strong>Better Performance:</strong> Faster navigation with fewer report options to load
            </li>
            <li>
              <strong>Compliance:</strong> Easier to maintain data access compliance and audit trails
            </li>
          </ul>

          <h2>Tag-Based Filtering in Reports</h2>
          <p>Tags provide powerful filtering capabilities for reports:</p>

          <h3>Asset Grouping</h3>
          <ul>
            <li>
              <strong>Vehicle Type Tags:</strong> Filter reports by trucks, vans, motorcycles, etc.
            </li>
            <li>
              <strong>Department Tags:</strong> Show reports for specific departments or teams
            </li>
            <li>
              <strong>Regional Tags:</strong> Generate reports for specific geographic regions
            </li>
            <li>
              <strong>Client Tags:</strong> Create client-specific reports for external sharing
            </li>
          </ul>

          <h3>User-Based Filtering</h3>
          <ul>
            <li>
              <strong>Driver Groups:</strong> Reports filtered by specific driver categories
            </li>
            <li>
              <strong>Shift Teams:</strong> Reports for day shift, night shift, or weekend teams
            </li>
            <li>
              <strong>Experience Levels:</strong> Separate reports for new drivers vs. experienced drivers
            </li>
            <li>
              <strong>Role-Based Users:</strong> Reports filtered by user roles and responsibilities
            </li>
          </ul>

          <h2>Best Practices</h2>

          <h3>Planning Report Access</h3>
          <ul>
            <li>
              <strong>Analyze User Needs:</strong> Understand what information each role requires
            </li>
            <li>
              <strong>Start with Minimal Access:</strong> Begin with basic permissions and expand as needed
            </li>
            <li>
              <strong>Group Similar Roles:</strong> Create role categories for users with similar report needs
            </li>
            <li>
              <strong>Document Access Levels:</strong> Maintain clear documentation of who can access what
            </li>
          </ul>

          <h3>Tag Strategy for Reports</h3>
          <ul>
            <li>
              <strong>Consistent Naming:</strong> Use clear, consistent tag names across the organization
            </li>
            <li>
              <strong>Hierarchical Structure:</strong> Create tag hierarchies that match your organizational structure
            </li>
            <li>
              <strong>Regular Review:</strong> Periodically review and update tag assignments
            </li>
            <li>
              <strong>Avoid Over-Tagging:</strong> Don't create too many tags that complicate filtering
            </li>
          </ul>

          <h3>Security Considerations</h3>
          <ul>
            <li>
              <strong>Principle of Least Privilege:</strong> Give users only the report access they need
            </li>
            <li>
              <strong>Regular Audits:</strong> Review report access permissions regularly
            </li>
            <li>
              <strong>Role Separation:</strong> Ensure clear separation between different user roles
            </li>
            <li>
              <strong>Access Logging:</strong> Monitor who accesses which reports and when
            </li>
          </ul>

          <h2>Common Use Cases</h2>

          <h3>Fleet Operations</h3>
          <ul>
            <li>
              <strong>Dispatch Teams:</strong> Access to real-time location and trip reports
            </li>
            <li>
              <strong>Maintenance Staff:</strong> Vehicle health and maintenance reports
            </li>
            <li>
              <strong>Safety Managers:</strong> Event rule and violation reports
            </li>
            <li>
              <strong>Fuel Managers:</strong> Fuel consumption and efficiency reports
            </li>
          </ul>

          <h3>Client Services</h3>
          <ul>
            <li>
              <strong>Client Portals:</strong> Limited reports showing only client-specific vehicles
            </li>
            <li>
              <strong>Service Reports:</strong> Delivery confirmations and service completion reports
            </li>
            <li>
              <strong>Performance Metrics:</strong> KPI reports for client review meetings
            </li>
          </ul>

          <h3>Management Reporting</h3>
          <ul>
            <li>
              <strong>Executive Dashboards:</strong> High-level summary reports for management
            </li>
            <li>
              <strong>Department Reports:</strong> Department-specific performance and utilization reports
            </li>
            <li>
              <strong>Compliance Reports:</strong> Regulatory compliance and audit reports
            </li>
          </ul>

          <h2>Troubleshooting Common Issues</h2>

          <h3>Users Can't See Expected Reports</h3>
          <ul>
            <li>Verify the user is assigned to the correct role</li>
            <li>Check that the role has the appropriate _ViewReport privileges</li>
            <li>Ensure the reports are properly tagged and accessible</li>
            <li>Confirm the user has the necessary data access permissions</li>
          </ul>

          <h3>Reports Show No Data</h3>
          <ul>
            <li>Check if the user's role has access to the required data tags</li>
            <li>Verify that vehicles/assets are properly tagged</li>
            <li>Ensure the report date range includes relevant data</li>
            <li>Confirm the user's view permissions include the necessary assets</li>
          </ul>

          <h3>Too Many or Too Few Reports Visible</h3>
          <ul>
            <li>Review role assignments for overlapping permissions</li>
            <li>Check if user is assigned to multiple conflicting roles</li>
            <li>Verify _ViewReport privileges are correctly configured</li>
            <li>Consider creating more specific role copies for different access levels</li>
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
