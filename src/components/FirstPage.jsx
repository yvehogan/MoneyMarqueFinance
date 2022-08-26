import React from "react";
import { BsHeadset, BsCalendarEvent } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import Button from "../common/button";
import HompageCard from "../common/HompageCard";
import ActivityPage from "../common/ActivityPage";

const FirstPage = () => {
    return (
        <div className="w-full max-w-md px-5 m-auto border">
            <div className="mb-10">
                <section className="flex justify-between mt-5">
                    <div>
                        <h2 className="text-primary font-bold text-lg">Yo! Michael</h2>
                        <div className="flex gap-2 mt-1">
                            <div className="w-8 h-2 rounded bg-primary"></div>
                            <div className="w-3 h-2 rounded bg-lightBlue"></div>
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <BsHeadset className="w-5 h-auto text-customGrey" />
                        <IoIosNotifications className="w-5 h-auto text-green" />
                    </div>
                </section>

                <div className="bg-gradient-to-r from-primary to-secondary rounded mt-10 p-10 text-white">
                    <h3 className="mt-20 mb-2">KWIKEE CARD BALANCE</h3>
                    <h1 className="text-5xl">N 300,782</h1>
                    <Button
                        className=" text-sm font-bold rounded mt-5"
                        paddingY="p-2"
                        bgColor="bg-green"
                    >
                        WITHDRAW
                    </Button>
                </div>
                <HompageCard />

                <div className="text-primary flex justify-between mt-5">
                    <div className="flex items-center gap-5"><FaLocationArrow /> Activity</div>
                    <BsCalendarEvent />
                </div>
                <ActivityPage />
            </div>
        </div>
    );
};

export default FirstPage;