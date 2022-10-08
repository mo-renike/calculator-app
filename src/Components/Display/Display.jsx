import React from 'react';

const Display = ({ input, output }) => {


    return (
        <div className='display'>
            {/* build calculator display */}
            <div className="display__output">
                {output}
            </div>
            <div className="display__input">
                {input}
            </div>
        </div>
    )
}

export default Display;