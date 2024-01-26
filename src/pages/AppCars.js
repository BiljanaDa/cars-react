import React, { useEffect, useState } from "react";
import carsService from "../service/CarsService";
import Car from "../components/Car";

export default function AppCars() {
  const [cars, setCars] = useState([]);
  // useEffect(() => setCars(carsService.getAllCars()), []);
  useEffect(()=>{
    async function getAllCars() {
      const data = await carsService.getAllCars();
      setCars(data);
      
    }
    getAllCars();
  },[])
 

  return (
    <div>
      <h1>Cars:</h1>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}
