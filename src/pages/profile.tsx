import Fotter from "../components/Fotter";
import { useState } from "react";
import Header from "@/components/Header";

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ name, email, image });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-200 py-12">
        <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <div className="sm:ml-4 sm:text-left text-center">
              <h4 className="text-xl font-bold leading-tight mt-4">
                Edit Profile
              </h4>
            </div>
          </div>
          <div className="border-t border-gray-300 px-6 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="https://example.com/profile.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default ProfilePage;
