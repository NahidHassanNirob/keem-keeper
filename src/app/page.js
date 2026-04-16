import FriendsData from "@/components/FriendsData";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FriendsData></FriendsData>
    </div>
  );
}
