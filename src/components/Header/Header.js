import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <input
                    className={styles.input}
                    type="text" placeholder="Szukaj..."/>
                <button>Szukaj</button>
            </div>
        </header>
    );
}

export default Header;