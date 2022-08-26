import React from 'react';
import cards from '../data/cards';


const SecondPageCards = () => {
  return (
    <div>

          <div className=" mt-12 px-7">
              <div className=" container-snap w-full flex overflow-auto gap-4">
                  {cards.map((card) => (
                      <div className="bg-[#f4f4f4] rounded p-4 " key={card.sn}>
                          <div className="w-64 flex justify-between items-center">

                              <div className="flex flex-col">
                                  <h2>{card.item}</h2>
                                  <h1 className="text-primary font-bold text-2xl">{card.amount}</h1>
                                  <p className="text-CardGrey">{card.text}</p>
                              </div>
                              <div>
                                  <p className="text-[#c0dedd] font-bold">{card.date}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>

          <div className=" mt-5 px-7 mb-14">
              <div className=" container-snap w-full flex overflow-auto gap-4">
                  {cards.map((card) => (
                      <div className="bg-[#f4f4f4] rounded p-4 " key={card.sn}>
                          <div className="w-64 flex justify-between items-center">

                              <div className="flex flex-col">
                                  <h2>{card.item2}</h2>
                                  <h1 className="text-primary font-bold text-2xl">{card.amount}</h1>
                                  <p className="text-CardGrey">{card.text}</p>
                              </div>
                              <div>
                                  <p className="text-[#c0dedd] font-bold">{card.date2}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>
    </div>
  )
}

export default SecondPageCards