"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import {UserService} from "@/services/userService";
import { ProductService } from "@/services/productService";


export default function Home() {
  return (
    <main className={styles.main}>
       <div>
      <h1>pagina de inicio</h1>
      <Link href="/login">Go to Login</Link>
    </div>
    </main>
  );
}
