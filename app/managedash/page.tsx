"use client";

import React, { useState } from "react";
import { Grommet, Box, Button, Nav, Sidebar, Heading, Text } from "grommet";
import { MapLocation, BarChart, Tasks } from "grommet-icons";
import  SetLocationPerimeter  from "../components/SetLocationPerimeter";

const theme = {
  global: {
    colors: {
      brand: "#7D4CDB",
    },
  },
};



const ViewAnalytics = () => (
  <Box pad="medium">
    <Heading level={3}>Analytics Dashboard</Heading>
    <Text>Avg hours clocked in, daily counts, weekly totals...</Text>
    {/* TODO: Add charts & tables here */}
  </Box>
);

const AssignTasks = () => (
  <Box pad="medium">
    <Heading level={3}>Assign Tasks</Heading>
    <Text>Create and assign tasks to staff members.</Text>
    {/* TODO: Add task form & staff selection */}
  </Box>
);

export default function DashboardPage() {
  const [active, setActive] = useState("perimeter");

  const renderContent = () => {
    switch (active) {
      case "perimeter":
        return <SetLocationPerimeter />;
      case "analytics":
        return <ViewAnalytics />;
      case "tasks":
        return <AssignTasks />;
      default:
        return null;
    }
  };

  return (
    <Grommet full theme={theme}>
      <Box direction="row" fill>
        {/* Sidebar */}
        <Sidebar
          background="brand"
          header={<Heading level={3} margin="small">Manager</Heading>}
          pad={{ vertical: "medium", horizontal: "small" }}
        >
          <Nav gap="small">
            <Button
              icon={<MapLocation />}
              label="Set Perimeter"
              onClick={() => setActive("perimeter")}
              plain
            />
            <Button
              icon={<BarChart />}
              label="View Analytics"
              onClick={() => setActive("analytics")}
              plain
            />
            <Button
              icon={<Tasks />}
              label="Assign Tasks"
              onClick={() => setActive("tasks")}
              plain
            />
          </Nav>
        </Sidebar>

        {/* Main Content */}
        <Box flex pad="medium" overflow="auto">
          {renderContent()}
        </Box>
      </Box>
    </Grommet>
  );
}
