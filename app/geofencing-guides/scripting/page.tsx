import { ArrowLeft, Code } from "lucide-react"

export default function GeofencingScripting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <a href="/geofencing-guides" className="flex items-center text-white hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Geofencing Guides
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
            <Code className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Geofences and scripting</h1>
          <p className="text-lg text-slate-600">
            Advanced automation using scripts with geofence events to create powerful, customized responses.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <h2>Introduction to Geofence Scripting</h2>
          <p>
            Geofence scripting allows you to create custom automated responses when vehicles enter, exit, or dwell
            within geofenced areas. This powerful feature enables you to build sophisticated business logic and
            integrate with external systems.
          </p>

          <h3>Benefits of Scripting</h3>
          <ul>
            <li>Automate complex business processes</li>
            <li>Integrate with third-party systems and APIs</li>
            <li>Create custom notifications and alerts</li>
            <li>Implement conditional logic based on multiple factors</li>
            <li>Generate dynamic reports and data exports</li>
          </ul>

          <h2>Script Triggers and Events</h2>

          <h3>Available Geofence Events</h3>
          <ul>
            <li>
              <strong>onEnter:</strong> Triggered when a vehicle enters the geofence
            </li>
            <li>
              <strong>onExit:</strong> Triggered when a vehicle exits the geofence
            </li>
            <li>
              <strong>onDwell:</strong> Triggered when a vehicle remains in the geofence for a specified time
            </li>
            <li>
              <strong>onViolation:</strong> Triggered when geofence rules are violated
            </li>
            <li>
              <strong>onSchedule:</strong> Triggered at specific times while vehicle is in geofence
            </li>
          </ul>

          <h3>Event Data Available to Scripts</h3>
          <p>When a geofence event occurs, the following data is available to your scripts:</p>
          <ul>
            <li>Vehicle information (ID, name, type, driver)</li>
            <li>Geofence details (name, type, coordinates)</li>
            <li>Timestamp and duration information</li>
            <li>GPS coordinates and speed</li>
            <li>Custom vehicle and geofence properties</li>
          </ul>

          <h2>Script Development Environment</h2>

          <h3>Supported Languages</h3>
          <p>The scripting engine supports:</p>
          <ul>
            <li>
              <strong>JavaScript:</strong> Most common and recommended
            </li>
            <li>
              <strong>Python:</strong> For complex data processing
            </li>
            <li>
              <strong>SQL:</strong> For database operations
            </li>
          </ul>

          <h3>Basic Script Structure</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`// JavaScript example
function onGeofenceEnter(event) {
    // Get event data
    var vehicle = event.vehicle;
    var geofence = event.geofence;
    var timestamp = event.timestamp;
    
    // Your custom logic here
    if (vehicle.type === "delivery_truck") {
        sendNotification("Delivery truck entered " + geofence.name);
        updateDeliveryStatus(vehicle.id, "arrived");
    }
    
    // Log the event
    console.log("Vehicle " + vehicle.name + " entered " + geofence.name);
}`}
          </pre>

          <h2>Common Scripting Use Cases</h2>

          <h3>1. Customer Arrival Notifications</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`function onGeofenceEnter(event) {
    if (event.geofence.type === "customer_site") {
        // Send SMS to customer
        sendSMS(event.geofence.customerPhone, 
               "Your delivery driver has arrived. ETA: 5 minutes");
        
        // Update CRM system
        updateCRM(event.geofence.customerId, {
            status: "driver_arrived",
            timestamp: event.timestamp,
            vehicle: event.vehicle.id
        });
    }
}`}
          </pre>

          <h3>2. Automatic Time Tracking</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`function onGeofenceEnter(event) {
    // Start time tracking
    database.insert("time_entries", {
        vehicle_id: event.vehicle.id,
        driver_id: event.vehicle.driver_id,
        site_id: event.geofence.id,
        start_time: event.timestamp,
        status: "active"
    });
}

function onGeofenceExit(event) {
    // End time tracking
    database.update("time_entries", {
        end_time: event.timestamp,
        status: "completed"
    }, {
        vehicle_id: event.vehicle.id,
        site_id: event.geofence.id,
        status: "active"
    });
}`}
          </pre>

          <h3>3. Security Alerts</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`function onGeofenceEnter(event) {
    if (event.geofence.type === "restricted_area") {
        var currentTime = new Date().getHours();
        
        // Check if entry is during restricted hours
        if (currentTime < 6 || currentTime > 18) {
            // Send immediate alert
            sendAlert("SECURITY BREACH", {
                vehicle: event.vehicle.name,
                location: event.geofence.name,
                time: event.timestamp,
                coordinates: event.coordinates
            });
            
            // Trigger camera recording if available
            triggerCameraRecording(event.vehicle.id);
        }
    }
}`}
          </pre>

          <h2>Advanced Scripting Features</h2>

          <h3>Conditional Logic</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`function onGeofenceEnter(event) {
    var vehicle = event.vehicle;
    var geofence = event.geofence;
    
    // Multiple conditions
    if (vehicle.type === "service_van" && 
        geofence.category === "customer_site" &&
        isBusinessHours(event.timestamp)) {
        
        // Check if this is a scheduled visit
        var appointment = getScheduledAppointment(vehicle.id, geofence.id);
        
        if (appointment) {
            notifyCustomer(appointment.customer_id, "Service technician has arrived");
            updateAppointmentStatus(appointment.id, "in_progress");
        } else {
            // Unscheduled visit - alert dispatcher
            alertDispatcher("Unscheduled visit detected", {
                vehicle: vehicle.name,
                location: geofence.name
            });
        }
    }
}`}
          </pre>

          <h3>External API Integration</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`function onGeofenceEnter(event) {
    // Update external system via API
    var apiData = {
        vehicle_id: event.vehicle.id,
        location: event.geofence.name,
        timestamp: event.timestamp,
        coordinates: {
            lat: event.coordinates.latitude,
            lng: event.coordinates.longitude
        }
    };
    
    // Send to external API
    httpPost("https://api.yourcompany.com/vehicle-updates", apiData, {
        headers: {
            "Authorization": "Bearer " + getApiToken(),
            "Content-Type": "application/json"
        }
    });
}`}
          </pre>

          <h2>Script Management</h2>

          <h3>Creating and Deploying Scripts</h3>
          <ol>
            <li>Navigate to the Script Management section</li>
            <li>Click "Create New Script"</li>
            <li>Choose the trigger event (enter, exit, dwell, etc.)</li>
            <li>Write your script code in the editor</li>
            <li>Test the script with sample data</li>
            <li>Assign the script to specific geofences</li>
            <li>Deploy and activate the script</li>
          </ol>

          <h3>Script Testing and Debugging</h3>
          <ul>
            <li>
              <strong>Test mode:</strong> Run scripts with simulated events
            </li>
            <li>
              <strong>Debug logging:</strong> Use console.log() for troubleshooting
            </li>
            <li>
              <strong>Error handling:</strong> Implement try-catch blocks
            </li>
            <li>
              <strong>Performance monitoring:</strong> Track script execution times
            </li>
          </ul>

          <h2>Best Practices</h2>

          <h3>Performance Optimization</h3>
          <ul>
            <li>Keep scripts lightweight and efficient</li>
            <li>Avoid long-running operations in event handlers</li>
            <li>Use asynchronous operations for external API calls</li>
            <li>Cache frequently accessed data</li>
            <li>Implement proper error handling</li>
          </ul>

          <h3>Security Considerations</h3>
          <ul>
            <li>Validate all input data</li>
            <li>Use secure API authentication methods</li>
            <li>Avoid hardcoding sensitive information</li>
            <li>Implement rate limiting for external calls</li>
            <li>Log security-relevant events</li>
          </ul>

          <h3>Maintenance and Monitoring</h3>
          <ul>
            <li>Regularly review script performance</li>
            <li>Monitor error rates and execution times</li>
            <li>Keep scripts updated with business rule changes</li>
            <li>Document script functionality and dependencies</li>
            <li>Implement version control for script changes</li>
          </ul>

          <h2>Troubleshooting</h2>

          <h3>Common Issues</h3>
          <ul>
            <li>
              <strong>Script not triggering:</strong> Check geofence assignment and event configuration
            </li>
            <li>
              <strong>Performance problems:</strong> Review script complexity and external dependencies
            </li>
            <li>
              <strong>API failures:</strong> Implement retry logic and error handling
            </li>
            <li>
              <strong>Data inconsistencies:</strong> Validate input data and handle edge cases
            </li>
          </ul>

          <h3>Debugging Tools</h3>
          <ul>
            <li>Script execution logs</li>
            <li>Performance metrics dashboard</li>
            <li>Error reporting and alerting</li>
            <li>Test event simulator</li>
            <li>API call monitoring</li>
          </ul>
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
