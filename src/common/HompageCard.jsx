import React from 'react';
import { BsCash } from 'react-icons/bs';
import { SiCircleci } from 'react-icons/si';



const HompageCard = () => {
    return (
        <section className="flex gap-5 mt-8">
            <div className="w-1/2 bg-CardGrey p-5 rounded">
                <div className="flex items-center gap-3">
                    <SiCircleci className="text-secondary" /> <span>Goals</span>
                </div>
                <div className="flex flex-col text-customGrey">
                    Vehicle <span className="text-2xl font-semibold text-primary">N300,782</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '30%' }}></div>
                </div>
                <p className="mt-2 text-customGrey text-xs">Matures in 310 days</p>

            </div>
            <div className="w-1/2 bg-CardGrey p-5 rounded flex flex-col justify-between relative">
                <div className="bg-primary rounded-full h-10 w-10">
                </div>
                <BsCash className="text-white m-auto w-6 h-auto absolute left-7 top-7" />
                <span className="text-primary">Apply for Credit</span>
                <p className="text-xs text-customGrey">Reach your goals quicker and easier with savings and investment with Kwikee</p>

            </div>
        </section>
    )
}

export default HompageCard