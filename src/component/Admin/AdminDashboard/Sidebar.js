import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Tickets, Shapes, ChevronDown, ChevronUp, Wallet, History, HelpCircle } from "lucide-react";
import { Card, Space } from 'antd';


const Sidebar = ({ user, festDetails }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

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
    {
      name: "My Wallet",
      icon: <Wallet />,
      link: "/admin/wallet",
    },
    {
      name: "History Data",
      icon: <History />,
      link: "/admin/history",
    },
    {
      name: "Helps",
      icon: <HelpCircle />,
      link: "/admin/helps",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
      <div className="h-full bg-transparent">
      <div className="text-center w-full space-x-4 flex items-center justify-center">
        <div className="text-center">
          <img
            src={festDetails.logo.imageUrl}
            alt="Fest logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold capitalize">{festDetails.festName}</h1>
        </div>
      </div>
      <ul className="text-sm text-neutral-700 mt-8">
        {dashboardOptions.map((option, index) => (
          <li key={index} className="mb-1 my-1">
            {option.subMenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center w-full justify-start px-2 py-2 hover:scale-105 transition-all duration-500 ease-in-out rounded-lg text-left"
                >
                  <span className="mr-3">{option.icon}</span>
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
                          className="block px-4 py-2 my-2 hover:scale-105 duration-500 rounded"
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
                className="flex items-center px-2 py-2 hover:scale-105 duration-500 rounded-lg text-left"
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