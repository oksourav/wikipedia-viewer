import React from 'react';

const Random = props => {
    return (
        <div className="random-article" onClick={e => props.randomSearch()}>Get Random Article</div>
    );
};

export default Random;