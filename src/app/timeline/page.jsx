import TimeLineCard from "@/components/shared/timeline/TimeLineCard";

export const metadata = {
  title: "Keen Keeper | Timeline",
  description:
    "Keep track of every call, text, and video chat in one organized timeline.",
};
const TimeLinePage = () => {
  return (
    <div className="container    mx-auto  px-3  my-5">
      <h1 className="text-2xl text-left font-bold mb-2 text-[#434953]">
        Timeline
      </h1>

      <div className="">
        <TimeLineCard></TimeLineCard>
      </div>
    </div>
  );
};
export default TimeLinePage;
