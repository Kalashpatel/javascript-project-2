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