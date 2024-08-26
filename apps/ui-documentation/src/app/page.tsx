'use client'
import styles from "./page.module.css";
import Button from '@ui/Button/Button';

export default function Home() {

  function handleClick() {
    console.log('Clicked')
  }

  return (
    <main className={styles.main}>
      UI Documentation
      <hr />
      <Button label={"aceptar"} onClick={handleClick} />
    </main>
  );
}
