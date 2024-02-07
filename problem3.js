/*function signature/sample */
function deleteInvalids(array) {
    // You have to write your code here

    let newArr;
    for (let i of array) {
        if (typeof (i) == "number") {
            newArr.push(i);
        }
        else {
            continue;
        }
    }
    console.log(newArr.reversed());
}

let x = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
deleteInvalids(x);