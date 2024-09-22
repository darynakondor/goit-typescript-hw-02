import { useRef } from "react";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
  notify: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, notify }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInputValue = inputRef.current?.value ?? "";
    onSubmit(searchInputValue);
    if (searchInputValue === "") notify();
  };

  return (
    <header className={style.header}>
      <div className="container">
        <form onSubmit={handleSubmit} className={style.headerForm}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={style.inp}
            name="searchInput"
            ref={inputRef}
          />
          <button type="submit" className={style.btn}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
