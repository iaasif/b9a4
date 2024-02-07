/*function signature/sample */
// 1st 
function password({ name, birthYear, siteName }) {
    //write your code here

    console.log(name, birthYear, siteName)
};

// 2nd 
function password(obj) {
    //write your code here

    console.log(name, birthYear, siteName)
};


let obj = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google ",
    bal: true,
}


password(obj);