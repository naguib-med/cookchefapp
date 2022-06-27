import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";

function Content() {
  const recipes = data;
  return (
    <div className="flex-fill container">
      <h1 className="my-30">Décrouvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes.map((r) => (
            <Recipe title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
