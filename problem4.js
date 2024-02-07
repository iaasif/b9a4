/*function signature/sample */
// 1st 
function password(obj) {
    //write your code here

    console.log(obj)
    // Google#kolimuddin@1999
    let str = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
    console.log(str);
    // let newStr = str.charAt(0).toUpperCase();
    // console.log(new);
    newStr = str.charAt(0).toUpperCase() + str.slice(1);

    console.log(newStr);

};



let object = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google",
    bal: true,
}


password(object);