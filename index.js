const emailCheck=(data)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkRegex = emailRegex.test(data);
    return checkRegex ? "Email is valid": "Email is invalid";
    }
    
// export default emailCheck;
module.exports = emailCheck;