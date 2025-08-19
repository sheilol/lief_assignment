// components/SignOutButton.tsx
"use client";

import { Box, Button } from "grommet";
import { signOut } from "next-auth/react";

type Props = {
  label?: string;
  align?: "start" | "center" | "end";
  color?: string;
};

export default function SignOutButton({ 
  label = "Sign Out", 
  align = "center", 
  color = "#D9534F"  // red-ish default for sign out
}: Props) {
  return (
    <Box align={align} pad="medium">
      <Button
        size="large"
        primary
        color={color}
        pad={{ horizontal: "large", vertical: "medium" }}
        label={label}
        onClick={() => signOut()}
      />
    </Box>
  );
}
