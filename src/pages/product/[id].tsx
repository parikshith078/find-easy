import { useRouter } from "next/router";
import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import Image from "next/image";
import Head from "next/head";
import { FC, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { useAuth } from "@/components/context/AuthContext";
import { useState } from "react";

// interface ProductProps {
//   address: string;
//   img: string;
//   disription: string;
//   price: number;
//   rooms: number;
// }

export default function FormPage({ params }: any) {
  const router = useRouter();
  const { id } = router.query;
  const { db } = useAuth();
  const [info, setInfo] = useState<any>();
  const q = query(collection(db, "Properties"), where("userID", "==", id));

  useEffect(() => {
    async function getData() {
      await onSnapshot(q, (querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({ ...doc.data() });
        });
        console.log("wrorking");

        setInfo(temp[temp.length - 1]);
        console.log(info);
      });
    }
    console.log("working out");
    getData();
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      {info !== undefined && <Product {...info} />}
    </>
  );
}

const Product: FC = (props) => {
  const [serviceChat, setServiceChat] = useState<any>(false);
  return (
    <>
      <Header />
      {serviceChat && (
        <Head>
          <script
            src="https://code.tidio.co/n60txso6wa94gg9qyro4x3eo2cohlojo.js"
            async
          ></script>
        </Head>
      )}
      <div className=" w-screen h-[60%]">
        <div className="hero min-h-screen bg-base-200  ">
          <div className="hero-content gap-10 flex-col items-center relative bottom-24 justify-start w-full h-full lg:flex-row">
            <Image
              // @ts-ignore
              src={props.img}
              alt="Picture of the house"
              className=" max-w-4xl min-w-[500px] rounded-lg shadow-2xl "
              height={700}
              width={600}
            />
            <div>
              {/* @ts-ignore */}
              <h1 className="text-3xl font-light ">{props.price}</h1>
              {/* @ts-ignore */}
              <p>Number of rooms: {props.rooms}</p>
              {/* @ts-ignore */}
              <p>Address: {props.address}</p>
              <h1 className="text-2xl font-bold mt-10">About the Property</h1>
              {/* @ts-ignore */}
              <p className="pb-6 pt-2">{props.frontview}</p>
              <button
                className="btn btn-primary"
                onClick={() => setServiceChat((perv) => !perv)}
              >
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};
