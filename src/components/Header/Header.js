import React from 'react';
import SearchBar from './SearchBar/Searchbar';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={`${styles.header}`}>
            <SearchBar />
        </header>
    );
}

export default Header;