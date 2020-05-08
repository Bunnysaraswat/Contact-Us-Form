function validate(){
  var title = document.getElementById("title").value;
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(title.length > 4){
    text = "Please enter a valid title";
    error_message.innerHTML = text;
    return false;
  }
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(pass.length < 8){
    text = "Please Enter Correct Password";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(address.length <= 14){
    text = "Please Enter More Than 14 Characters in Address";
    error_message.innerHTML = text;
    return false;
  }
  else{
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>Title: </b>" + document.getElementById("title").value;
    message += "<li><b>Name: </b>" + document.getElementById("name").value;
    message += "<li><b>Phone: </b>" + document.getElementById("phone").value;
    message += "<li><b>Email: </b>" + document.getElementById("email").value;
    message += "<li><b>Password: </b>" + document.getElementById("pass").value;
    message += "<li><b>Address: </b>" + document.getElementById("address").value + "</ul>";
    DispWin.document.write(message);
    return false;
  }
}
