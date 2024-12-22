import Image from "next/image";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Rotating Background */}
      <div className="absolute inset-0 z-0 animate-bgChange bg-cover bg-center"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold">Enjoy Your Vacation With Us</h1>
          <p className="text-3xl mt-4">
            Explore the beauty of Sri Lanka with our packages
          </p>

          {/* Buttons Section */}
          <div className="mt-8 space-y-4">
            {/* Top Destinations & Offers Buttons */}
            <div className="space-x-4">
              <button className="rounded-full bg-white hover:bg-transparent text-primaryBlue hover:text-white px-6 py-3 text-xl border-2 border-blue-500 hover:border-white hover:scale-105 transform transition-transform duration-300">
                Top Destinations
              </button>
              <button className="rounded-full bg-white hover:bg-transparent text-primaryBlue hover:text-white px-6 py-3 text-xl font-medium border-2 border-blue-500 hover:border-white hover:scale-105 transform transition-transform duration-300">
                Offers
              </button>
            </div>

            {/* Book Now Button */}
            <button className="rounded-full bg-white hover:bg-transparent text-primaryBlue hover:text-white px-8 py-4 text-2xl font-bold mt-6 border-4 border-blue-500 hover:border-white hover:scale-105 transform transition-transform duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
