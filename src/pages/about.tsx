import { TeamInfo } from "@/libs/info";
// TODO: Fix content of the page
import Fotter from "../components/Fotter";
import Image from "next/image";
import Link from "next/link";
function AboutPage() {
  return (
    <>
      <div className="hero min-h-screen w-screen bg-base-200">
        <div className="hero-content text-center w-screen">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Find Easy</h1>
            <p className="py-6">
              Enter Find Easy and start your journey with us in finding the best
              property for you and your family.
            </p>
            <Link href="/" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 items-start w-screen ">
        <h2 className="text-3xl font-bold">Meat our team</h2>
        <div className="w-[70%] flex my-20 flex-wrap px-10 gap-10 justify-around">
          {TeamInfo.map((item, id) => (
            // @ts-ignore
            <ProfileCard key={id} info={item} />
          ))}
        </div>
      </div>
      <Fotter />
    </>
  );
}

const ProfileCard = ({ info }) => (
  <div className="card w-80 bg-base-100 shadow-xl">
    <div className="avatar self-center mt-6 ">
      <div className="w-24 bg-primary mask mask-squircle">
        <Image height={50} width={50} alt="profile" src={info.image} />
      </div>
    </div>
    <div className="card-body text-center items-center ">
      <h2 className="card-title text-center">{info.name}</h2>
      <p>
        <span className="font-semibold">{info.role}</span>
        <br />
        <span>{info.tags[0]}</span>
        <br />
        <span>{info.tags[1]}</span>
      </p>
      <div className="card-actions justify-end">
        <Link target="_blank" href={info.github} className="btn btn-primary">
          Connect
        </Link>
      </div>
    </div>
  </div>
);

export default AboutPage;
