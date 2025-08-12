import React from "react";
import "./CardGrid.css";
import {
  FaSatelliteDish,
  FaChartBar,
  FaCogs,
  FaTools,
  FaShieldAlt,
  FaBell,
  FaDatabase,
  FaUsersCog,
} from "react-icons/fa";

const CardGrid = () => {
  const cards = [
    {
      title: "Telementary Data Collection",
      content:
        "Ensure uninterrupted data collection, even during network or hardware failures, with Senshost's robust telemetry data storage solution. Access your collected data effortlessly through customizable web dashboards or server-side APIs, empowering you with actionable insights for informed decision-making and enhanced operational efficiency.",
      icon: <FaSatelliteDish />,
    },
    {
      title: "Data Visualization",
      content:
        "With Senshost's data visualization tools, complex data becomes easy to understand. Visual representations like charts and graphs help you see trends, patterns, and anomalies at a glance, empowering you to make informed decisions and drive your business forward with confidence.",
      icon: <FaChartBar />,
    },
    {
      title: "IOT Rule Engine",
      content:
        "The IoT Rule Engine simplifies automation by allowing users to set up rules that trigger actions based on predefined conditions. It enables seamless monitoring and response to data from IoT devices, enhancing efficiency and control in various applications.",
      icon: <FaCogs />,
    },
    {
      title: "Breakdown Management",
      content:
        "Identify potential issues before they escalate, enabling quick response and minimizing disruptions to your operations. With comprehensive insights and predictive analytics, optimize maintenance schedules and ensure smooth operations for enhanced productivity.",
      icon: <FaTools />,
    },
    {
      title: "Preventive Service Management",
      content:
        "Proactively monitor equipment health, schedule routine maintenance, and identify potential issues before they escalate. Enhance operational efficiency and extend the lifespan of your assets with proactive maintenance practices.",
      icon: <FaUsersCog />,
    },
    {
      title: "Alarm Management",
      content:
        "Stay Ahead of Issues with Advanced Monitoring and Notification Systems. Receive instant alerts and notifications to address issues promptly, ensuring smooth operations and minimizing downtime.",
      icon: <FaBell />,
    },
    {
      title: "Customization and Integration",
      content:
        "Our solutions are customizable to fit your unique needs, ensuring a perfect fit for your business. Integration with existing systems is seamless, allowing for a smooth transition and enhanced efficiency.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Multi Tenancy",
      content:
        "Our multi-tenancy solution enables efficient resource sharing among multiple users or tenants. It optimizes resource utilization, enhances scalability, and reduces costs by allowing tenants to access shared infrastructure and services seamlessly.",
      icon: <FaDatabase />,
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div
          data-aos="fade-left"
          data-aos-delay={index * 100}
          key={index}
          className="card"
        >
          <div className="card-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
