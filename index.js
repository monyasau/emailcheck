 const emailCheck=(data)=>{
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let checkRegex = emailRegex.test(data);
return checkRegex ? "Email is valid": "Email is invalid";
}
module.exports = emailCheck;
