import ListingForm from "@/components/ListingForm/ListingForm";
import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { styles as tailwindCss } from "@/tailwindStyles";
import Test from "@/components/accrd1/Listingcomponentest";
// import Maps from "@/components/map/Maps";
import { useState } from "react";
import Maps from "@/components/map/Maps";

const ListingPage = () => {
  function addProfile(profile) {
    console.log(profile);
  }
  function addRentprop(rentprop) {
    console.log(rentprop);
  }

  const [addLoc, setAddLoc] = useState(false);

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
          <div className=" float-left mt-4 w-[50%]">
            <Test  onAdd={addRentprop} />
          </div>
        </div>

        {addLoc && <div className="ml-20"> <Maps /> </div>}
        <Fotter />
      </div>
    </div>
  );
};

export default ListingPage;
