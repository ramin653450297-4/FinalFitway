"use client";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { data: session } = useSession(); 
  console.log('Session:', session); 

  if (session) {
    const email = session.user?.email; 
    return (
      <>
        <div className={styles.page}>HomePage</div>
        <p>Welcome, {email}</p> 
        <Button variant="contained" onClick={() => signOut()}>
          Logout
        </Button>
      </>
    );
  } else {
    // User is not logged in
    return (
      <>
        <div className={styles.page}>
          <p>You are not logged in</p>
          <Link href="/register">
            <Button variant="contained">Register</Button>
          </Link>
          <Link href="/login">
            <Button variant="contained">Login</Button>
          </Link>
        </div>
      </>
    );
  }
}