import ChatRoom from "./ChatRoom";
import Image from "next/image";
import { useState } from "react";
const FloatBtn = () => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-6"
        className="fixed bottom-10 right-10 z-50 rounded-full bg-white hover:bg-blue-100 text-white py-3 px-4 flex items-center justify-center shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        <Image src="/chat-bot.png" width={70} height={70} alt="Chat icon" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-h-[80%] ">
          <h3 className="font-bold text-lg">Hey there! I am here to help.</h3>

          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn relative bottom-16 left-4 btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <ChatRoom />
        </div>
      </div>
    </>
  );
};

export default FloatBtn;
