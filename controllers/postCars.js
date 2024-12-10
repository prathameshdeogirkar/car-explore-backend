import { CARS } from "../data.js";


const postCar = (req, res) => {
    const { id, brand, model, carType, mileage, price, fuelType, additionalFeatures, image } = req.body;

    const car = {
        id, 
        brand, 
        model, 
        carType, 
        mileage, 
        price, 
        fuelType, 
        additionalFeatures, 
        image
    }

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "ID is required",
            alert: "ID is required"
        })  
    }

    CARS.push(car)

    res.json({
        success: true,
        data: car,
        message: "Car added successfully"
    })
};  


export {postCar}