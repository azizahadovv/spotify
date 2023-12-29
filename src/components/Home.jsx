import React, { useEffect, useState } from 'react';
import { NAVBAR, PLAYING, PUBLIC, SIDEBAR } from './pages/ExpoPage';
// import axios from 'axios'
// import { API_URL } from '../db/apis'




function Home(props) {

    return (
        <div className='flex flex-col items-center justify-between w-full h-screen gap-1 pt-[6px] px-2 bg-[#000]'>
            <div className='w-full h-[85%] flex items-center justify-between gap-1'>
                <div className='w-[29%] h-full bg-[#000] rounded-lg p-[2px]'>
                    <SIDEBAR />
                    {/* <audio controls src="https://p.scdn.co/mp3-preview/1d53b96abb564f9ba08427c3c5361dd8fbe72f7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d"></audio> */}

                </div>
                <div className='w-[73%] h-full overflow-auto bgcolorfon  flex items-center justify-between flex-col relative'>
                    <NAVBAR />
                    <PUBLIC />
                </div>
            </div>
            <div className='w-full h-[15%] bg-red-300'>
                <PLAYING />
            </div>
        </div>
    );
}

export default Home;