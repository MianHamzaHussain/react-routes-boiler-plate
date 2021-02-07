import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
const { SubMenu } = Menu;
const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/"></Link>
      </Menu.Item>

      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="users">
        <Link to="/users"> Users</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;