import { CARS } from "../data.js";


const deleteCarsById = (req, res) => {
    const { id } = req.params;
    let carIndex = -1;

    CARS.map((car, index) => {
        if (car.id == id) {
            carIndex = index;
        }
    });


    if (carIndex == -1) {
        return res.json({
            success: "false",
            message: "car not found"
        });
    }

    CARS.splice(carIndex, 1);
    res.json({
        success: "true",
        message: "car deleted successfully"
    });
}; 


export {deleteCarsById}