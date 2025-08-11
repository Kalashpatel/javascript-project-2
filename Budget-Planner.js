let income = parseInt(prompt("Enter your monthly income: "));

if(income <= 10000){
    alert("Spend cautiously and save more.....");
}else if(income > 10000 && income <= 30000){
    alert("Balanced budget....");
}else{
    alert(" Your income is great! Consider investing in SIPs.....")
}
