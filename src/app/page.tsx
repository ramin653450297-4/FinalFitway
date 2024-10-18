"use client";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Home() {
  const searchParams = useSearchParams(); // ดึงข้อมูลจาก query
  const email = searchParams.get('email');
  if(email){
    return (
      <>
        <div className={styles.page}>HomePage</div>
        <p>Welcome to Home Page</p> 
        {email && <p>Logged in as: {email}</p>} 
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