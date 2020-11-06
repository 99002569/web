function validationForm()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }else if(document.getElementById("pass").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    else if(validatePassword()){
        alert("Enter Password");
        document.myform.password.focus();
    }
    else if(document.getElementById("phone").value==""){
        alert("Enter your phone number");
        document.myform.phone.focus();
    }else if(document.getElementById("email").value==""){
        alert("Enter your Email ID");
        document.myform.emailID.focus();}
    else if(validateEmail()){
        alert("Enter a valid email");
        document.myform.emailID.focus();
    }
    else if(validatePhone()){
        alert("Enter a valid Phone number");
        document.myform.phone.focus();
    }
    else{
        validateUser();
     } 
}
    
   function validateUser(){
    var resname = ["john", "tom", "morris"];
        urname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<resname.length; i++)
        {
            if (!urname.localeCompare(resname[i])){
            alert("Username exists, choose a diffrent name");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            resname.push(urname);
            alert("Registration is successful");
            document.myform.submit();
        } 
   }
   function validatePassword(){
    
            var str = document.getElementById("pass").value; 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) 
                return false;
    
            else 
                return true; 
    
   }

   function validateEmail()  
    {
    var str = document.getElementById("email").value; 
            if (str.match(/@/g)  )
                return false;
    
            else 
                return true; 
} 
function validatePhone(){
    var str = document.getElementById("phone").value; 
    if(str.match(/[0-9]/g) && str.length==10)
        return false;
        else
        return true;
}