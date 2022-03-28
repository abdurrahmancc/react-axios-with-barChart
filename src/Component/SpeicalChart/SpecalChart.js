import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const SpecalChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone").then((data) => {
      const localData = data.data.data;
      /*   const phoneData = localData.map((phone) => {
        const phnData = phone.slug.split("-");
        const ph = {
          name: phnData[0],
          value: phnData[1],
        };
        return ph;
      });
      setPhones(phoneData); */

      const phoneData = localData.map((phone) => phone.slug);
      const phnData = phoneData.map((phnDtails) => {
        const phns = phnDtails.split("-");
        const ph = {
          name: phns[0],
          value: phns[1],
        };
        return ph;
      });
      setPhones(phnData);
    });
  }, []);

  return (
    <BarChart width={730} height={250} data={phones}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
};

export default SpecalChart;
