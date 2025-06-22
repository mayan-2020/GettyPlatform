import { ArrowLeft, Navigation } from "lucide-react";

export default function TrackingToolGuides() {
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
            <Navigation className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Tracking Tool</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Create temporary tracking links to share specific vehicle locations with external users for a limited time period.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 prose prose-slate max-w-4xl mx-auto space-y-8">
          <h2>Overview</h2>
          <p>
            The Tracking Tool is used to provide a temporary link to someone to view a specific vehicle for a specific
            time period. This feature allows you to share vehicle tracking information with clients, partners, or other
            stakeholders without giving them full access to your fleet management system.
          </p>

          <div className="my-8">
            <img
              src="/images/tracking-tool-interface.png"
              alt="Tracking Tool interface showing vehicle selection, date range settings, and QR code generation"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
            />
          </div>

          <h2>How to Create a Tracking Link</h2>
          <h3>Step 1: Configure Tracking Parameters</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Select Mode:</strong> Choose "Asset" to track a specific vehicle
            </li>
            <li>
              <strong>Choose Vehicle:</strong> Select the specific vehicle from the dropdown menu (e.g., "21E 20837 Land Cruiser")
            </li>
            <li>
              <strong>Set Valid From Date:</strong> Choose the start date and time when the link becomes active
            </li>
            <li>
              <strong>Set Valid To Date:</strong> Set the desired expire date and time when the link will no longer be accessible
            </li>
          </ol>

          <h3>Step 2: Generate the Tracking Code</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Review all the parameters you've set</li>
            <li>Click on "Create tracking code" button</li>
            <li>A link will be created and can be shared with the intended recipient</li>
            <li>A QR code is also generated for easy mobile access</li>
          </ol>

          <h2>Key Features</h2>

          <h3>Automatic Expiration</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Time-Limited Access:</strong> When the expiration date matches, the link will no longer be accessible
            </li>
            <li>
              <strong>Secure Sharing:</strong> Ensures temporary access without permanent system access
            </li>
            <li>
              <strong>Flexible Duration:</strong> Set any time period from hours to days or weeks
            </li>
          </ul>

          <h3>Manual Link Management</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Early Deletion:</strong> In case you need to delete the link before the expire date, it can be easily deleted
            </li>
            <li>
              <strong>View Stored Codes:</strong> Access and manage all previously created tracking codes
            </li>
            <li>
              <strong>Link Control:</strong> Full control over who has access and for how long
            </li>
          </ul>

          <h2>Sharing Options</h2>
          <p>Once the tracking code is created, you have multiple ways to share it:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Direct Link:</strong> Copy and share the generated URL via email, messaging, or other communication methods
            </li>
            <li>
              <strong>QR Code:</strong> Share the QR code for easy mobile scanning and access
            </li>
          </ul>

          <h2>Use Cases</h2>

          <h3>Customer Service</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Share delivery vehicle location with customers</li>
            <li>Provide real-time updates on service technician arrival</li>
            <li>Allow clients to track their dedicated vehicles</li>
          </ul>

          <h3>Business Partners</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Share vehicle locations with logistics partners</li>
            <li>Provide temporary access to contractors</li>
            <li>Coordinate with external service providers</li>
          </ul>

          <h3>Emergency Situations</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Share vehicle location with emergency services</li>
            <li>Provide access to insurance companies for claims</li>
            <li>Coordinate with roadside assistance</li>
          </ul>

          <h2>Security and Privacy</h2>

          <h3>Access Control</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Limited Scope:</strong> Recipients can only view the specific vehicle you've selected
            </li>
            <li>
              <strong>Time Restrictions:</strong> Access is automatically revoked after the expiration date
            </li>
            <li>
              <strong>No System Access:</strong> Recipients cannot access other parts of your fleet management system
            </li>
          </ul>

          <h3>Data Protection</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Temporary Links:</strong> Links expire automatically to prevent unauthorized long-term access
            </li>
            <li>
              <strong>Controlled Information:</strong> Only location data for the specified vehicle is shared
            </li>
            <li>
              <strong>Audit Trail:</strong> Track who has been given access and when
            </li>
          </ul>

          <h2>Managing Tracking Codes</h2>

          <h3>View Stored Codes</h3>
          <p>Use the "View stored codes" button to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>See all previously created tracking links</li>
            <li>Check expiration dates and status</li>
            <li>Delete links before their expiration date if needed</li>
            <li>Monitor usage and access patterns</li>
          </ul>

          <h3>Best Practices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Set appropriate expiration dates based on the specific use case</li>
            <li>Regularly review and clean up expired or unused tracking codes</li>
            <li>Use descriptive names or notes to identify the purpose of each link</li>
            <li>Inform recipients about the temporary nature of the access</li>
            <li>Monitor shared links to ensure they're being used appropriately</li>
          </ul>

          <h2>Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Enhanced Customer Service:</strong> Provide transparency without compromising security
            </li>
            <li>
              <strong>Improved Communication:</strong> Share real-time information with stakeholders
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Reduce customer inquiries about vehicle locations
            </li>
            <li>
              <strong>Flexible Access:</strong> Grant temporary access without permanent system permissions
            </li>
            <li>
              <strong>Professional Image:</strong> Demonstrate transparency and modern technology capabilities
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for new business needs</p>
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
