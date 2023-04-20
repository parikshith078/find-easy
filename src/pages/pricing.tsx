import Header from "../components/Header";
//TODO: Add images
import Fotter from "../components/Fotter";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Basic",
    price: "$99/month",
    features: [
      "Display Ads",
      "Up to 5 Ad Campaigns",
      "Unlimited Impressions",
      "Audience Targeting",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    buttonLink: "/signUp",
    img: "pricing/price1.svg",
  },
  {
    title: "Pro",
    price: "$199/month",
    features: [
      "Display Ads",
      "Up to 15 Ad Campaigns",
      "Unlimited Impressions",
      "Audience Targeting",
      "Automated Bidding",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    buttonLink: "/signUp",
    img: "pricing/price2.svg",
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: [
      "Display Ads",
      "Unlimited Ad Campaigns",
      "Unlimited Impressions",
      "Audience Targeting",
      "Automated Bidding",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "24/7 Support",
    ],
    buttonText: "Request Demo",
    buttonLink: "/contact",
    img: "pricing/price3.svg",
  },
];
// TODO: Add image to the card

function AdvertisePage() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Choose Your Advertise Plan</h1>
            <p className="py-6">
              Choose the plan that suits your advertising needs and budget.
            </p>
            <Link href="/signUP" className="btn btn-primary">
              Getting Started
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 items-start ">
        <div className="w-[70%] flex my-20 flex-wrap gap-10 justify-around">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
      <Fotter />
    </>
  );
}

const PricingCard = ({ plan }) => (
  <div className="card w-full md:w-80 bg-base-100 shadow-xl">
    <div className="avatar self-center mt-6 mx-auto">
      <div className="w-24 bg-white mask mask-squircle">
        <Image height={50} width={50} alt="profile" src={plan.img} />
      </div>
    </div>
    <div className="card-body text-center items-center ">
      <h2 className="card-title text-center">{plan.title}</h2>
      <h3 className="text-3xl font-bold py-6">{plan.price}</h3>
      <ul className="text-left">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="card-actions justify-end">
        <Link href={plan.buttonLink} className="btn btn-primary">
          {plan.buttonText}
        </Link>
      </div>
    </div>
  </div>
);

export default AdvertisePage;
