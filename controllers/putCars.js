  import { CARS } from "../data.js";
  
  
  const putCars = (req, res) => {
    const { id } = req.params;
    const { brand, model, mileage, price, fuelType, additionalFeatures, image, carType } = req.body;

    let carIndex = -1;

    CARS.map((car, index) => {
        if (car.id == id) {
            carIndex = index;
        }
    });

    if (carIndex === -1) {
        return res.json({
            success: "false",
            message: "Car not found",
        });
    }

    const updatedCar = {
        id: CARS[carIndex].id, // Retain the existing ID
        brand,
        model,
        mileage,
        price,
        fuelType,
        additionalFeatures,
        image,
        carType,
    };

    CARS[carIndex] = updatedCar;

    res.json({
        success: "true",
        message: "Car updated successfully",
        data: updatedCar, 
    });
}


export { putCars}