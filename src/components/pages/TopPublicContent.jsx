import React from 'react';
import { IMGPUBLICTOP } from '../../img/exportImg';

function TopPublicContent(props) {
    return (
        <div className='w-full mt-[65px] min-h-max'>
            <h1 className='text-[32px] font-bold text-white -tracking-[1.15]'>Good morning "name"</h1>
            <div className='w-full py-2 min-h-24 '>
                <div className='tablet:max-w-[300px] minMobil:max-w-[150px] min-h-[100px] bg-[#303030] flex minMobil:flex-col tablet:flex-row items-center gap-2 rounded-md cursor-pointer'>
                    <div className='minMobil:w-[150px] tablet:w-[100px] minMobil:h-[50%] tablet:h-full '><img className='w-full h-full minMobil:rounded-md tablet:rounded-l-md' src={IMGPUBLICTOP} alt="IMGPUBLICTOP" /></div>
                    <div className='minMobil:w-[150px] tablet:w-[190px] minMobil:h-[50%] tablet:h-full'><p className='font-bold tracking-wide text-white '>Neffex Playlist</p></div>
                </div>
            </div>
        </div>
    );
}

export default TopPublicContent;