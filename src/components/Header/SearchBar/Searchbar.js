import React ,{ useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function SearchBar(props) {
    const [term, setTerm] = useState('')

    const search = () => {
        props.onSearch(term)
    }

    return (
        <div className="d-flex">
            <input
                value={term}
                onKeyDown={e => e.key === 'Enter' && props.onSearch(term)}
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

SearchBar.propTypes = propTypes;

export default SearchBar;