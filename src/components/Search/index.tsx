import { useState } from "react";
import styles from "./index.module.scss";

interface SearchProps {
  onSearch: (query: string) => void;
  formClassOverride?: string;
  inputClassOverride?: string;
  buttonClassOverride?: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, formClassOverride, inputClassOverride, buttonClassOverride }) => {
  const [query, setQuery] = useState("");

  // Override base styling if provided
  const formStyles = formClassOverride ? `${styles.form} ${formClassOverride}` : styles.form;
  const inputStyles = inputClassOverride ? `${styles.input} ${inputClassOverride}` : styles.input;
  const buttonStyles = buttonClassOverride ? `${styles.button} ${buttonClassOverride}` : styles.button;

  // TODO: store last query in session storage -> browser navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={formStyles}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className={inputStyles}
        />
        {/* Button should be disabled, when query is empty */}
        <button type="submit" className={buttonStyles}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search
