/*function signature/sample */
function deleteInvalids(array) {
    // You have to write your code here
    if (Array.isArray(array)) {

        let newArr = [];
        for (let i of array) {
            if (typeof (i) == "number") {
                newArr.push(i);
            }
            else {
                continue;
            }
        }
        // console.log(newArr);

        let filterArr = [];
        for (i of newArr) {

            if (isNaN(i)) {
                continue;
            }
            else {
                filterArr.push(i);
            }
        }
        // console.log(filterArr);

    }
    else {
        return "Invalid Array"
    }
}

// let x = ["“1”", { num: 2 }, NaN];
// deleteInvalids(x);