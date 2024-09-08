// pages/index.tsx or Home.tsx
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Rotating Background */}
      <div className="absolute inset-0 z-0 animate-bgChange bg-cover bg-center"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Enjoy Your Vacation With Us</h1>
          <p className="text-2xl mt-4">
            Explore the beauty of Sri Lanka with our curated packages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
