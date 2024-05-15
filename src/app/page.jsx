import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Financial Consulting Agency
        </h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque amet, enim sapiente, ab sequi aliquid excepturi unde a non eligendi facere vitae soluta repellendus neque. Obcaecati enim nobis voluptatibus voluptatum!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Get Class!</button>
          <button className={styles.button}>Connect with Me!</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brands}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  )
};

export default Home; 