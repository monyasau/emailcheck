 const emailCheck=(data)=>{
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let checkRegex = emailRegex.test(data);
if (checkRegex===true) {
    return "Email is valid"
} else {
    return  "Email is invalid"
}

}
module.exports = emailCheck;
