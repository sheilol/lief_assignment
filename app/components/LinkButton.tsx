// components/Button.tsx
"use client";

import { Box, Button } from "grommet";
import Link from "next/link";

type Props = {
  label: string;
  link: string;
  align?: "start" | "center" | "end"; // default: center
  color?: string; // optional custom color
};

export default function LinkButton({ label, link, align = "center", color = "#7D4CDB" }: Props) {
  return (
    <Box align={align} pad="medium">
      <Link href={link} passHref>
        <Button
          size="large"
          primary
          color={color}
          pad={{ horizontal: "large", vertical: "medium" }}
          label={label}
        />
      </Link>
    </Box>
  );
}
