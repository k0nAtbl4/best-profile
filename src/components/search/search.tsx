import { useState } from "react";
import "./search.css"






function Search() {

    const [searchText, setSearchText] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
    }
    return (
        <div className="Search">
            <input onChange={
                (element) => {
                    handleChange(element);
                }
            }
                className="SearchInpurt"
                placeholder="Search" />
            <h1>
                {searchText}
            </h1>
        </div>
    );
}

export default Search;