import React from 'react';

function SearchBar() {
    return (
        <div className="d-flex">
            <input
                className="form-control"
                type="text"
                placeholder="Szukaj..." />
            <button
                style={{
                    marginLeft: '2px'
                }}
                className="btn btn-secondary">Szukaj</button>
        </div>
    );
}

export default SearchBar;