import React from 'react';
import { IMGPUBLICBOTTOM } from '../../img/exportImg';

function BottomPublicContent(props) {
    return (
        <div className='flex flex-col items-start justify-start w-full gap-2 text-white min-h-max'>
            <div className='flex items-center justify-between w-full align-baselin min-h-max '>
                <h2 className='text-[29px] font-bold tracking-wide'>Shows you might like</h2>
                <button className='text-[15px] font-bold tracking-wide'>SEE ALL</button>
            </div>
            <div className='w-full min-h-[410px] flex items-start tablet:justify-start minMobil:justify-center align-baseline gap-3 py-2'>
                <div className='max-w-[250px] min-h-[250px] bg-[#181818] flex flex-col gap-2 cursor-pointer'>
                    <div className='w-full h-[190px]  p-2 '>
                        <img className='w-full h-full rounded-2xl' src={IMGPUBLICBOTTOM} alt="" />
                    </div>
                    <div className='px-2'>
                        <p className='text-[18px] font-bold leading-8 tracking-widest'>Weekly Motivatio...</p>
                        <p className='text-[14px] text-[#B3B3B3] font-bold leading-3 tracking-wide'>Ben Ina Scott</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomPublicContent;