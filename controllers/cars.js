 import { CARS } from "../data.js";
 
 const getCars = (req, res) => {

    const { id } = req.query;

    const filterCars = CARS.filter((car) => {
        if (!id) {
            return true;
        }
        if (car.id == id) {
            return true;
        }
    })

    res.json({
        success: true,
        data: filterCars,
        message: "Cars data fetched successfully"
    })
};


export {getCars}