import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getResponse } from "@/libs/chatbot/chatgpt";

const ChatRoom = () => {
  // const [messages, setMessages] = useState<Message>({
  //   botMsgs: ["hello"],
  //   userMsgs: [". . ."],
  // });

  const [botMsgs, setBotMsgs] = useState(["hello"]);
  const [userMsgs, setUserMsgs] = useState([". . ."]);

  const [userMsg, setUserMsg] = useState("");

  const dummy = useRef();

  useEffect(() => {
    const getChat = async (params: string) => {
      const data = await fetch("api/chatgpt/" + params);
      const res = await data.json();
      console.log(res.name);
      setBotMsgs((prev) => [...prev, res.name]);
    };
    if (userMsgs.length > 1) {
      getChat(userMsgs[userMsgs.length - 1]);
    }
  }, [userMsgs]);

  function handelClick(event) {
    event.preventDefault();
    if (userMsg === "") return;
    setUserMsgs((prev) => [...prev, userMsg]);
    setUserMsg("");
  }

  return (
    <>
      <h3 className="font-bold text-lg  ">Hey there! I am here to help.</h3>
      <p className="py-4 overflow-scroll max-h-[300px] ">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="profile" height={20} width={20} src="/avatar.png" />
            </div>
          </div>
          <div className="chat-header">Bot</div>

          {botMsgs.map((msg, id) => (
            <div key={id} className="chat-bubble">
              {msg}
            </div>
          ))}
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image alt="profile" height={20} width={20} src="/avatar.png" />
            </div>
          </div>
          <div className="chat-header">
            {/* TODO: add username below */}
            User
          </div>
          {userMsgs.map((msg, id) => (
            <div key={id} className="chat-bubble">
              {msg}
            </div>
          ))}
          <div ref={dummy}></div>
        </div>
      </p>
      <div className="mt-4">
        <input
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          type="text"
          maxLength={60}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handelClick} className="btn btn-primary">
          Send
        </button>
      </div>
    </>
  );
};

export default ChatRoom;
