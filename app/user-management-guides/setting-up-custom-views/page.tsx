import { ArrowLeft, Eye } from "lucide-react";

export default function SettingUpCustomViews() {
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
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mx-auto mb-6">
            <Eye className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Setting up Custom Views
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Learn how to create custom views to filter and display specific groups of users and assets on your screen
            for better visibility and organization.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6">
          <h2>Views</h2>
          <p>
            Views are used to filter a group of users/assets on the screen. This feature allows better visibility over
            what is most important to see on the screen at any moment.
          </p>

          <p>Views are tightly linked with the concept of Tags.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-md shadow-sm">
            <p className="text-sm text-blue-700">
              <strong>Learn how to create tags first.</strong>
            </p>
          </div>

          <h2>How to create a View</h2>
          <p>Using the tags created before, you can create a view.</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to <strong>Main Menu → Admin → select Views</strong>
            </li>
            <li>
              Press on button{" "}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zTyl2V29Qk9f7HgoV9lQatbn3KyTD.png"
                alt="Blue + View button"
                className="inline-block mx-1 border border-gray-200 rounded"
              />{" "}
              and add a name and a description (optional).
            </li>
          </ol>

          <p>
            In this screenshot, we will also use the Status option to display only assets that are offline or never seen
            (never reported data to the system).
          </p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zZdWbmSQSjKD6T78UbCxB3hwo8Wkq.png"
              alt="View creation dialog showing Details section with Name field as 'Offline', Description field, and Status options with Offline and Never been seen checkboxes selected"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <ol start={3} className="list-decimal list-inside space-y-2">
            <li>Select a tag.</li>
          </ol>

          <p>The view will only act on the tag of users/assets selected in this step.</p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CkdAOfcqBBSAmeHa19HdppBNAqhq7d.png"
              alt="Tags selection screen showing Match any option selected and a table with 'Show on map' tag selected, plus a + Tag button for creating new tags"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>

          <ol start={4} className="list-decimal list-inside space-y-2">
            <li>
              Click on <strong>Save</strong>.
            </li>
            <li>Your new view will be immediately available for selection at the top-right of the screen.</li>
          </ol>

          <p>
            The option <strong>Manage Views</strong> will open the Views window where more views can be created or
            edited from the existing views.
          </p>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AkBaxGnjDureDGiDOOloLo3yKE4cCc.png"
              alt="View selection dropdown in top-right corner showing Offline view selected, with options for All, Devices, and Manage views"
              className="border border-gray-200 rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>

          <div className="my-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5IZ36OGQqJmlZ5wOa0DfG5ltlm2PMd.png"
              alt="Views management window showing a table with existing views like All, Devices, and Offline, with a + View button to create new ones"
              className="border border-gray-200 rounded-lg shadow-sm w-full"
              loading="lazy"
            />
          </div>
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
