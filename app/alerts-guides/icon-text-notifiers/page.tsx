import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Settings, Eye, Save, ArrowLeft } from "lucide-react"

export default function IconTextNotifiersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Platform
            </a>
            <div className="flex items-center">
              <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
            <Settings className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Event rule use case: display icon and text notifiers
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            This guide will walk you through creating a customized Assets panel with text and icon notifiers.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-blue-800 mb-2">
                  <strong>Text notifiers</strong> are useful for displaying tracker input data directly in the Assets
                  panel.
                </p>
                <p className="text-blue-800">
                  Similarly, <strong>icon notifiers</strong> are convenient for quickly understanding the status of a
                  signal at a glance.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <img
              src="/images/icon-text-notifiers-result.png"
              alt="Assets panel showing icon and text notifiers for charging status"
              className="w-full rounded-lg border shadow-lg"
            />
          </div>
        </div>

        {/* Setup Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-6 w-6 text-blue-600" />
              Setup Process
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-slate-700 mb-8 text-lg">
              Text and icon notifiers are linked to event rules. Inputs from your trackers are captured and generate
              events that display the values. So we need to create an event rule using both Text and Icon as
              notifications.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    1
                  </Badge>
                  Follow the Custom event rule wizard until step 4.
                </h3>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    2
                  </Badge>
                  In 4. Expressions use the following settings:
                </h3>
                <p className="text-slate-700 mb-4 text-base leading-relaxed">
                  In our example, we want to display the charging status icon, so we will use Digital expression with
                  the variable Charging.
                </p>
                <p className="text-slate-700 mb-6 text-base leading-relaxed">
                  Select the variable according to the Device Mapper configuration for your trackers.
                </p>
                <img
                  src="/images/expressions-setup.png"
                  alt="Expressions setup showing Charging variable configuration"
                  className="w-full rounded-lg border shadow-md"
                />
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    3
                  </Badge>
                  In step 5, under Notifications, choose the Icon option and then add a second option for Text.
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-slate-700 mb-4 text-base leading-relaxed">
                      For the Icon option, select the icons you want to display when the expression is active or
                      inactive.
                    </p>
                    <img
                      src="/images/icon-text-setup.png"
                      alt="Icon selection interface showing various icon options"
                      className="w-full rounded-lg border shadow-md"
                    />
                  </div>

                  <div>
                    <p className="text-slate-700 mb-4 text-base leading-relaxed">
                      For the Text option, you can enter any text you like and/or combine it with existing variables as
                      needed.
                    </p>
                    <img
                      src="/images/notifications-setup.png"
                      alt="Notifications setup showing both Icon and Text configuration"
                      className="w-full rounded-lg border shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    4
                  </Badge>
                  In 6. Presentation, we won't select any value. Click on Next.
                </h3>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    5
                  </Badge>
                  Click on Save to finally save your Event Rule.
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Columns Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Eye className="h-6 w-6 text-blue-600" />
              Add the columns to the Assets panel
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-slate-700 mb-8 text-lg">
              To have the changes reflected in the interface, follow these steps:
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-green-100 text-green-700 border-green-300"
                  >
                    1
                  </Badge>
                  Refresh the browser after the creation of your Event Rule.
                </h3>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-green-100 text-green-700 border-green-300"
                  >
                    2
                  </Badge>
                  Adding the columns with the names created in step 5. to the Asset panel.
                </h3>
                <p className="text-slate-700 mb-6 text-base leading-relaxed">
                  You can read more about adding columns to your workspace here.
                </p>
                <img
                  src="/images/column-selection.png"
                  alt="Column selection interface showing Charging and Comment columns"
                  className="w-full rounded-lg border shadow-md"
                />
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-green-100 text-green-700 border-green-300"
                  >
                    3
                  </Badge>
                  <Save className="h-5 w-5 text-green-600" />
                  Save your Workspace.
                </h3>
                <img
                  src="/images/final-assets-panel.png"
                  alt="Final Assets panel showing charging status with icons and text"
                  className="w-full rounded-lg border shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-200">
          <a href="/alerts-guides" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to Alerts Guides
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6 mt-16">
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
