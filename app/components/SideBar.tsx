"use client";
import React, { useState } from 'react';
import { Sidebar, Nav, Avatar, Text, Button, Box, Tip } from 'grommet';
import { Dashboard, User, MapLocation, Logout, Menu, Close } from 'grommet-icons';
import Link from 'next/link';

const AppSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const NavItem: React.FC<{ href: string; icon: JSX.Element; label: string }> = ({ href, icon, label }) => (
    <Link href={href}>
      <Tip content={collapsed ? label : undefined}>
        <Box direction="row" gap="small" align="center" pad="xsmall">
          {icon}
          {!collapsed && <Text color="light-1">{label}</Text>}
        </Box>
      </Tip>
    </Link>
  );

  return (
    <Sidebar
      background="brand"
      pad="small"
      width={collapsed ? "72px" : "200px"}
      header={
        <Box direction="row" align="center" gap="small">
          {!collapsed && (
            <Avatar background="light-2" size="medium">
              <Text weight="bold">M</Text>
            </Avatar>
          )}
          <Button
            icon={collapsed ? <Menu color="light-1" /> : <Close color="light-1" />}
            onClick={toggleSidebar}
            plain
          />
        </Box>
      }
      footer={
        <Nav gap="small">
          <NavItem href="/logout" icon={<Logout color="light-1" />} label="Logout" />
        </Nav>
      }
    >
      <Nav gap="small">
        <NavItem href="/dashboard" icon={<Dashboard color="light-1" />} label="Dashboard" />
        <NavItem href="/profile" icon={<User color="light-1" />} label="Profile" />
        <NavItem href="/perimeter" icon={<MapLocation color="light-1" />} label="Set Perimeter" />
      </Nav>
    </Sidebar>
  );
};

export default AppSidebar;
