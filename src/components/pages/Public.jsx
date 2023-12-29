import React from 'react';
import { BOTTOMPUBLIC, TOPPUBLIC } from './ExpoPage';

function Public(props) {
    return (
        <div className='w-full h-[90%] p-2  overflow-y-auto flex flex-col items-start gap-3 justify-start'>
            <TOPPUBLIC />
            <BOTTOMPUBLIC />

        </div>
    );
}

export default Public;