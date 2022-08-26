import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsEyeSlash } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';
import { ImPlus } from 'react-icons/im';
import Button from '../common/button';
import SecondPageCards from '../common/SecondPageCards';

const SecondPage = () => {
    return (
        <div className="w-full max-w-md m-auto border">
            <div className="bg-gradient-to-r from-secondary to-primary text-white p-7">
                <h3 className="flex items-center gap-2">KWIK LITE <span> <BiTimeFive /> </span></h3>
                <div className="flex justify-between items-center">
                    <div className="flex items-end space-x-5">
                        <h1 className="text-5xl">N 300,782 </h1>
                        <BsEyeSlash />
                    </div>
                    <ImPlus className="w-8 h-auto" />
                </div>
            </div>
            <section className="px-7 mt-14">
                <h2 className="mb-4">FUND KWILITE</h2>
                <p className="text-sm text-customGrey">Your Kwilite is directly connected to a bank account which could be funded
                    using the above Wema Bank Account Number.
                </p>
                <div className="mt-5 flex justify-between items-center">
                    <h1 className="text-primary font-semibold">WEMA BANK</h1>
                    <Button
                        className=" text-sm rounded mt-5"
                        paddingY="p-2"
                        bgColor="bg-primary"
                    >
                        <MdContentCopy className="mr-3" />
                        7851472891
                    </Button>
                </div>
            </section>
            <SecondPageCards />




        </div>
    )
}

export default SecondPage