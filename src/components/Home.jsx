import React from 'react';
import { NAVBAR, PUBLIC } from './pages/ExpoPage';

function Home(props) {
    return (
        <div className='flex flex-col items-center justify-between w-full h-screen gap-1 pt-[6px] px-2 bg-blue-300'>
            <div className='w-full h-[85%] bg-yellow-700 flex items-center justify-between gap-1'>
                <div className='w-[27%] h-full bg-gray-400 rounded-3xl'>

                </div>
                <div className='w-[73%] h-full overflow-auto bg-green-400 flex items-center justify-between flex-col'>
                    <NAVBAR />
                    <PUBLIC />
                </div>
            </div>
            <div className='w-full h-[15%] bg-red-300'></div>
        </div>
    );
}

export default Home;