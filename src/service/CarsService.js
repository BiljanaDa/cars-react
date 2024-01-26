import HttpService from "./HttpService";
class CarsService extends HttpService{
  // constructor() {
  //   this.nextId = 3;
  //   this.cars = [
  //     {
  //       id: 1,
  //       brand: "Audi",
  //       model: "A4",
  //       year: 2018,
  //       maxSpeed: 250,
  //       isAutomatic: false,
  //       engine: "diesel",
  //       numberOfDoors: 5,
  //     },
  //     {
  //       id: 2,
  //       brand: "BMW",
  //       model: "X5",
  //       year: 2008,
  //       maxSpeed: 260,
  //       isAutomatic: false,
  //       engine: "petrol",
  //       numberOfDoors: 5,
  //     },
  //   ];
  // }

  getAllCars = async()=> {
    const {data} = await this.client.get('cars');
    
    return data;
  }

  getCarById= async(id)=> {
    const {data} = await this.client.get(`/cars/${id}`);
    return data;
    // return this.cars.find((car) => car.id === parseInt(id));
  }

  // addNewCar(newCar) {
  //   const carToAdd = { id: this.nextId++, ...newCar };
  //   this.cars.push(carToAdd);
  // } 
  addNewCar = async (newCar) => {
    const response = await this.client.post('cars', newCar);
    
 }

  editCar =async (id, newCar)=> {
    // const index = this.cars.findIndex((car) => car.id === id);
    // if (index !== -1) {
    //   this.cars[index] = { ...this.cars[index], ...updatedCar };
    //   this.setCars([...this.cars]);
    // }
    const data = await this.client.put(`/cars/${id}`, newCar);
    return data;
  }

  deleteCar = async (id)=> {
    // console.log(`Deleting car with ID: ${id}`);
    // this.cars = this.cars.filter((car) => car.id !== id);
    // console.log("Updated cars:", this.cars);
    const data = await this.client.delete(`/cars/${id}`);
    return data;

  }
}

const carsService = new CarsService();
export default carsService;
