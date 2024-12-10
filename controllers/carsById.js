import { CARS } from "../data.js";



const carsById = (req, res) => {
    const { id } = req.params

    const car = CARS.find((car) => {
        if (car.id == id) {
            return true;
        }
    })

    if (!car) {
        return res.json({
            success: false,
            data: null,
            message: "car not found"
        })
    }

    res.json({
        success: true,
        data: car,
        message: "car data fetched successfully"
    })
};


export {carsById}