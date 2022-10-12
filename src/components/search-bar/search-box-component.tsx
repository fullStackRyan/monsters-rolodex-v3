import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps ) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
