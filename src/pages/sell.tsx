import Header from "../components/Header";
import Footer from "../components/Fotter";
import Image from "next/image";
import Link from "next/link";

function SellPropertyPage() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Sell Your Property</h1>
            <p className="py-6">
              We make it easy to sell your property. Our team of experts are
              here to guide you through the process every step of the way.
            </p>
            <Link href="/signUP" className="btn btn-primary">
              Getting Started
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/sell-property.jpg"
              alt="Sell Property"
              width="640"
              height="480"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Sell with Us?</h2>
            <ul className="list-disc list-inside">
              <li>Expert advice from our team of real estate professionals</li>
              <li>Customized marketing plan for your property</li>
              <li>Easy and hassle-free process</li>
              <li>Competitive commission rates</li>
              <li>Full transparency throughout the process</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero bg-primary">
        <div className="hero-content text-center py-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell Your Property?
          </h2>
          <a href="/contact" className="btn btn-secondary btn-lg mx-auto">
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SellPropertyPage;
