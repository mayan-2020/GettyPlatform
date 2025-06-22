import { ArrowLeft, Tag } from "lucide-react"

export default function CreatingManagingTags() {
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
              <Tag className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Creating and Managing Tags</h1>
            <p className="text-lg text-slate-600">
              Learn how to use tags to organize your fleet in a convenient way and create efficient groupings for users
              and assets.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-6">
            <h2>Tags</h2>
            <p>Tags are a basic component of GpsGate. With tags, you can organize your fleet in a very convenient way.</p>

            <p>
              You can use as many tags as you consider necessary. For example, you can create a tag called Trucks where
              you can add all assets that belong in this category. Or you can create a tag called Operators where you will
              add all users who belong to the same group.
            </p>

            <p>It is also possible (and recommended) to create a tag just for one individual user/asset.</p>

            <h2>Examples of why you need to use tags</h2>
            <ul>
              <li>When creating a specific view see only specific assets on screen.</li>
              <li>When creating an event rule that will generate alerts only for a specific group of assets.</li>
              <li>When executing a report only for a tag of assets.</li>
              <li>When sending a report via email only to a tag of users (operators).</li>
              <li>To customize a workspace and assign that customization only to a specific role of users.</li>
            </ul>

            <h2>How to create new tags</h2>

            <h3>A. From Main Menu</h3>
            <ol>
              <li>
                Go to <strong>Main Menu → Admin → Tags</strong>
              </li>
              <li>
                Press on the button <strong>+ Tag</strong>
              </li>
            </ol>

            <p>and introduce a name and an optional description</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wKgGicG6lXHwMtGIDG6cJW2HU72ypV.png"
                alt="Tag creation dialog showing Details section with Name field filled as 'Trucks' and Description field with explanatory text"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <ol start={3}>
              <li>Finally, select the users to include in this category.</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> even assets are considered users in the system.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pfKMccHHP9G70Ds6N4eEF3TzKTpCfY.png"
                alt="Users selection screen showing a table with vehicles and users that can be selected for the tag, with checkboxes for each entry"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>

            <ol start={4}>
              <li>
                Click on <strong>Save</strong>.
              </li>
            </ol>

            <h3>B. When creating new users</h3>
            <p>When you create new users, the Tags option also allows you to quickly create a tag if necessary.</p>

            <p>The creation procedure is the same as explained before.</p>

            <div className="my-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RGWCXgW39lRbpwUYquAHKEWXN3uU48.png"
                alt="Tags section in user creation interface showing existing tags like 'Show on map', 'Trucks', and 'Users' with a + Tag button to create new ones"
                className="border border-gray-200 rounded-lg shadow-sm w-full"
              />
            </div>
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
