import ListingForm from "@/components/ListingForm/ListingForm";
import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { styles as tailwindCss } from "@/tailwindStyles";
import Test from "@/components/accrd1/Listingcomponentest";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Head from "next/head";
// import Maps from "@/components/map/Maps";

import { useState } from "react";
import Maps from "@/components/map/Maps";
import { useAuth } from "@/components/context/AuthContext";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";

const ListingPage = () => {
  const { currentUser, db, storage } = useAuth();
  const { push } = useRouter();

  if (!currentUser) push("/login");

  async function addProfile(profile: any) {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        ...profile,
        createdAt: serverTimestamp(),
        userID: currentUser.uid,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [addLoc, setAddLoc] = useState(false);

  async function uploadImage(floder: any, img: any) {
    if (img === null) return;
    const imgRef = ref(storage, `propertyImages/${floder}/${img.name}`);
    await uploadBytes(imgRef, img).then(() => alert("image uploaded"));
  }

  const getLocation = (input: any) => {
    return location;
  };

  async function sendData(input: any, img: any) {
    try {
      await uploadImage(currentUser.uid, img).then(async () => {
        const imgRef = ref(storage, `propertyImages/${currentUser.uid}`);
        listAll(imgRef).then((res) => {
          getDownloadURL(res.items[0]).then(async (url) => {
            const docRef = await addDoc(collection(db, "Properties"), {
              ...input,
              createdAt: serverTimestamp(),
              img: url,
              userID: currentUser.uid,
              userEmail: currentUser.email,
            });
            console.log("Document written with ID: ", docRef.id);
            alert("data uploaded");
          });
        });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <div>
        <Head>
          <script
            src="https://code.tidio.co/n60txso6wa94gg9qyro4x3eo2cohlojo.js"
            async
          ></script>
        </Head>
        <Header />
        <div className="absolute top-24">
          <div className={`${tailwindCss.paddingX} w-screen h-screen`}>
            <button
              className="btn btn-primary ml-4"
              onClick={() => {
                setAddLoc((prev) => !prev);
              }}
            >
              add location
            </button>
            <div className="float-right">
              <ListingForm onAdd={addProfile} />
            </div>
            <div className=" float-left w-[50%]">
              <Test onAdd={sendData} />
            </div>
          </div>

          {addLoc && (
            <div className="ml-20">
              {" "}
              {/* @ts-ignore */}
              <Maps getLocation={getLocation} />{" "}
            </div>
          )}
          <Fotter />
        </div>
      </div>
    </>
  );
};

export default ListingPage;
