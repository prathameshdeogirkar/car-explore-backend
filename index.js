import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const CARS = [
    // Compact Hatchbacks
    {
        id: 1,
        brand: "Maruti Suzuki",
        model: "Alto 800",
        carType: "Compact Hatchbacks",
        mileage: "22.05 km/l",
        price: "₹3.54 - ₹5.13 lakh",
        fuelType: ["Petrol, ", "CNG"],
        additionalFeatures: ["Compact size, ", "Touchscreen infotainment, ", "Low maintenance"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/39013/alto-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        id: 2,
        brand: "Tata",
        model: "Tiago",
        carType: "Compact Hatchbacks",
        mileage: "20.09 km/l",
        price: "₹5.59 - ₹8.19 lakh",
        fuelType: ["Petrol, ", "CNG"],
        additionalFeatures: ["Strong safety rating, ", "Harman sound system "],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/112763/tiago-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        id: 3,
        brand: "Hyundai",
        model: "Grand i10 Nios",
        carType: "Compact Hatchbacks",
        mileage: "20.7 km/l",
        price: "₹5.73 - ₹8.51 lakh",
        fuelType: ["Petrol, ", "CNG"],
        additionalFeatures: ["Stylish design, ", "Wireless charging "],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/136183/grand-i10-nios-exterior-right-front-three-quarter-15.jpeg?isig=0&q=80",
    },
    {
        id: 4,
        brand: "Maruti Suzuki",
        model: "Wagon R",
        carType: "Compact Hatchbacks",
        mileage: "23.56 km/l",
        price: "₹5.54 - ₹7.42 lakh",
        fuelType: ["Petrol, ",  "CNG"],
        additionalFeatures: ["Tallboy design, ", "Spacious interiors"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        id: 5,
        brand: "Renault",
        model: "Kwid",
        carType: "Compact Hatchbacks",
        mileage: "22.3 km/l",
        price: "₹4.69 - ₹6.33 lakh",
        fuelType: ["Petrol"],
        additionalFeatures: ["Compact SUV styling, ", "Digital instrument cluster"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141149/kwid-right-front-three-quarter.png?isig=0&q=80",
    },

    // Sedans
    {
        id: 6,
        brand: "Honda",
        model: "City",
        carType: "Sedan",
        mileage: "18.4 km/l",
        price: "₹11.57 - ₹16.05 lakh",
        fuelType: ["Petrol, ", "Hybrid"],
        additionalFeatures: ["Spacious interiors, ", "Smooth ride quality"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80",
    },
    {
        id: 7,
        brand: "Hyundai",
        model: "Verna",
        carType: "Sedan",
        mileage: "19.6 km/l",
        price: "₹10.96 - ₹17.38 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Advanced safety features, ", "Modern design"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80",
    },
    {
        id: 8,
        brand: "Volkswagen",
        model: "Virtus",
        carType: "Sedan",
        mileage: "18.12 km/l",
        price: "₹11.48 - ₹18.57 lakh",
        fuelType: ["Petrol"],
        additionalFeatures: ["Elegant design, ", "Turbocharged performance"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    },
    {
        id: 9,
        brand: "Skoda",
        model: "Slavia",
        carType: "Sedan",
        mileage: "18.72 km/l",
        price: "₹11.39 - ₹18.45 lakh",
        fuelType: ["Petrol, "],
        additionalFeatures: ["European styling, ", "Powerful engine options"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
        id: 10,
        brand: "Maruti Suzuki",
        model: "Ciaz",
        carType: "Sedan",
        mileage: "20.65 km/l",
        price: "₹9.30 - ₹12.85 lakh",
        fuelType: ["Petrol"],
        additionalFeatures: ["Spacious cabin, ", "Smart hybrid technology"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/48542/ciaz-exterior-left-front-three-quarter.jpeg?q=80",
    },

    // SUVs
    {
        id: 11,
        brand: "Tata",
        model: "Nexon",
        carType: "SUV",
        mileage: "17.4 km/l",
        price: "₹7.99 - ₹14.59 lakh",
        fuelType: ["Petrol, ", "Diesel, ", "Electric"],
        additionalFeatures: ["5-star safety rating, ", "Stylish design"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141873/nexon-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
    {
        id: 12,
        brand: "Hyundai",
        model: "Creta",
        carType: "SUV",
        mileage: "16.8 km/l",
        price: "₹10.87 - ₹19.20 lakh",
        fuelType: ["Petrol, ", "Diesel, "],
        additionalFeatures: ["Panoramic sunroof, ", "Premium interiors"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        id: 13,
        brand: "Kia",
        model: "Seltos",
        carType: "SUV",
        carType: "SUV",
        mileage: "16.8 km/l",
        price: "₹10.89 - ₹19.99 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Modern infotainment, ", "Stylish design"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        id: 14,
        brand: "Mahindra",
        model: "Scorpio-N",
        carType: "SUV",
        mileage: "14.5 km/l",
        price: "₹12.74 - ₹24.05 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Off-road capabilities, ", "Rugged build"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
    },
    {
        id: 15,
        brand: "Toyota",
        model: "Fortuner",
        carType: "SUV",
        mileage: "10.01 km/l",
        price: "₹32.99 - ₹50.74 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Off-road capability, ", "Luxurious cabin"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=80",
    },

    // Electric Vehicles
    {
        id: 16,
        brand: "Tata",
        model: "Nexon EV",
        carType: "Electric Vehicle",
        mileage: "312 km (range)",
        price: "₹14.74 - ₹19.94 lakh",
        fuelType: ["Electric"],
        additionalFeatures: ["Eco-friendly, ", "Fast charging"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/149311/nexon-ev-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
        id: 17,
        brand: "Mahindra",
        model: "XUV400 EV",
        carType: "Electric Vehicle",
        mileage: "375 km (range)",
        price: "₹15.98 - ₹18.98 lakh",
        fuelType: ["Electric"],
        additionalFeatures: ["Spacious design, ", "Modern features"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/45278/xuv400-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
        id: 18,
        brand: "MG",
        model: "ZS EV",
        carType: "Electric Vehicle",
        mileage: "461 km (range)",
        price: "₹23.38 - ₹27.40 lakh",
        fuelType: ["Electric"],
        additionalFeatures: ["AI-based voice assistance, ", "Panoramic sunroof"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80",
    },
    {
        id: 19,
        brand: "Hyundai",
        model: "Ioniq 5",
        carType: "Electric Vehicle",
        mileage: "631 km (range)",
        price: "₹44.95 lakh",
        fuelType: ["Electric"],
        additionalFeatures: ["Futuristic design, ", "Ultra-fast charging"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/111009/ioniq-5-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        id: 20,
        brand: "Tesla",
        model: "Model 3",
        carType: "Electric Vehicle",
        mileage: "500 km (range)",
        price: "₹60 - ₹70 lakh (estimated)",
        fuelType: ["Electric"],
        additionalFeatures: ["Autopilot, ", "Futuristic design"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/192839/model-3-right-front-three-quarter.jpeg?isig=0&q=80",
    },

    // Luxury Cars
    {
        id: 21,
        brand: "Mercedes-Benz",
        model: "C-Class",
        carType: "Luxury Cars",
        mileage: "16.9 km/l",
        price: "₹60.00 - ₹67.00 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Luxury interiors, ", "Advanced tech"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/178537/c-class-right-side-view.jpeg?isig=0&q=80",
    },
    {
        id: 22,
        brand: "BMW",
        model: "3 Series",
        carType: "Luxury Cars",
        mileage: "16.13 km/l",
        price: "₹71.50 lakh",
        fuelType: ["Petrol, ", "Diesel"],
        additionalFeatures: ["Dynamic performance, ", "Premium interiors"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/139177/3-series-gran-limousine-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        id: 23,
        brand: "Audi",
        model: "A4",
        carType: "Luxury Cars",
        mileage: "17.42 km/l",
        price: "₹43.85 - ₹51.85 lakh",
        fuelType: ["Petrol"],
        additionalFeatures: ["Luxury ride, ", "Refined engine"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/51909/a4-exterior-left-front-three-quarter-3.jpeg?q=80",
    },
    {
        id: 24,
        brand: "Jaguar",
        model: "XF",
        carType: "Luxury Cars",
        mileage: "14.4 km/l",
        price: "₹71.60 lakh",
        fuelType: ["Petrol"],
        additionalFeatures: ["Sleek design, ", "Advanced tech"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/19826/xf-exterior-left-front-three-quarter.jpeg?q=80",
    },
    {
        id: 25,
        brand: "Volvo",
        model: "XC60",
        carType: "Luxury Cars",
        mileage: "12.2 km/l",
        price: "₹66.50 lakh",
        fuelType: ["Petrol, ", "Hybrid"],
        additionalFeatures: ["Safety-first design, ", "Luxury features"],
        image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/131131/xc60-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
];



app.get("health", (req, res) => {
    res.json({
        success: "true",
        message: "Server is running"
    });
});



app.get("/cars", (req, res) => {

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
        message: "Mobile data fetched successfully"
    })
});


app.get("/cars/:id", (req, res) => {
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
});



app.delete("/cars/:id", (req, res) => {
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
});



app.post("/cars", (req, res) => {
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
});





app.put("/cars/:id", (req, res) => {
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
});







app.get("*", (req, res) => {
    res.json({
        success: "False",
        message: "Invalid API"
    });
});


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});