import React, { useEffect, useState } from "react";
import carsService from "../service/CarsService";
import { useNavigate, useParams } from "react-router-dom";

const years = (start = 1990, end = 2023) => {
  return Array.apply(0, Array(end - start + 1)).map(
    (element, index) => index + start
  );
};

const engines = ["diesel", "petrol", "electric", "hybrid"];

export default function AddCars() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cars, setCars] = useState(carsService.getAllCars());

  useEffect(() => setCars(carsService.getAllCars()), []);

  useEffect(() => {
    setCars(carsService.getAllCars());
    if (id) {
      const existingCar = carsService.getCarById(id);
      if (existingCar) {
        setNewCar(existingCar);
      }
    }
    carsService.setCars = setCars;
  }, [id]);

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: years()[0],
    maxSpeed: "",
    isAutomatic: false,
    engine: "",
    numberOfDoors: "",
  });

  const handleAddCar = (e) => {
    e.preventDefault();
    if (id) {
      carsService.editCar(id, newCar);
    } else {
      carsService.addNewCar(newCar);
    }

    navigate("/cars");
  };

  const handleResetForm = () => {
    setNewCar({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      isAutomatic: false,
      engine: "",
      numberOfDoors: "",
    });
  };

  const handlePreview = () => {
    alert(`
    Brand: ${newCar.brand} \n
    Model: ${newCar.model} \n
    Year: ${newCar.year} \n
    Max Speed: ${newCar.maxSpeed} \n
    Automatic: ${newCar.isAutomatic ? "Yes" : "No"} \n
    Engine: ${newCar.engine} \n
    Number Of Doors: ${newCar.numberOfDoors}
    `);
  };

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6">
        <h2>Add a new car:</h2>
        <form onSubmit={handleAddCar} className="needs-validation">
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
              minLength={2}
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
              minLength={2}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year:
            </label>
            <select
              required
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
              style={{ WebkitAppearance: "textfield" }}
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
                  required
                  type="radio"
                  name="engine"
                  value={engine}
                  onChange={() => setNewCar({ ...newCar, engine })}
                  checked={engine === newCar.engine}
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
              required
              type="number"
              className="form-control rounded-pill"
              id="numberOfDoors"
              value={newCar.numberOfDoors}
              onChange={(e) =>
                setNewCar({ ...newCar, numberOfDoors: e.target.value })
              }
              style={{ WebkitAppearance: "textfield" }}
            />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill">
            {id ? "Update Car" : "Add Car"}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleResetForm}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={handlePreview}
          >
            Preview
          </button>
        </form>
      </div>
    </div>
  );
}
