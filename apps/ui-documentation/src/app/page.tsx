'use client'
import Button from '@ui/Button/Button.ui';

export default function Home() {

  function handleClick() {
    console.log('Clicked')
  }

  return (
    <main>
      UI Documentation
      <hr />
      All this is a 'preview' page for the Global styling...
      <Button type={"button"} label={"aceptar"} onClick={handleClick} />
    </main>
  );
}
