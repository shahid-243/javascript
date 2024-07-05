
// # 17 apr 2024
// let items = ["pen","paper","prncil"]
 
import { items as i , testing } from "./items.js";

testing()

function printItems(array){
    for (const value of array ) {
        console.log(value);
    }
}
// second method from utils.js
// import printItems from "./utils.js";

printItems(i)