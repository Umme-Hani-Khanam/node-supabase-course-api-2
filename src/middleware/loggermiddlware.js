

const loggermiddleware = (req, res, next) => {
    const method = req.method;          
    const url = req.originalUrl;        
    const timestamp = new Date().toISOString();

    console.log(`${method} ${url} - ${timestamp}`);

    next(); 
};

export default loggermiddleware;