import { NavLink } from "react-router-dom";
import { logo, notification, calendar, projects, settings, dashboard } from "../assets/icons";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", icon: dashboard, path: "/" },
    { name: "Projects", icon: projects, path: "/projects" },
    { name: "Calendar", icon: calendar, path: "/calendar" },
    { name: "Settings", icon: settings, path: "/settings" },
    { name: "Notifications", icon: notification, path: "/notifications" },
  ];

  return (
    <div className="text-black flex">
      <section className="max-w-80 h-screen bg-blue-200 text-2xl py-2 p-10">
        <img src={logo} alt="logo" className="mb-10" />

        <ul className="space-y-5">
          {navItems.map((item) => (
            <li key={item.path}>
           <NavLink
              to={item.path}
              className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md transition-all duration-300 w-[200px]  ${
              isActive ? "bg-blue-400 text-gray-950" : "text-gray-950 hover:bg-blue-300"
                }`
              }
              >
              <img src={item.icon} alt={item.name} className="w-8 h-8 mr-3" />
            {item.name}
          </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
