import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Settings, Target, Zap, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function OneShotEventsPage() {
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
            <Target className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">One-shot events</h1>
          <p className="text-lg text-slate-600">
            Learn how to configure one-shot events to prevent redundant notifications and ensure clean event handling.
          </p>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              Understanding One-shot Events
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <p className="text-slate-700 text-base leading-relaxed">
              When working with Event Rules, there are scenarios where you need the rule's condition to reset (turn
              false) before triggering another notification. This is especially relevant when dealing with recurring
              events or continuous monitoring.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              One-shot events provide a practical solution in these cases. They ensure that notifications are sent only
              once per "true" evaluation of the condition, preventing redundant alerts. Once the rule's condition
              becomes false, it resets, allowing a new notification to trigger the next time the condition is met.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              This behaviour is particularly useful for sending notifications for each track point or event occurrence,
              ensuring clear and actionable updates without overlap.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-6 w-6 text-blue-600" />
              The one-shot event rule
            </CardTitle>
            <CardDescription className="text-base">
              Follow these steps to create an effective one-shot event rule
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start gap-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    1
                  </Badge>
                  <div>
                    <p className="font-semibold text-lg text-slate-800 mb-2">Access Event Rules</p>
                    <p className="text-slate-700 text-base leading-relaxed">
                      Edit/create an event rule by accessing the Main Menu {">"} Admin {">"} Event Rules menu in your
                      application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start gap-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    2
                  </Badge>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-lg text-slate-800 mb-2">Select Asset Tags</p>
                      <p className="text-slate-700 text-base leading-relaxed">
                        In Step 2. Who this rule applies to select only the asset tag(s) that will make use of this
                        rule.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-base">
                        <strong>Note:</strong> this step is important to avoid performance issues on your server.
                      </p>
                    </div>
                    <div className="border rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/images/asset-tags-selection.png"
                        alt="Checkbox options for asset tags showing Assets Tag 1 selected"
                        width={600}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start gap-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    3
                  </Badge>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-lg text-slate-800 mb-2">Configure Expressions</p>
                      <p className="text-slate-700 text-base leading-relaxed">
                        In Step 4. Expressions add the same expression that triggers the event in Show advanced options
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Example 1: Using SOS as a variable to track updates of the SOS state
                        </h4>
                        <div className="border rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/images/sos-expressions-setup.png"
                            alt="Expressions settings interface showing SOS variable configuration"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Example 2: Using the Temperature (Analog) signal to capture every temperature variation
                        </h4>
                        <div className="border rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/images/temperature-expressions-setup.png"
                            alt="Temperature rule settings interface showing temperature variable configuration"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Example 3: Use the variable Speed (Analog) to trigger a one-shot event
                        </h4>
                        <div className="border rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/images/speed-expressions-setup.png"
                            alt="Speed rule settings interface showing speed variable configuration"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start gap-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    4
                  </Badge>
                  <div>
                    <p className="font-semibold text-lg text-slate-800 mb-2">Save Your Event Rule</p>
                    <p className="text-slate-700 text-base leading-relaxed">
                      Save your event rule to activate the one-shot behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Zap className="h-6 w-6 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-slate-700 text-base">
                  Prevents redundant notifications for continuous conditions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-slate-700 text-base">Ensures clean event handling for recurring scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-slate-700 text-base">Provides actionable updates without overlap</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></span>
                <span className="text-slate-700 text-base">Automatically resets when conditions change</span>
              </li>
            </ul>
          </CardContent>
        </Card>
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
