import React from 'react';
import './Linkform.css';

const Linkform = () => {
    return (
        <div className='center br5 shadow-6 mb5'>
            <div className='form pa3 br3 center w-70 shadow-5'>
                <input className='input pa2 br2 w-70 center' type='text'/>
                <button className='f5 b br2 pa2 w-30 mv3 grow'>Shorten It!</button>
            </div>
        </div>
    )
}

export default Linkform;