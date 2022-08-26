import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import notification from '../data/notification';


const ThirdPage = () => {
  return (
      <div className="w-full max-w-md m-auto border px-5 relative h-screen">
        <div className="">

          <div className="flex space-x-3 mt-5 mb-5 items-center"> 
          <IoIosNotifications className="text-green w-9 h-auto" />
          <p className="text-2xl text-primary font-semibold">Notification</p>
          </div>
          <div className="w-6 h-6 bg-green rounded-full absolute right-5"></div>
          {notification.map((notifs) => (
              <div className="w-full p-2" key={notifs.sn}>
                  <div className="flex items-center px-5 space-x-5 bg-[#f4f4f4]">

                <div className="relative">
                    <div className="h-10 w-10 bg-primary rounded-full"></div>
                    <p className="text-white absolute top-3 left-3 font-bold">{notifs.img}</p>
                </div>
                <div className="text-primary w-[80%] p-2">
                    <h2 className="text-xl font-semibold mb-2">{notifs.title}</h2>
                    <p>{notifs.text}</p>
                </div>
                </div>

            </div>
          ))}
          </div>
    </div>

  )
}

export default ThirdPage;