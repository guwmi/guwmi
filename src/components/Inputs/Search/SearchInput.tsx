// import library functionality
import React from 'react';

// import components
import { IconSearch } from '@tabler/icons-react';

// component type
interface ComponentProps {
  placeholder?: string;
}

export default function SearchInput(props: ComponentProps) {

  const { placeholder } = props;

  return (
    <div className="guwmi-search-input">
      <span><IconSearch size={18} /></span>
      <input
        type="search"
        placeholder={placeholder ? placeholder : 'Search...'}
      />
    </div>
  )
}