import ListingForm from "@/components/ListingForm/ListingForm";
import Header from "@/components/Header";
import Fotter from "@/components/Fotter";
import { styles as tailwindCss } from "@/tailwindStyles";
import Prop_card from "@/components/accrd1/Prop_card";
import {BiCurrentLocation} from 'react-icons/bi'

const redis = () => {
  const accordionItems = [{
    title:'YOUR PROPERTY',
    content:(
      <div className="mt-4">
        <h2 className="flex"> <BiCurrentLocation className="mt-1 mr-2"/>Property Address : </h2>
        <input type="text" required className="w-[100%] ml-2 border-b-[2px] border-[#7E7878]" />

         <h2 className="mt-8">Front view of Property : </h2>
         <div className="flex"> 
           <input type="text" placeholder="Description" className="w-[100%] ml-2 mt-4 border-b-[2px] mr-0 border-[#7E7878] flex " />
           <input type="file" accept=".jpg" className="ml-0 mt-2"/>
         </div>
      </div>
    )
  }];
  return (
    <div>
       <Header />
         <div className="absolute top-24">
           <div className={`${tailwindCss.paddingX} w-screen h-screen`}>
              <ListingForm />
              <Prop_card items={accordionItems}/>
           </div>
       <Fotter />
         </div>
    </div>
  );
};

export default redis;
