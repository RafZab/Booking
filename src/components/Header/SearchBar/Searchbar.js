import React ,{ useState } from 'react';

function SearchBar() {
    const [term, setTerm] = useState('')

    const search = () => {
        console.log('szukaj!', term)
    }

    return (
        <div className="d-flex">
            <input
                value={term}
                onKeyDown={e => e.key === 'Enter' && search()}
                onChange={e => setTerm(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Szukaj..." />
            <button
                style={{
                    marginLeft: '2px'
                }}
                className="btn btn-secondary"
                onClick={search}>Szukaj</button>
        </div>
    );
}

export default SearchBar;