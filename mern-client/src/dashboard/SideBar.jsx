import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/propic1.jpg"
import userImg1 from "../assets/urbanlogo.jpeg"

export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="/" img={userImg1} imgAlt="Flowbite logo">
        UrbanHarvestHub
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-users" icon={HiTable}>
            Manage Users
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-articles" icon={HiOutlineCloudUpload}>
            Upload Article
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-articles" icon={HiInbox}>
            Manage Articles
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-question" icon={HiInbox}>
            Manage Questions
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-studentprojects" icon={HiInbox}>
            Manage Projects
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-reviews" icon={HiInbox}>
            Manage Reviews
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-events" icon={HiOutlineCloudUpload}>
            Upload Event
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-event" icon={HiInbox}>
            Manage Events
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-community" icon={HiInbox}>
            Manage Community
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-community" icon={HiOutlineCloudUpload}>
            Upload Community
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-orders" icon={HiShoppingBag}>
            Manage Orders
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-inventoryitems" icon={HiShoppingBag}>
            Manage Products
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-inventoryitem" icon={HiOutlineCloudUpload}>
            Upload Item
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload-driver" icon={HiOutlineCloudUpload}>
            Upload Drivers
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-driverdetails" icon={HiInbox}>
            Manage Drivers
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-reviews" icon={HiInbox}>
            Customer Reviews
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage-reviews" icon={HiInbox}>
            Customer Contacts
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
