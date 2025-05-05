// import library functionality
import React, { useId } from 'react';

// import components
import { IconSearch } from '@tabler/icons-react';

// component type
interface ComponentProps {
  placeholder?: string;
}

export default function SearchInput(props: ComponentProps) {

  const { placeholder } = props;
  const id = useId();

  return (
    <div className="guwmi-search-input">
      <span><IconSearch size={18} /></span>
      <label htmlFor={id} className="guwmi-sr-only">Search</label>
      <input id={id} type="search" placeholder={placeholder ? placeholder : 'Search...'} />
    </div>
  )
}