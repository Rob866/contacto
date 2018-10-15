
 $(document).ready(function(){


    $( "#seeModal" ).click(function() {
        $("#modal").animate({top:"0"})
        
    });

    $( "#cerrar" ).click(function() {
        $("#modal").animate({top:"-100vh"})
        
    });

    //perfil
    $(".viewMore_click").click(function(){
        $(" .main .about-mov").animate({top:"0"})
        $(" .main .image-mov").animate({left:"100%"})
        $(" .main .info-mov").animate({left:"100%"})
        $(" .main .details-mov").animate({top :"65%"})

    }
    );

    $(".close_click").click(function(){
        $(" .main .about-mov").animate({top:"-100%"})
        $(" .main .image-mov").animate({left:"0"})
        $(" .main .info-mov").animate({left:"0"})
        $(" .main .details-mov").animate({top :"100%"})
    });




})
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVKAt2VkKUX3DuS7g__GKZ1vbKP4saN1o",
    authDomain: "contactform-66d64.firebaseapp.com",
    databaseURL: "https://contactform-66d64.firebaseio.com",
    projectId: "contactform-66d64",
    storageBucket: "contactform-66d64.appspot.com",
    messagingSenderId: "612157520856"
  };

  firebase.initializeApp(config)
  var messagesRef = firebase.database().ref("messages");

 //Listen for  form submit
document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var  phone= getInputVal("phone");
  var message = getInputVal("message");
  //save message
  saveMessage(name,company,email,phone,message);
  // show alert 
  document.querySelector(".alert").style.display ="block";
  //hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display ="none";
  },3000);
  //clear form
  document.getElementById("contactForm").reset();
 }

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,company,email,phone,message){
 var newMessagesRef = messagesRef.push();
 newMessagesRef.set({
     name: name,
     company :company,
     email : email,
     phone: phone,
     message : message

 });

}