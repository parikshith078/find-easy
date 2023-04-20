import Image from "next/image";
import Link from "next/link";

interface CardProps {
  address: string;
  price: string;
  img: string;
  docRef: string;
  link: string;
}

function Card(props: CardProps) {
  return (
    <Link
      href={`/product/${props.link}`}
      className="card w-80 max-h-96 pt-5 mt-5 bg-base-100 shadow-xl"
    >
      <figure>
        <Image width={300} height={300} src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {/* TODO: Add ruppe symble here */}
          {props.price}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.address}</p>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </Link>
  );
}

export default Card;
