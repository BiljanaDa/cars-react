import React, { useEffect, useState } from "react";
import carsService from "../service/CarsService";

const years = (start = 1990, end = 2023) => {
  return Array.apply(0, Array(end - start + 1)).map(
    (element, index) => index + start
  );
};

const engines = ["diesel", "petrol", "electric", "hybrid"];

export default function AddCars() {
  const [cars, setCars] = useState(carsService.getAllCars());
  useEffect(() => setCars(carsService.getAllCars()), []);
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: false,
    engine: "",
    numberOfDoors: "",
  });

  const handleAddCar = (e) => {
    e.preventDefault();
    carsService.addNewCar(newCar);
    setCars([...carsService.getAllCars()]);
  };

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6">
        <h2>Add a new car:</h2>
        <form className="needs-validation">
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Brand:
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="brand"
              value={newCar.brand}
              onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Model:
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year:
            </label>
            <select
              value={newCar.year}
              onChange={({ target }) =>
                setNewCar({ ...newCar, year: Number(target.value) })
              }
            >
              {years().map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="maxSpeed" className="form-label">
              Max Speed:
            </label>
            <input
              type="number"
              className="form-control rounded-pill"
              id="maxSpeed"
              value={newCar.maxSpeed}
              onChange={(e) =>
                setNewCar({ ...newCar, maxSpeed: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="isAutomatic" className="form-label">
              Automatic:
            </label>
            <input
              type="checkbox"
              checked={newCar.isAutomatic}
              onChange={({ target }) =>
                setNewCar({ ...newCar, isAutomatic: target.checked })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="engine" className="form-label">
              Engine:
            </label>
            {engines.map((engine, index) => (
              <span key={index}>
                <input
                  type="radio"
                  name="engine"
                  value={engine}
                  onChange={() => setNewCar({ ...newCar, engine })}
                  checked={engine === newCar.engine}
                  required
                />
                {engine}
              </span>
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="numberOfDoors" className="form-label">
              Number Of Doors:
            </label>
            <input
              type="number"
              className="form-control rounded-pill"
              id="numberOfDoors"
              value={newCar.numberOfDoors}
              onChange={(e) =>
                setNewCar({ ...newCar, numberOfDoors: e.target.value })
              }
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            onClick={handleAddCar}
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
}
