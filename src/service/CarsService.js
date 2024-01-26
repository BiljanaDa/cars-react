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

  getCarById(id) {
    return this.cars.find((car) => car.id === parseInt(id));
  }

  addNewCar(newCar) {
    const carToAdd = { id: this.nextId++, ...newCar };
    this.cars.push(carToAdd);
  }

  editCar(id, updatedCar) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index !== -1) {
      this.cars[index] = { ...this.cars[index], ...updatedCar };
      this.setCars([...this.cars]);
    }
  }

  deleteCar(id) {
    console.log(`Deleting car with ID: ${id}`);
    this.cars = this.cars.filter((car) => car.id !== id);
    console.log("Updated cars:", this.cars);
  }
}

const carsService = new CarsService();
export default carsService;
