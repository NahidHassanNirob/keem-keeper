import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default loading;
