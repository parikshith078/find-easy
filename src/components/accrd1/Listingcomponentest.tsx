import React, { MouseEventHandler, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { TbLocationFilled } from "react-icons/tb";
import { BsCameraFill } from "react-icons/bs";
// import Maps from '../map/Maps';

function Rentprop(props: any) {
  interface Rentprop {
    address: string;
    pincode: string;
    price: string;
    frontview: string;
    rooms: number;
    photo: any;
  }
  const [rentprop, setRentprop] = useState<Rentprop>({
    address: "",
    pincode: "",
    price: "",
    frontview: "",
    rooms: 0,
    photo: "",
  });

  const [uploadImg, setUploadImg] = useState(null);

  function handelchange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setRentprop((preRentprop) => {
      return {
        ...preRentprop,
        [name]: value,
      };
    });
  }

  // const submitrentprop: MouseEventHandler<HTMLInputElement> = (event) => {
  //   // console.log("rentprop");
  //   event.preventDefault();
  // };
  return (
    <div className="collapse collapse-arrow border border-base-300 transition-[2s] bg-base-100 rounded-box">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-base-100  ">
        <h1>RENT YOUR PROPERTY</h1>
      </div>
      <div className="collapse-content transition-[2s] bg-base-100 ">
        {/* //property address info  */}
        <h2 className="flex bg-base-100 mt-4">
          <BiCurrentLocation className="mt-1 mr-2" />
          Property Address :{" "}
        </h2>
        <input
          type="text"
          value={rentprop.address}
          required
          className="w-[100%] ml-2 border-b-[2px] border-[#7E7878] bg-base-100"
          name="address"
          onChange={handelchange}
        />

        {/* //pincode of propety  */}
        <h2 className="flex mt-8">
          <TbLocationFilled className="mt-1 mr-2" />
          Pincode :{" "}
        </h2>
        <input
          type="number"
          value={rentprop.pincode}
          required
          className="w-[30%] ml-2 border-b-[2px] border-[#7E7878] bg-base-100"
          name="pincode"
          onChange={handelchange}
        />

        {/* //price of propety */}
        <h2 className="flex bg-base-100 mt-8">
          {" "}
          <BiCurrentLocation className="mt-1 mr-2" />
          Price :{" "}
        </h2>
        <input
          type="number"
          value={rentprop.price}
          required
          className="w-[100%] ml-2 border-b-[2px] border-[#7E7878] bg-base-100"
          name="price"
          onChange={handelchange}
        />
        <h2 className="flex bg-base-100 mt-8">
          {" "}
          <BiCurrentLocation className="mt-1 mr-2" />
          Rooms :{" "}
        </h2>
        <input
          type="number"
          value={rentprop.rooms}
          required
          className="w-[100%] ml-2 border-b-[2px] border-[#7E7878] bg-base-100"
          name="rooms"
          onChange={handelchange}
        />

        {/* //property view  */}
        <h2 className=" flex mt-8 bg-base-100">
          {" "}
          <BsCameraFill className=" mt-1 mr-2" />
          Front view of Property :{" "}
        </h2>
        <div className="flex bg-base-100">
          <input
            type="text"
            value={rentprop.frontview}
            placeholder="Description"
            className=" bg-base-100 h-20 px-2 ml-2 w-[100%]  mt-4 border-[2px] mr-0 border-[#7E7878] flex rounded-lg "
            name="frontview"
            onChange={handelchange}
          />
          <input
            type="file"
            accept=".jpg"
            onChange={(e) => setUploadImg(e.target.files[0])}
            className="ml-4 mt-[65px] bg-base-100"
            name="photo"
          />
        </div>
        <div>
          <button
            onClick={() => {
              props.onAdd(rentprop, uploadImg);
              setRentprop({
                address: "",
                pincode: "",
                price: "",
                frontview: "",
                photo: "",
                rooms: 0,
              });
              setUploadImg(null);
            }}
            className="ml-[500px] font-extrabold mt-10"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rentprop;
