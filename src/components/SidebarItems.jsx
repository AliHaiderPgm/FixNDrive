import React from 'react'
import { BarChartOutlined, CustomerServiceOutlined, DollarOutlined, FileSearchOutlined, LaptopOutlined, SettingOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const items = [
  {
    key: "dashboard",
    icon: <LaptopOutlined />,
    label: <p>Dashboard</p>,
    children: [
      {
        key: "analytics",
        label: (
          <Link to={'/analytics'} className="no-underline">
            Analytics
          </Link>
        ),
      },
      {
        key: "sellerProfiles",
        label: (
          <Link to={'/seller'} className="no-underline">
            Seller Profiles
          </Link>
        ),
      },
      {
        key: "userProfiles",
        label: (
          <Link to={'/user'} className="no-underline">
            User Profiles
          </Link>
        ),
      },
    ],
  },
  {
    key: "services",
    icon: <CustomerServiceOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Services
      </Link>
    ),
  },
  {
    key: "orders",
    icon: <ShopOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Orders
      </Link>
    ),
  },
  {
    key: "statistics",
    icon: <BarChartOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Statistics
      </Link>
    ),
  },
  {
    key: "reviews",
    icon: <FileSearchOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Reviews
      </Link>
    ),
  },
  {
    key: "customers",
    icon: <UserOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Customers
      </Link>
    ),
  },
  {
    key: "transactions",
    icon: <DollarOutlined />,
    label: (
      <Link to={'/'} className="no-underline">
        Transactions
      </Link>
    ),
  },
  {
    key: "setting",
    icon: <SettingOutlined />,
    label: (
      <Link to={"/"} className='no-underline'>
        Settings
      </Link>
    )
  }
];