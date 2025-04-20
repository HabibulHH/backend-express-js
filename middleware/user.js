const  saveUserAgent  = require('../utils/logger');


const isValid = (req,res,next)=>{
    console.log(req.query.token);
    if(req.query.token ==="123"){
        next(); 
    }else{
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}


const checkUserAgent = (req,res,next)=>{
    const userAgent = req.headers['user-agent'];
    const blockedPatterns = [
        /curl/i,
        /wget/i,
        /python-requests/i,
        /Go-http-client/i,
        /Java/i,
        /sqlmap/i,
        /nmap/i,
        /Nikto/i,
        /HeadlessChrome/i,
        /PhantomJS/i
      ];
      const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));
 
     // Save to JSON file
     saveUserAgent(userAgent);
    if (!userAgent || isBlocked ) {
        // blocked json 
        return res.status(403).json({ message: 'Forbidden: Suspicious User-Agent' });
    }
    next();
}

module.exports = {
    isValid,checkUserAgent
}