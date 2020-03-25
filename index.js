function greet(name) {
    //test if single string
    if (typeof name === "string" ) {
        return greetSingleName(name)
    }
    //test if array
    if (Array.isArray(name)){
        return greetMultipleNames(name)
    }
    //name is falsy
    return `Hello, my friend.`
}

function greetSingleName(name) {
    if (name.toUpperCase() === name){
        // Name is upper case
        return `HELLO ${name}!`
    } else {
        // Name is not upper case
        return `Hello, ${name}.`;
    }  
}

function greetMultipleNames(nameArray) {
    if (nameArray.length === 2){
        return `Hello, ${nameArray[0]} and ${nameArray[1]}.`
    } 
    if (nameArray.length > 2) {
        let initialString = "Hello, ";
        // for (let i = 0; i < nameArray.length - 1; i++){
        //     initialString += `${nameArray[i]}, `;
        // }
        // initialString += `and ${nameArray[nameArray.length - 1]}.`;
        // return initialString;

        nameArray.forEach((element,index) => {
            if (index === nameArray.length - 1){
                initialString += `and ${element}.`
            } else {
                initialString += `${element}, `
            }
        })
        return initialString;
    }

}


module.exports = greet;