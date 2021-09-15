const {readFile, writeFile} = require("fs");
// const fs = require("fs");


// No utf8
readFile("./content/first.txt", (err, results) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(results);
})




readFile("./content/first.txt", "utf8", (err, results) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(results);
})



console.log("Start - Here!");
readFile("./content/first.txt", "utf8", (err, results) =>{
    if(err){
        console.log(err);
        return
    }
    const first = results;

    readFile("./content/second.txt", "utf8", (err, results) =>{
        if(err) {
            console.log(err);
            return
        }
        const second = results;

        writeFile("./content/result_async_2.txt",
        `Here is the results: ${first}, ${second}`,
        (err, results) => {
            if(err) {
                console.log(err);
                return
            }
            // console.log(results);
            console.log("Done with this task!");
        })
    })
})

console.log("Starting next task!");