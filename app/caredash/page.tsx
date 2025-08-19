"use client";

import React, { useState } from "react";
import { Grommet, Box, Button, Nav, Sidebar, Heading, Text } from "grommet";
import { MapLocation, BarChart, Tasks, Clock } from "grommet-icons";
import { Clock as GrommetClock } from "grommet";
const theme = {
  global: {
    colors: {
      brand: "#7D4CDB",
    },
  },
};

const Clockin = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box pad="medium" fill>
      <Box direction="row" justify="end" align="center" margin={{ bottom: "small" }} gap="small">
        <Text>{dateString}</Text>
        <GrommetClock type="digital" precision="seconds" />
      </Box>
      <Heading level={3}>Clock</Heading>
      <Text>Clock in or clockout</Text>
      <Button label="Clock In" primary />
      <Button label="Clock Out" secondary />  
      {/* TODO: Add map & radius selection UI */}
    </Box>
  );
};
// ...existing code...



const ViewTasks = () => (
  <Box pad="medium">
    <Heading level={3}>Assign Tasks</Heading>
    <Text>Create and assign tasks to staff members.</Text>
    {/* TODO: Add task form & staff selection */}
  </Box>
);

export default function DashboardPage() {
  const [active, setActive] = useState("Clockin");

  const renderContent = () => {
    switch (active) {
      case "Clockin":
        return <Clockin />;
          case "tasks":
        return <ViewTasks />;
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
          header={<Heading level={3} margin="small">Care Worker</Heading>}
          pad={{ vertical: "medium", horizontal: "small" }}
        >
          <Nav gap="small">
            <Button
              icon={<Clock />}
              label="Clockin"
              onClick={() => setActive("Clockin")}
              plain
            />
            <Button
              icon={<Tasks />}
              label="View Tasks"
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
