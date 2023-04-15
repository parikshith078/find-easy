// import React,{useState} from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// const HeartButton = () =>{

//     return(
//         <div>
//          <AiFillHeart
//          size={20}/>
//         </div>
//     );
// };


// export default HeartButton;

'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface HeartButtonprops {
    listingid:string;
}
const HeartButton: React.FC<HeartButtonprops> = ({
    listingid
}) => {
     const hasFavorited = false;
     const toggleFavorite = () => {}

  return (
    <div 
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={20}
        className="
          absolute
          fill-white"
      />
      <AiFillHeart
        size={20}
        className={
          hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
    };
 
export default HeartButton;