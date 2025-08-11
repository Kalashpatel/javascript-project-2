let age = parseInt(prompt("Enter your age: "));

if(age > 0 && age <= 10){

    let weight = parseFloat(prompt("Enter your weight: "));
    if(weight <= 10){
        alert("You should gain weight.....");
    }else if(weight > 10 && weight <= 32){
        alert("You are fit....");
    }else{
        alert("You should loose weight....")
    }

}else if(age > 10 && age <= 20){

    let weight = parseFloat(prompt("Enter your weight: "));
    if(weight <= 32){
        alert("You should gain weight.....");
    }else if(weight > 32 && weight <= 56){
        alert("You are fit....");
    }else{
        alert("You should loose weight....")
    }

}else{

    let weight = parseFloat(prompt("Enter your weight: "));
    if(weight <= 54){
        alert("You should gain weight.....");
    }else if(weight > 54 && weight <= 70){
        alert("You are fit....");
    }else{
        alert("You should loose weight....")
    }

}