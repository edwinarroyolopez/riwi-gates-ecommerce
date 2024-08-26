"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Link from "next/link";
import {UserService} from "@/services/userService";
import { ProductService } from "@/services/productService";


export default function Home() {
  useEffect(() => {
    const productService = new ProductService();
    productService.postProduct({
      name: "test",
      description: "test",
      price: 123,
      stock: 123,
      sizes: [{
        name: "s"
      }],
      thumbnail: "ds.com",
      images: [{
        url: "dasda.com"
      }],
      categories: [],
    }).then((res)=>console.log(res))
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
