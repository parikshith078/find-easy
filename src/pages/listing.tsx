import ListingForm from "@/components/ListingForm/ListingForm";
import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { styles as tailwindCss } from "@/tailwindStyles";
import Test from "@/components/accrd1/Listingcomponentest";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import Maps from "@/components/map/Maps";
import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { ref, uploadBytes } from "firebase/storage";

const ListingPage = () => {
  const { currentUser, db, storage } = useAuth();

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

  async function sendData(input: any, img: any) {
    try {
      const docRef = await addDoc(collection(db, "Properties"), {
        ...input,
        createdAt: serverTimestamp(),
        userID: currentUser.uid,
        userEmail: currentUser.email,
      });
      await uploadImage(docRef.id, img);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
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

        {addLoc && <div className="ml-20 mt-[20opx]">{/* <Maps /> */}</div>}
        <Fotter />
      </div>
    </div>
  );
};

export default ListingPage;
