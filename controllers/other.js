


const getHealth = (req, res) => {
    res.json({
        success: "true",
        message: "Server is running"
    });
};


const getHome = (req, res)=> {
    res.json({message: "Welcome to car explore API"});
};


const getNotFound = (req, res) => {
    res.status(404).json({
        success: "False",
        message: "Invalid API"
    });
}



export { getHealth, getHome, getNotFound}