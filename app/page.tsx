

"use server";
import React from "react";
import { auth } from "@/auth";
import  SignInButton  from "./components/signinbutton";
import LinkButton from "./components/LinkButton"; // Capitalized import

export default async function Home() {
  return (
    <>
      <SignInButton />
      <LinkButton label="Care Worker Dashboard" link="/caredash" align="start" />
      <LinkButton label="Manager Dashboard" link="/managedash" align="start" />
    </>
  );
}

