import { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import { IGame } from "../../../game/models/interfaces";
import FeaturedGame from "../featuredGame/featuredGame";
interface HeroProps {
  featuredGame: IGame;
}

const images = ["/hero-image-1.jpg", "/hero-image-2.jpg", "/hero-image-3.jpg"];

const Hero = ({ featuredGame }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className={styles.heroContainer}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Gameport</h1>
          <p className={styles.heroDescription}>
            Discover the latest and greatest games, reviews, and more!
          </p>
        </div>
      </div>
      <FeaturedGame game={featuredGame} />
    </>
  );
};
export default Hero;
