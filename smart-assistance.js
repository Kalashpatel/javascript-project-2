console.log("Select your choice of assistance....");
console.log("1.Fitness Suggestion System");
console.log("2.Monthly Budget Planner");
console.log("3.Mobile Data Usage Alert System");
console.log("4.Change password");

let choice = parseInt(prompt("Enter your choice: "));

if(choice == 1){
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
}else if(choice == 2){
    let income = parseInt(prompt("Enter your monthly income: "));

    if(income <= 10000){
        alert("Spend cautiously and save more.....");
    }else if(income > 10000 && income <= 30000){
        alert("Balanced budget....");
    }else{
        alert(" Your income is great! Consider investing in SIPs.....")
    }
}else if(choice == 3){
    let data = parseInt(prompt("Enter your data usage: "));

    if(data <= 5){
        alert("You have low usage.....");
    }else if(data > 5 && data <= 15){
        alert("You have normal usage....");
    }else{
        alert("You are a heavy data user. Upgrade your plan.....")
    }
}else if(choice == 4){
    var password = Kalash16;
    
    var oldPassword = prompt("Enter old password: ");
    var newPassword = prompt("Enter new password: ");
    var cPassword = prompt("Enter confirm new password: ");
    
    if(oldPassword === password){
    
        if(newPassword === cPassword){
            password = newPassword;
            alert("Password changed successfully....");
        }else{
            alert("New password and confirm password does not match...");
        }
    
    }else{
        alert("you have entered wrong old password.....");
    }
}

