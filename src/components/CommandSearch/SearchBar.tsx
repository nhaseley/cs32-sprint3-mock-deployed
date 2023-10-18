import '../../styles/main.css'
import { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
    value: string, 
    setValue: Dispatch<SetStateAction<string>>,
    ariaLabel: string 
  }
  
  // Component that builds the search bar
  export function SearchBar({value, setValue, ariaLabel}: SearchBarProps) {
    return (
      <input type="text" className="search-bar"
            value={value} 
            placeholder="Enter command here!"
            onChange={(ev) => setValue(ev.target.value)}
            aria-label={ariaLabel}>
      </input>
    );
  }