import ChatRoom from "./ChatRoom";
const FloatBtn = () => {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-6"
        className="btn fixed bottom-10 z-50 right-10 "
      >
        Chat
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-h-[80%] ">
          <ChatRoom />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatBtn;
