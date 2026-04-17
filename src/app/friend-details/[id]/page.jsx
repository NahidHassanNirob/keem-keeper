import Image from "next/image";
import friendsData from "../../../../public/friends.json";

import ClickBtn from "@/components/shared/ClickBtn";
import DetailsCard from "@/components/friendsDetails/DetailsCard";
export const metadata = {
  title: "Keen Keeper | Friend Details",
  description: "View and manage your friend connection details.",
};
const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  

  return (
    <>
      <DetailsCard id={id}></DetailsCard>
    </>
  );
};

export default FriendDetailsPage;
