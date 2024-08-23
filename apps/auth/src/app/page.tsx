"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import {UserService} from "@/services/userService";


export default function Home() {
  useEffect(() => {
    // UserService.getUsers().then((user) => console.log(user));
    UserService.getUserById(1).then((user) => console.log(user));
  }, []);
  return (
    <main className={styles.main}>
       <div>
      <h1>pagina de inicio</h1>
      <Link href="/login">Go to Login</Link>
    </div>
    </main>
  );
}
