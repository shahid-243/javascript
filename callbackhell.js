
            // # 10 apr 2024

// console.log("Testin1");
// console.log("Testin2");
// console.log("Testin3");
// console.log("Testin4");
// console.log("Testin5");

function testing(callback){
    callback()
}

testing(function(){
    console.log("testing1");
    testing(function(){
        console.log("testing2");
        testing(function(){
            console.log("testing3");
        })
    })
})