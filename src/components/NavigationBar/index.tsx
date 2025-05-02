import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function NavigationBar() {
  console.log("### NavigationBar");
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/my-recipes">
        My Recipes
      </Link>
    </div>
  );
}
