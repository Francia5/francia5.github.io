function palindromo () {
     var pali = "anita lava la tinA";
     var juan = pali.split("").reverse().join("");
     console.log(juan);
     
     
}

palindromo();

function palindromo (cadena) {
    var array = [];
    for(var i = cadena.length -1; i >= 0 ; i--){
        array.push(cadena[i]);
    }
console.log(array);

    var newArray = array.join("");

    console.log(newArray);
}

palindromo("anita lava la tinA");

const palindromo = (cadena) => {
    let array = [];
    for(let i = cadena.length -1; i >= 0; i--){
        array.push(cadena[i]);
    }
    let newArray = array.join("");
    console.log(newArray);
    
} 

palindromo("anita lava la tinA");