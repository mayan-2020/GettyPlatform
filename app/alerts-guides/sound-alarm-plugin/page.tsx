import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Volume2, Settings, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function SoundAlarmPluginPage() {
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
            <Volume2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Sound Alarm Plugin</h1>
          <p className="text-lg text-slate-600">
            This guide explains how to enable the sound alarm plugin on GpsGate Server. The plugin will play an alert
            sound on each incoming alarm, therefore the sound will be repeated until all the alarms are closed.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Settings className="h-6 w-6 text-blue-600" />
                How to install or upgrade the plugin
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    1
                  </Badge>
                  <span className="text-slate-700 text-base">Log in to Site Admin (Legacy)</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    2
                  </Badge>
                  <span className="text-slate-700 text-base">Go to the Plugins tab.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    3
                  </Badge>
                  <span className="text-slate-700 text-base">Go to Get More Plugins.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    4
                  </Badge>
                  <span className="text-slate-700 text-base">Download and install the Sound Alarm plugin.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    5
                  </Badge>
                  <span className="text-slate-700 text-base">
                    Go to the Applications tab and select the application you want to enable the Sound Alarm plugin for.
                  </span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300 mt-1"
                  >
                    6
                  </Badge>
                  <span className="text-slate-700 text-base">
                    Access the application privileges and enable SoundAlarm for the application.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Volume2 className="h-6 w-6 text-blue-600" />
                Enabling the Sound Alarm on the Event Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 mb-6 text-base leading-relaxed">
                After installing the plugin and enabling it for the application that you are interested in, you need to
                enable it for the event rules you want to use it. Login to your Asset Tracker application and open the
                event rules under the Admin menu. Select the event rule you want, go to step 6 called "Presentation" and
                check the box next to Sound and choose the sound.
              </p>

              <div className="my-8">
                <Image
                  src="/images/sound-presentation-settings.png"
                  alt="Event presentation settings interface showing Sound option with dropdown menu for selecting sound files"
                  width={800}
                  height={400}
                  className="rounded-lg border shadow-md w-full"
                />
                <p className="text-sm text-slate-500 mt-2 italic">Event presentation settings interface</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 text-base">
                    Please note that these steps enable the Sound Alarm for one Event Rule in one application and they
                    need to be repeated for each Event Rule and application on which you want to use the Sound Alarm
                    plugin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Volume2 className="h-6 w-6 text-blue-600" />
                Mute
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 mb-6 text-base leading-relaxed">
                Once a sound alert is triggered it can be muted by clicking the button in the bottom right corner of the
                Workspace. The sound will stop until the next alert comes in.
              </p>

              <div className="my-6">
                <Image
                  src="/images/mute-button.png"
                  alt="Mute button located in the bottom right corner of the workspace"
                  width={200}
                  height={100}
                  className="rounded-lg border shadow-md"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-slate-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-700 mb-4 text-base leading-relaxed">
                If you cannot see the Sound option on the Presentation Section for an Event Rule make sure the current
                user has the SoundAlarm privilege enabled.
              </p>

              <p className="text-slate-700 mb-6 text-base leading-relaxed">
                Log in to your Asset Tracker application and open Roles under the Admin menu. Select the Role for your
                user and check the box next to SoundAlarm under privileges.
              </p>

              <div className="my-6">
                <Image
                  src="/images/role-privileges-soundalarm.png"
                  alt="Role privileges settings interface showing SoundAlarm privilege highlighted and enabled"
                  width={600}
                  height={500}
                  className="rounded-lg border shadow-md w-full"
                />
                <p className="text-sm text-slate-500 mt-2 italic">Role privileges settings interface</p>
              </div>
            </CardContent>
          </Card>
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
