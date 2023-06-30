import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSnapchat,
  FaPinterest,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaReddit,
} from "react-icons/fa";
import "./Battery.scss";

const Battery = () => {
  const [apps, setApps] = useState([]);
  const [terminatedAppId, setTerminatedAppId] = useState(null);

  useEffect(() => {
    fetchAppBatteryUsage();
  }, []);

  const fetchAppBatteryUsage = () => {
    // Simulated API call to fetch app battery usage
    const mockAppData = [
      {
        id: 1,
        name: "Instagram",
        batteryConsumption: 25,
        icon: <FaInstagram />,
      },
      {
        id: 2,
        name: "Facebook",
        batteryConsumption: 20,
        icon: <FaFacebook />,
      },
      {
        id: 3,
        name: "Twitter",
        batteryConsumption: 15,
        icon: <FaTwitter />,
      },
      {
        id: 4,
        name: "Snapchat",
        batteryConsumption: 18,
        icon: <FaSnapchat />,
      },
      {
        id: 5,
        name: "Pinterest",
        batteryConsumption: 12,
        icon: <FaPinterest />,
      },
      {
        id: 6,
        name: "LinkedIn",
        batteryConsumption: 10,
        icon: <FaLinkedin />,
      },
      {
        id: 7,
        name: "WhatsApp",
        batteryConsumption: 22,
        icon: <FaWhatsapp />,
      },
      {
        id: 8,
        name: "YouTube",
        batteryConsumption: 28,
        icon: <FaYoutube />,
      },
      {
        id: 9,
        name: "TikTok",
        batteryConsumption: 30,
        icon: <FaTiktok />,
      },
      {
        id: 10,
        name: "Reddit",
        batteryConsumption: 14,
        icon: <FaReddit />,
      },
      // Add more app data as needed
    ];

    setApps(mockAppData);
  };

  const terminateApp = (appId) => {
    console.log(`Terminating app with ID: ${appId}`);
    setTerminatedAppId(appId);

    // Simulated API call to remove the terminated app from the list
    setTimeout(() => {
      setApps(apps.filter((app) => app.id !== appId));
      setTerminatedAppId(null);
    }, 100);
  };

  return (
    <div className="battery-container">
      <h1 className="title">Battery Consumption App</h1>
      <h2 className="title2">App Battery Usage</h2>
      <div className="app-list">
        {apps.length > 0 ? (
          apps.map((app) => (
            <div key={app.id} className="app-item">
              <div className="app-icon">{app.icon}</div>
              <div className="app-details">
                <div className="app-name">{app.name}</div>
                <div className="app-battery">{app.batteryConsumption}%</div>
              </div>
              <button
                className="terminate-button"
                onClick={() => terminateApp(app.id)}
              >
                Terminate
              </button>
            </div>
          ))
        ) : (
          <p className="title2">No apps left to terminate.</p>
        )}
      </div>

      {terminatedAppId && (
        <p>App with ID {terminatedAppId} has been terminated.</p>
      )}
    </div>
  );
};

export default Battery;
