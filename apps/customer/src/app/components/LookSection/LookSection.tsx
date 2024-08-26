import React from 'react';
import styles from '../LookSection/styles/LookSection.module.scss';

const LookSection = () => {
  return (
    <div className={styles.container}>
      <h1>Get the look</h1>
      <h2>#BERSHKASTYLE</h2>
      <div className={styles.looks}>
        <div className={styles.look}>
          <img src="https://static.bershka.net/4/static/images/bershkastyle/style_chica_casual.jpg?2008&t=20240822020708&imwidth=750&impolicy=bershka-itxhigh" alt="Summer Vibes" />
          <p>Summer Vibes</p>
        </div>
        <div className={styles.look}>
          <img src="https://static.bershka.net/4/static/images/bershkastyle/style_chica_casual.jpg?2008&t=20240822020708&imwidth=750&impolicy=bershka-itxhigh" alt="Denim" />
          <p>Denim</p>
        </div>
        <div className={styles.look}>
          <img src="https://static.bershka.net/4/static/images/bershkastyle/style_chica_denim.jpg?2008&t=20240822020707&imwidth=750&impolicy=bershka-itxhigh" alt="Streetwear" />
          <p>Streetwear</p>
        </div>
        <div className={styles.look}>
          <img src="https://static.bershka.net/4/static/images/bershkastyle/style_chica_casual.jpg?2008&t=20240822020708&imwidth=750&impolicy=bershka-itxhigh" alt="Casual" />
          <p>Casual</p>
        </div>
      </div>
      <button className={styles.button}>VER TODOS LOS ESTILOS</button>
    </div>
  );
};

export default LookSection;
