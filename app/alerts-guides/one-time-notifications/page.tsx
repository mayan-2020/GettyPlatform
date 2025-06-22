import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, CheckCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function OneTimeNotificationsPage() {
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
            <Bell className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">One-time notifications for repeated asset movement</h1>
          <p className="text-lg text-slate-600">
            This guide shows how to get a one-time notification for asset movement that is repeated several times in a
            day.
          </p>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-6 w-6 text-blue-600" />
              Scenario
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-slate-700 text-base leading-relaxed">
              There are cases when an action is repeated several times within the same day - but a notification (or a
              response to it) is just needed once. One example could be detecting a asset's movement during the night.
              In that case, it would be useful to get a notification the first time that the unexpected asset's movement
              is detected, but additional notifications would be redundant.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-slate-700 mb-8 text-base leading-relaxed">
              The solution for this scenario is creating an Event Rule that starts just one event - even when the asset
              movement is repeated several times within a day - and does not close it until the end of that day. The
              first step would be scheduling the Event Rule on step 3.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    1
                  </Badge>
                  <h3 className="text-xl font-semibold">Select the days that the Event Rule should be active</h3>
                </div>
                <div className="border rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/schedule-rule-activity.png"
                    alt="Schedule rule activity interface showing daily schedule from 22:00 to 06:00"
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    2
                  </Badge>
                  <h3 className="text-xl font-semibold">Set the expression and end expression</h3>
                </div>
                <p className="text-slate-700 mb-4 text-base leading-relaxed">
                  Then set the expression that will start the event. For this example, the variable Speed will be used
                  to detect a asset's movement during the night. It also needs an End Expression which will always be
                  false so the Event is not ended until the scheduler ends it.
                </p>
                <p className="text-slate-700 mb-6 text-base leading-relaxed">
                  Note that the option Delayed event is also activated to avoid generating multiple events if a
                  condition is true and then false repeatedly.
                </p>
                <div className="border rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/expressions-delayed-event.png"
                    alt="Expressions setup with Speed greater than 5 km/h and delayed event option"
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    3
                  </Badge>
                  <h3 className="text-xl font-semibold">Set up notifications</h3>
                </div>
                <p className="text-slate-700 mb-6 text-base leading-relaxed">
                  A notification has to be set up in step 5 in order to get a notification. You can use, for example,
                  email notification or any other type of your choice.
                </p>
                <div className="border rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/email-notification-setup.png"
                    alt="Email notification setup interface"
                    width={800}
                    height={200}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                  >
                    4
                  </Badge>
                  <h3 className="text-xl font-semibold">Complete the setup</h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  Click on Next and don't set any values on 6. Presentation. Then Save your rule.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <p className="text-green-800 font-medium text-base">
                Now you have an alert that it will be triggered just once and not multiple times when the condition is
                met.
              </p>
            </div>
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
