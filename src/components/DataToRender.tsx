import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import Table from "./Table";
import './data.css'

export const DataToRender = () => {
  const [data, setData] = useState<any[]>([]);
  const [max, setMax] = useState<boolean>(true);
  const handleClick = () => {
    setMax(!max);
  };

  const getData = async () => {
    const response = await axios.get(
      `https://intense-tor-76305.herokuapp.com/merchants`
    );
    if (response.data) {
      const newArr = response.data.map((value: any, index: any) => {
        let objArr = value?.bids;
        value.maxAmount = Math.max.apply(
          Math,
          objArr.map(function (o: any) {
            return o.amount;
          })
        );
        value.minAmount = Math.min.apply(
          Math,
          objArr.map(function (o: any) {
            return o.amount;
          })
        );
        return value;
      });
      setData(newArr);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="btn-padding">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Toggle
        </Button>
      </div>

      <Table data={data} max={max} />
    </>
  );
};
