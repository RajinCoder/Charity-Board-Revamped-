import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-[70vw] mt-10 flex flex-col items-center text-black">
        <h1 className="text-2xl py-2">
          The Sole Owners and Philanthropists of Charity Connect
        </h1>
        <Image
          src="/charity_owners.jpg"
          width={350}
          height={350}
          alt="Image of the owners"
        />
        <p className="text-xl py-2">
          Peter Moise and Jacob Rocque are the originators and sole owners of
          CharityConnect, a community-driven platform dedicated to connecting
          those in need with those willing to give. As passionate
          philanthropists, they founded the charity item posting website with
          the goal of making giving more accessible, transparent, and impactful.
          Their vision is rooted in the belief that everyone should have the
          opportunity to make a difference, and CharityConnect serves as a
          bridge between donors and recipients, fostering a culture of
          generosity and support.
        </p>
      </div>
    </div>
  );
}
