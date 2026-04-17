"use client";
import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FriendsContext } from "@/context/friendsContext";

const StatsPage = () => {
  const { timeLine } = useContext(FriendsContext);

  // Requirement C1: Count Call, Text, and Video from timeLine
  const dataCount = timeLine.reduce(
    (acc, item) => {
      const type = item.type.toLowerCase();
      if (type === "call") acc[0].value += 1;
      else if (type === "text") acc[1].value += 1;
      else if (type === "video") acc[2].value += 1;
      return acc;
    },
    [
      { name: "Call", value: 0 },
      { name: "Text", value: 0 },
      { name: "Video", value: 0 },
    ]
  );


  const COLORS = ["#244D3F", "#8B5CF6", "#34A853"];

  return (
    <div className="container mx-auto px-3 my-5">
      <h1 className="lg:text-2xl text-left font-bold mb-8 text-[#434953]">
        Friendship Analytics
      </h1>

      <div className="h-[400px] w-[100%]  bg-white shadow rounded-md p-5">
        <h2 className="font-semibold text-left text-[18px]">By Interaction Type</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataCount}
               cx="50%"
               cy="50%"
              innerRadius={80}
               outerRadius={120}
               paddingAngle={8}
              dataKey="value"
            >
              {dataCount.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      
     
    </div>
  );
};

export default StatsPage;