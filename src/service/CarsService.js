class CarsService {
  constructor() {
    this.nextId = 3;
    this.cars = [
      {
        id: 1,
        brand: "Audi",
        model: "A4",
        year: 2018,
        maxSpeed: 250,
        isAutomatic: false,
        engine: "diesel",
        numberOfDoors: 5,
      },
      {
        id: 2,
        brand: "BMW",
        model: "X5",
        year: 2008,
        maxSpeed: 260,
        isAutomatic: false,
        engine: "petrol",
        numberOfDoors: 5,
      },
    ];
  }

  getAllCars() {
    return this.cars;
  }

  addNewCar(newCar) {
    const carToAdd = { id: this.nextId++, ...newCar };
    this.cars.push(carToAdd);
  }
}

const carsService = new CarsService();
export default carsService;
