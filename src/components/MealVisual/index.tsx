import styles from "./index.module.scss";

interface MealVisualProps {
  url: string;
}

export default function MealVisual({ url }: MealVisualProps) {
  return (
    <div className={styles.tile} style={{ backgroundImage: `url(${url})` }} />
  );
}
