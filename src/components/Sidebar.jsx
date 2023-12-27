import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SPOTIFYLOGO } from '../img/exportImg';
import { FaHome, FaSearch } from 'react-icons/fa'
import { LuLibrary } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";


function Sidebar(props) {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-between w-full h-full '>
            <div className='flex flex-col items-start justify-start w-[100%] mi-h-max bg-[rgba(53,52,52,0.5)] rounded-t-lg rounded-b-lg gap-3 p-3 '>
                <label className='w-full cursor-pointer min-h-max '>
                    <img onClick={() => { navigate('/user') }} width={150} src={SPOTIFYLOGO} alt="#" />
                </label>
                <Link to={{}} className='flex items-end justify-start w-full gap-2 bg-black text-white align-baseline p-[10px] rounded-xl min-h-max no-underline'><FaHome size={25} />Home</Link>
                <Link to={{}} className='flex items-end justify-start w-full gap-2 active:bg-black text-white align-baseline p-[10px] rounded-xl min-h-max no-underline'><FaSearch size={25} />Search</Link>
                <Link to={{}} className='flex items-end justify-start w-full gap-2 active:bg-black text-white align-baseline p-[10px] rounded-xl min-h-max no-underline'><LuLibrary size={25} />Your Library</Link>
            </div>
            <div className='flex flex-col items-start justify-start w-[100%] mi-h-max bg-[rgba(53,52,52,0.5)] rounded-b-3xl rounded-t-lg gap-3 p-3'>

                <Link to={{}} className='flex items-end justify-start w-full gap-3 no-underline active:bg-black text-white align-baseline p-[10px] text-[17px] font-medium rounded-xl min-h-max '><IoMdExit size={25} />Exit</Link>
            </div>


        </div>
    );
}

export default Sidebar;