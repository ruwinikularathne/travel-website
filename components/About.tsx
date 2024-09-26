import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
      {/* Left side: Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <Image
          src="/images/bg1.jpg" 
          alt="Travel"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right side: Text Section */}
      <div className="md:w-1/2 w-full md:ml-8">
        <h3 className="text-primaryBlue uppercase text-sm font-bold mb-3">
          About Us
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          We Provide Best Tour Packages In Your Budget
        </h2>
        <p className="text-gray-600 mb-6">
        package description here
        </p>

        {/* Images Section */}
        <div className="flex space-x-4 mb-6">
          <Image
            src="/images/bg2.jpg" 
            alt="Destination"
            width={200}
            height={150}
            className="rounded-lg object-cover"
          />
          <Image
            src="/images/bg3.jpg" 
            alt="Destination"
            width={200}
            height={150}
            className="rounded-lg object-cover"
          />
        </div>

        <button className="rounded-full bg-primaryBlue text-white px-6 py-3 font-semibold hover:bg-primaryGreen transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default About;
