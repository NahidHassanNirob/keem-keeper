"use client";
import { FriendsContext } from "@/context/friendsContext";
import React, { useContext } from "react";

const Timeline = () => {
  const { timeLine, setTimeLine, allTimeLine } = useContext(FriendsContext);
  const clickFilter = (type) => {
  if (type === "all") {
    setTimeLine(allTimeLine);
  } else {
    const filterData = allTimeLine.filter(item => item.type === type);
    setTimeLine(filterData);
  }
};

  return (
    <div>
      <select className="select mb-3" onChange={(e) => clickFilter(e.target.value)}>
        <option disabled value="">
          Filter timeline
        </option>
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      
    </div>
  );
};

export default Timeline;
