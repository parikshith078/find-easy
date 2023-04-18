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
