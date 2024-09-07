// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-primaryBlue">
          Welcome to Sri Lanka Travel Website
        </h1>
        <p className="text-lg text-darkGrey text-center">
          Explore the beauty of Sri Lanka with our curated packages.
        </p>
        {/* Add any components like Hero, Top Destinations, etc. here */}
      </main>
    </div>
  );
}
