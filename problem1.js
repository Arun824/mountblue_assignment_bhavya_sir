// Problem 1:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously


const fs = require("fs")


const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}

const jsonString = JSON.stringify(customer)

function problem1(directory) {

    fs.mkdir(directory, { recursive: true }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("New directory successfully created.");

            fs.writeFile(`${directory}/jsonFile.json`, JSON.stringify({ name: "arun", age: 25 }), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')

                    fs.unlink(`${directory}/jsonFile.json`, err => {
                        if (err) {
                            console.log('Error writing file', err)
                        } else {
                            console.log('files/newCustomer.json was deleted')

                        }
                    })

                }
            })

        }
    })

}







module.exports = problem1;