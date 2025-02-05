import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Tickets,
  Shapes,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Sidebar = ({ user, festDetails }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  console.log(festDetails);

  const dashboardOptions = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Event Management",
      icon: <Tickets />,
      subMenu: [
        { name: "Add Event", link: "/admin/events/add" },
        { name: "View Events", link: "/admin/events" },
      ],
    },
    {
      name: "Department Management",
      icon: <Shapes />,
      subMenu: [
        { name: "Add Department", link: "/admin/departments/add" },
        { name: "View Departments", link: "/admin/departments" },
      ],
    },
    // {
    //   name: "Orders Management",
    //   icon: <LocalShippingRoundedIcon />,
    //   link: "/admin/orders",
    // },
    // {
    //   name: "Reviews",
    //   icon: <ForumRoundedIcon />,
    //   link: "/admin/reviews",
    // },
    // {
    //   name: "Settings",
    //   icon: <TuneRoundedIcon />,
    //   link: "/admin/settings",
    // },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="px-4 py-8 sticky left-0 h-screen overflow-y-auto bg-gray-100 w-72 shadow-md font-medium">
      <div className="text-center w-full">
        <div className="text-center">
          <img
            src={festDetails.logo.imageUrl}
            alt="Fest logo"
            className="w-16 h-16 rounded-full shadow-md"
          />
        </div>
        <div>
          <h className="text-2xl font-bold uppercase">{festDetails.festName}</h>
        </div>
      </div>
      <h1>Hello, {user.name}</h1>
      <ul className="text-sm text-neutral-700">
        {dashboardOptions.map((option, index) => (
          <li key={index} className="mb-1c my-2">
            {option.subMenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center w-full bg-white px-2 py-2 text-left hover:bg-gray-200 transition-all duration-500 ease-in-out rounded-lg"
                >
                  <span className="mr-4">{option.icon}</span>
                  <span>{option.name}</span>
                  <span className="ml-auto">
                    {openDropdown === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                {openDropdown === index && (
                  <ul className="pl-10 mt-1 overflow-hidden transition-all duration-500 ease-in-out max-h-[500px] opacity-100 my-4">
                    {option.subMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.link}
                          className="block px-4 py-2 text-gray-700 bg-white my-2 hover:bg-gray-100 rounded"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={option.link}
                className="flex items-center bg-white px-4 py-2 hover:bg-gray-200 rounded-lg"
              >
                <span className="mr-4">{option.icon}</span>
                <span>{option.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
