import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Inside = () => {
  const location = useLocation();
  const [data, setData] = useState<any>(location?.state || []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <p>Bids of the Particular Person</p>
      {data?.detail?.map((dt: any) => {
        return (
          <div>
            <div style={{ paddingTop: "10px" }}>
              {dt?.amount} {dt?.carTitle}
            </div>
          </div>
        );
      })}
    </div>
  );
};
