import { FC } from "react";
import { propertyType } from "@/libs/redis/redis";
const ListingForm: FC = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);
    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Listing inputs should have the same name as propertyType */}
      <button type="submit">Submit listing</button>
    </form>
  );
};

export default ListingForm;
