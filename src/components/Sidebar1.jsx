"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Sidebar1() {
  return (
    <Sidebar aria-label='Sidebar with multi-level dropdown example'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className='sidebar-item'>
            <Sidebar.Item icon={HiChartPie}>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </Sidebar.Item>
          </div>
          <div className='sidebar-item'>
            <Sidebar.Item icon={HiUser}>
              <NavLink to={"/post-mananger"}>Posts Management</NavLink>
            </Sidebar.Item>
          </div>
          <div className='sidebar-item'>
            <Sidebar.Item icon={HiShoppingBag}>
              <NavLink to={"/settings"}>Settings</NavLink>
            </Sidebar.Item>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
