"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import UserService from "@/services/userService";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // UserService.createUser({
    //     name: "cardona",
    //     document_number: 123456789,
    //     email: "testNew@example.com",
    //     password: "dasdas",
    //     birthdate: "2000-01-01",
    //     cellphone: "123456789",
    //     zip_code: "123456",
    //     address: "calle 123",
    //     type_document_id: 1,
    //     country_id: 1,
    //     role_id: 2
    //   })
    //   .then((user) => console.log(user));
    // UserService.getAllUsers().then((user) => console.log(user));
    // UserService.updateUser("93b9",
    //   {name: "cardona",
    //     document_number: 123456789,
    //     email: "testUpdate@example.com",
    //     password: "testUpdate",
    //     birthdate: "2000-01-01",
    //     cellphone: "123456789",
    //     zip_code: "123456",
    //     address: "calle 123",
    //     type_document_id: 1,
    //     country_id: 1,
    //     role_id: 2
    //   }
    // )

    // UserService.updatePassword("testUpdateds", "061d").then((user) => console.log(user));
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
