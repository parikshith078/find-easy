import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { MdIosShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Product: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-[200vh] h-[80vh] overflow-hidden relative">
                <Image
                  src="/assets/house.jpg"
                  fill
                  className="object-cover w-full"
                  alt="Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-[200vh] h-[80vh] overflow-hidden relative">
                <Image
                  src="/assets/home.jpg"
                  fill
                  className="object-cover w-full"
                  alt="Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-[200vh] h-[80vh] overflow-hidden relative">
                <Image
                  src="/assets/kit.jpg"
                  fill
                  className="object-cover w-full"
                  alt="Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div className="w-[200vh] h-[80vh] overflow-hidden relative">
                <Image
                  src="/assets/Liv.jpg"
                  fill
                  className="object-cover w-full"
                  alt="Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20">
            <div className="text-center lg:text-left grid gap-y-0 grid-row-3 pl-10 pr-20">
              <ul className="flex gap-10 font-light text-sm">
                <li>
                  <span className="inline-flex items-center gap-2">
                    <h1 className="text-3xl font-bold font-medium ">
                      Modern Flats and Apartments
                    </h1>
                  </span>
                </li>
                <li className="pl-6">
                  <span className="inline-flex items-center gap-2 ">
                    {/* <div className="flex items-center justify-center gap-4"> */}
                    <div className="flex items-center justify-center gap-4">
                      <AiOutlineHeart className="text-black-500 hover:text-gray-500 h-8 w-8" />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <MdIosShare className="text-black-500 hover:text-gray-500 h-8 w-8" />
                    </div>
                    {/* </div> */}
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-italic font-normal">₹ 1.4 cr </h2>
              <h2 className="text-1xl font-italic font-light">
                3 Bedroom | 2000 sq feet{" "}
              </h2>
              <h1 className="text-lg font-italic font-medium ">
                <span>Andheri, Mumbai, India-400414</span>
              </h1>
              <div className="flex justify-between mt-6">
                <button className="bg-primary rounded-full flex-5 hover:bg-primary-active cursor-pointer flex justify-center items-center shadow-inner gap-10 px-20 py-3 ">
                  <p className="font-bold">Request a tour</p>
                </button>
                <button className="bg-primary rounded-full flex-5 hover:bg-primary-active cursor-pointer flex justify-center items-center shadow-inner gap-10 px-20 py-3 ">
                  <p className="font-bold">
                    <Link href="#footer">Contact Agent</Link>
                  </p>
                </button>
              </div>

              <h1 className="text-2xl font-bold pt-6 ">About this property</h1>
              <p className="py-6">
                Best 3 BHK Independent House for modern-day lifestyle is now
                available for sale. Grab this 3 BHK property for sale in one of
                Bengaluru top location, Attibele. The property price of this
                unit is Rs 1.4 Cr. Monthly maintenance costs Rs 2000. The
                built-up area is 2220 Square feet. There are 3 bedrooms and 3
                bathroom.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form action="/sendMessage" method="post">
        <div className="pb-20">
          <div className=" flex justify-between gap-14 w-full lg:flex-row md:flex-row xs:flex-col-reverse ">
            <div className=" lg:block md:block sm:hidden xs:hidden w-full">
              {" "}
            </div>
            <div className=" flex-col w-[50%] flex gap-2 pt-10 ">
              <div className="form-control w-full max-w-xs"></div>
              <p className=" text-lg font-semibold">Contact</p>
              <div className=" flex gap-1 h-10  sm:flex-wrap ">
                <input
                  className="w-[70%] lg:w-[60%] border-solid rounded-sm p-3 border-[1px] border-[#C5C5C5] "
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Text here..."
                ></input>
                {/* <div className=" bg-primary rounded-full border-solid flex-5 hover:bg-primary-active cursor-pointer flex justify-center items-center shadow-inner gap-10 px-6 py-3"> */}
                <p className="text-lg font-semibold">
                  <label htmlFor="my-modal-4" className="btn px-6 py-3">
                    Submit
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <h3 className="text-lg font-bold">
                        Your Message has sent. We will get back to you.
                      </h3>
                    </label>
                  </label>
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </form>
      <Fotter />
    </div>
  );
};

export default Product;
