import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getResponse } from "@/libs/chatbot/chatgpt";
import { BsFillSendFill } from "react-icons/bs";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "hello" },
    { from: "bot", text: "how may I help you?" },
  ]);
  const [userMsg, setUserMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const dummy = useRef();

  useEffect(() => {
    const getChat = async (params: string) => {
      setLoading(true);
      const data = await fetch("api/chatgpt/" + params);
      const res = await data.json();
      console.log(res.name);
      setMessages((prev) => [...prev, { from: "bot", text: res.name }]);
      // @ts-ignore
      dummy.current.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
    };
    if (messages[messages.length - 1].from === "user") {
      getChat(messages[messages.length - 1].text);
    }
    // @ts-ignore
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleClick(event) {
    // @ts-ignore
    dummy.current.scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
    if (userMsg === "") return;
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setUserMsg("");
    // @ts-ignore
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* <h3 className="font-bold text-lg">Hey there! I am here to help.</h3> */}
      <div className="py-4 overflow-scroll max-h-[500px] w-full ">
        {messages.map((message, id) => (
          <div
            key={id}
            className={`chat ${
              message.from === "bot" ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image alt="profile" height={20} width={20} src="/avatar.png" />
              </div>
            </div>
            <div className="chat-header">
              {message.from === "bot" ? "Bot" : "User"}
            </div>
            <div className="chat-bubble">{message.text}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
        <div ref={dummy}></div>
      </div>
      <div className="mt-4 flex justify-around gap-1 ">
        <input
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          type="text"
          maxLength={60}
          placeholder="Type here"
          className="input input-bordered w-full max-w-[25rem]"
        />
        <button
          onClick={handleClick}
          disabled={loading}
          className="btn btn-primary"
        >
          <BsFillSendFill className=" text-lg  rotate-45 " />
        </button>
      </div>
    </>
  );
};

export default ChatRoom;
