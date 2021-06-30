import React from 'react';
import SearchBar from './SearchBar/Searchbar';
import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={`${styles.header}`}>
            <SearchBar onSearch={props.onSearch}/>
        </header>
    );
}

export default Header;