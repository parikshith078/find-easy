import { Client, Entity, Schema, Repository } from "redis-om";

export type propertyType = {
  price: number;
  address: string[];
  addressText: string;
  owner: number;
  photos: string[];
  discription: string;
  location: any;
};

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Property extends Entity {}
let schema = new Schema(
  Property,
  {
    price: { type: "number" },
    address: { type: "string[]" },
    addressText: { type: "string" },
    owner: { type: "number" },
    photos: { type: "string[]" },
    discription: { type: "string" },
    location: { type: "point" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createCar(data: propertyType) {
  await connect();

  const repository = client.fetchRepository(schema);

  const car = repository.createEntity(data);

  const id = await repository.save(car);
  return id;
}
