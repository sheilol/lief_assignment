// components/SignInButton.tsx
"use client";

import { Box, Button } from "grommet";
import { signIn } from "next-auth/react";

type Props = {
  label?: string;
  color?: string;
};

export default function SignInButton({
  label = "Sign In",
  color = "#7D4CDB",
}: Props) {
  return (
    <Box
      direction="row"
      justify="end"
      pad="medium"
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <Button
        size="large"
        primary
        color={color}
        pad={{ horizontal: "large", vertical: "medium" }}
        label={label}
        onClick={() => signIn("google")}
      />
    </Box>
  );
}
