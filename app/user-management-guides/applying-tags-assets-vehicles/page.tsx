import { ArrowLeft, Tags } from "lucide-react"

export default function ApplyingTagsAssetsVehicles() {
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
              <Tags className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Applying Tags to Assets and Vehicles</h1>
            <p className="text-lg text-slate-600">
              Learn how to set up an application with separate views of assets for different user roles using tags, views,
              and custom roles.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Assigning Asset Views to Different Users in an Application</h2>
            <p>This guide shows how to set up an application with separate views of assets for different user roles.</p>

            <h2>Scenario</h2>
            <p>For this example, we have a company called ABC fleet that has two regions: Region A and Region B.</p>
            <ul>
              <li>
                <strong>Region A</strong> has a user called <strong>Operator A</strong> who is in charge of controlling
                motorcycles inside the organization.
              </li>
              <li>
                <strong>Region B</strong> has a user called <strong>Operator B</strong> who is in charge of controlling
                the truck fleet.
              </li>
              <li>
                The <strong>admin user</strong> will have visibility over the whole fleet (motorcycles and trucks).
              </li>
            </ul>

            <h2>Working with Tags, Views, and Roles</h2>
            <p>To make this scenario possible, we need to do the following:</p>
            <ol>
              <li>Create tags for the groups of assets.</li>
              <li>Create views for specific tags.</li>
              <li>Create custom roles for each user.</li>
            </ol>

            <h2>1. Create tags for the groups of assets</h2>
            <p>
              It is very important to keep your fleet organized in tags.{" "}
              <a href="/user-management-guides/creating-managing-tags" className="text-blue-600 hover:text-blue-700">
                Read more about tags here
              </a>
              .
            </p>

            <p>
              To create new tags, go to <strong>Main Menu → Admin → Tags</strong>
            </p>

            <p>Include all the assets in the same category in your new tag.</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TXwKnzqmizoxEkhYXnNYWB1ng8Ia7D.png"
                alt="Tag creation dialog showing Details section with Name field as 'Motorbikes' and Description field explaining the tag purpose"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4dkFCKZPtmbxNYQirhmMsPAYnaozlL.png"
                alt="Users selection screen showing three motorbikes (Motorbike 1, 2, 3) that can be selected for the Motorbikes tag"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h2>2. Create views for specific tags</h2>
            <p>
              Once you have your new tag created (Motorbikes), now it's time to create a view that will only have
              visibility of the assets included in the Motorbikes tag.
            </p>

            <p>
              To create a new view, go to <strong>Admin → Views</strong>.
            </p>

            <p>
              <a href="/user-management-guides/setting-up-custom-views" className="text-blue-600 hover:text-blue-700">
                Read more about views here
              </a>
              .
            </p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fSZ6tVCPCqh4iMqNjlH7D7OB7VLcvU.png"
                alt="View creation dialog showing Details section with Name as 'Motorbike View' and all status options selected"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ivE8LhETfy7AGSUZtydxciaL5A0JC2.png"
                alt="Tags selection screen for view creation showing 'Motorbikes' tag selected with Match any option"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h2>3. Create roles for specific users</h2>
            <p>Once your tags and views are ready to be used, it's time to assign each view to a specific user.</p>

            <p>
              To do that we will use roles.{" "}
              <a href="/user-management-guides/assigning-roles-users" className="text-blue-600 hover:text-blue-700">
                Read more about roles here
              </a>
              .
            </p>

            <p>
              By assigning views to specific roles of users, you allow each operator (Operator A / Operator B) to have
              visibility over a specific view (remember that Operator A will look after motorcycles and Operator B over
              trucks).
            </p>

            <p>
              To have specific roles for each user, we need to create custom roles. Go to <strong>Admin → Roles</strong>.
            </p>

            <p>
              Duplicate the default role <strong>_Operator</strong> (modifying a default role is not recommended) in order
              to create one for the motorcycles and another for the trucks.
            </p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LZL0aJTUw9gwuFuClbMBcHuNckU2WJ.png"
                alt="Roles management interface showing default roles with Create copy buttons and role creation dialog for 'Role A_Operator'"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <p>Select the view you want the user to have access to:</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Leg8nyYVkve4x9o8YeHrnttVSJPDnP.png"
                alt="Privileges section of role creation showing tree structure with 'Motorbikes' checked under ReadData permissions"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <p>Finally, select the user, and save the new role.</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AkA8KDJWeR3SO05UZvjkyLww3aXqsX.png"
                alt="Users section of role creation showing Operator1 selected (highlighted in green) for the role assignment"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> remove Operator A from the default _Operator role to avoid conflict with
                    multiple roles.
                  </p>
                </div>
              </div>
            </div>

            <p>Repeat the same steps for the trucks and Operator B.</p>

            <h2>Result</h2>

            <h3>Admin view</h3>
            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S9PCvVyfFOQlsRWaBFrYHgBi62QKFl.png"
                alt="Admin view showing complete fleet visibility with both motorbikes and trucks displayed on the map across Spain and France"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h3>Operator A view (Motorbikes)</h3>
            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X9COUiLFxEJGYuKc4lQoV4xQMhzA3N.png"
                alt="Operator A view showing only motorbikes (Motorbike 1, 2, 3) on the map with no trucks visible"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h3>Operator B view (Trucks)</h3>
            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LIcyR8MFqInjNgAllSIuvcbjxMjIQ8.png"
                alt="Operator B view showing only trucks (Truck 3) on the map with no motorbikes visible"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <h2>Key Benefits</h2>
            <ul>
              <li>
                <strong>Role-Based Access:</strong> Each operator sees only the assets they're responsible for
              </li>
              <li>
                <strong>Improved Focus:</strong> Reduces clutter and allows operators to focus on their specific fleet
              </li>
              <li>
                <strong>Enhanced Security:</strong> Prevents unauthorized access to assets outside user's scope
              </li>
              <li>
                <strong>Scalable Organization:</strong> Easy to add new regions, vehicle types, or operators
              </li>
              <li>
                <strong>Administrative Oversight:</strong> Admin maintains full visibility while delegating specific
                responsibilities
              </li>
            </ul>

            <h2>Best Practices</h2>
            <ul>
              <li>Always create copies of default roles rather than modifying them directly</li>
              <li>Use descriptive names for tags, views, and roles to maintain clarity</li>
              <li>Remove users from conflicting roles to avoid permission overlaps</li>
              <li>Test each user's view to ensure they see only the intended assets</li>
              <li>Document the organizational structure for future reference</li>
              <li>Regularly review and update role assignments as the organization changes</li>
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
