/*function signature/sample */
// 1st 
function password(obj) {
    //write your code here
    // if(typeof obj.name == 'string' && obj.birthYear.toString().length == 4 && typeof siteName == 'string'){


    // }

    if ('name' in obj && 'birthYear' in obj && obj.birthYear.toString().length == 4 && 'siteName' in obj) {

        // console.log(obj)
        // Google#kolimuddin@1999
        let str = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
        // console.log(str);
        // let newStr = str.charAt(0).toUpperCase();
        // console.log(new);
        newStr = str.charAt(0).toUpperCase() + str.slice(1);

        return newStr;
    }
    else
        // console.log("invalid");
        return "invalid";
};
