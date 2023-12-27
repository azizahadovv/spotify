import React, { useEffect, useState } from 'react';
import { NAVBAR, PUBLIC, SIDEBAR } from './pages/ExpoPage';
import axios from 'axios'
import { API_URL } from '../db/apis'




function Home(props) {
    const [search, setSearch] = useState()
    console.log(search);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/tracks/',
            params: {
                ids: '4WNcduiCmDNfmTEz7JvmLv'
            },
            headers: {
                'X-RapidAPI-Key': '37b2e4684amsh054bbdab5794b7dp16fe44jsn034e26a3e436',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        }).then((res) => {
            setSearch(res.data)
        }).catch((err) => console.log(err.message))
    }, [])



    return (
        <div className='flex flex-col items-center justify-between w-full h-screen gap-1 pt-[6px] px-2 bg-[#000]'>
            <div className='w-full h-[85%] flex items-center justify-between gap-1'>
                <div className='w-[29%] h-full bg-[#000] rounded-lg p-[2px]'>
                    <SIDEBAR />
                    <audio controls src="https://p.scdn.co/mp3-preview/1d53b96abb564f9ba08427c3c5361dd8fbe72f7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d"></audio>

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