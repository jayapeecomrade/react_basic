import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
  <input type="search" placeholder={props.placeholder} className="search-box" onChange={props.handleChange} />
)