import React from "react";
import { Link } from "react-router-dom";

export default function Car({ car }) {
  console.log("Car component received:", car);
  return (
    <>
      <div key={car.id} className="row mb-2">
        <div className="col">
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Brand:</strong> {car.brand} <br />
              <strong>Model: </strong>
              {car.model} <br />
              <strong>Year: </strong> {car.year} <br />
              <strong>Max Speed: </strong> {car.maxSpeed} km/h
              <br />
              <strong>Is Automatic: </strong> {car.isAutomatic ? "Yes" : "No"}
              <br />
              <strong>Engine: </strong> {car.engine}
              <br />
              <strong>Number Of Doors: </strong> {car.numberOfDoors}
              <br />
            </li>
            <Link to={`/edit/${car.id}`}>
              <button>Edit</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
