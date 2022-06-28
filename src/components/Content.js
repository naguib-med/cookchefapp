import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { useState } from "react";

function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container">
      <h1 className="my-30">Décrouvrez nos nouvelles recettes</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i class="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill "
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
