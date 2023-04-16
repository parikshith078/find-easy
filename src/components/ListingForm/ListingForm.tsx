import styles from "@/styles/list.module.css";
import { CgProfile } from "react-icons/cg";
import { useState, ChangeEvent, FormEvent,MouseEventHandler } from 'react';



const icon = 130;
const editicon = 20;


const ListingForm = (props) => {

  interface Profile {
    name: string;
    contact: string;
    email: string;
    address: string;
    about: string;
  };
  
  const [profile, setProfile] = useState<Profile>({
    name: "",
    contact: "",
    email: "",
    address: "",
    about: ""
  });
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
  
    setProfile((prevProfile) => {
      return {
        ...prevProfile,
        [name]: value
      };
    });
  }
  
  const submitProfile: MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onAdd(profile)
    event.preventDefault();
  };
  
  
  return (
    <div>

          <div className={styles.profile}>
            <div className={styles.headline}>
              <h1 className="font-extrabold text-2xl"> PROFILE : </h1>
            </div>
            <button>
             <div className="w-[150px] h-[150px] ml-[210px] border-solid  border-[2px] border-[#000000] rounded-lg" >
               <input type="file" accept=".jpg" required className="hidden"  id="file"/>
               <label htmlFor="file" className=" content-center pb-[100px]"><CgProfile className="pt-[20px] pl-[20px]" size={icon} /></label>
             </div>
             </button>
            <div className={styles.name}>
              <input
                value={profile.name}
                name="name"
                onChange={handleChange}
                placeholder="your name"
                className="w-[38%] h-full"
              />
            </div>
            <form className=" ml-10 mt-8 border-solid cursor-default">
              <p className="">Contact-number :</p>
              <input
                value={profile.contact}
                name="contact"
                onChange={handleChange}
                className="w-[50%] ml-2 border-b-[2px] border-[#7E7878] "
              />
            </form>
            <div className=" ml-10 mt-8 border-solid cursor-default">
              <p>E-Mail :</p>
              <input
                value={profile.email}
                name="email"
                onChange={handleChange}
                className="w-[50%] ml-2 border-b-[2px] border-[#7E7878]"
              />
            </div>
            <div className=" ml-10 mt-8 border-solid cursor-default">
              <p>Address : </p>
              <input
                value={profile.address}
                name="address"
                onChange={handleChange}
                className="w-[50%] ml-2  border-b-[2px] border-[#7E7878] "
              />
            </div>
            <form className=" ml-10 mt-8 border-solid cursor-default">
              <p>About : </p>
              <div className=" flex content-start justify-items-start ml-2  w-[70%] h-24">
                <input
                  className="h-full w-[100%] border-[2px] px-2 border-[#7E7878] rounded-lg"
                  value={profile.about}
                  name="about"
                  onChange={handleChange}
                  placeholder="Description about you...."
                />
              </div>
              <div>
                <button className="font-extrabold ml-[80%]" onClick={submitProfile}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
  );
          };

export default ListingForm;

