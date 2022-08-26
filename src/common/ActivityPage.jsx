import React from 'react';
import transactions from "../data/activity";


const ActivityPage = () => {
  return (
    <div>
          {transactions.map((item) => (
              <div key={item.sn} className="bg-[#f8f8f8] rounded">
                  <div className="flex justify-between mt-5 p-2">
                      <div className="flex space-x-3 items-center">
                          <div className="" style={{ color: item.color }}
                          >{item?.img}</div>
                          <div className="text-primary">
                              {item?.title}
                              <div className="text-xs text-customGrey">{item.text} <span>{item.date}</span></div>
                          </div>
                      </div>
                      <div className="font-semibold"
                          style={{ color: item.color }}
                      >{item.amount}</div>

                  </div>
              </div>
          ))}

    </div>
  )
}

export default ActivityPage