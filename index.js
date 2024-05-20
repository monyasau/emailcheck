// initiated function
const emailCheck=(data)=>{
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Implemented regex pattern to validate email format
    let checkRegex = emailRegex.test(data); // Check provided email to regex pattern
    return checkRegex ? "Email is valid": "Email is invalid"; //Returns Validity of email
    }
    
// Exported package
module.exports = emailCheck;