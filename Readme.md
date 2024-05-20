# Contributing to emailcheck
If you would like to contribute to this project, refer to our contribution guide (https://github.com/monyasau/emailcheck/blob/main/CONTRIBUTING.md)
# Installation:
    npm i @monyasau/emailcheck

# Usage:

    yourCode.js:
            const emailCheck = require("@monyasau/emailcheck") //import the package
            console.log(emailCheck("whoami@earthmail.com")); // returns "Email is valid"
            console.log(emailCheck("hello world")); // returns "Email is invalid"
        These code will return:  A valid and invalid email verification respectively
