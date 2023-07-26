const firebaseConfig = {
    //   copy your firebase config informations
    /*apiKey: "AIzaSyACrVtK2yt2F_Hai0T-j6NTYKI7rr2wZgE",
    authDomain: "eshop-422b4.firebaseapp.com",
    databaseURL: "https://eshop-422b4-default-rtdb.firebaseio.com",
    projectId: "eshop-422b4",
    storageBucket: "eshop-422b4.appspot.com",
    messagingSenderId: "940899828534",
    appId: "1:940899828534:web:ed3499aa1620ae9423e997"*/
    apiKey: "AIzaSyCpzqjNYI1lDTRu2fkZZRPluC-eqIsMwfU",
    authDomain: "my-portfolio-cb78d.firebaseapp.com",
    databaseURL: "https://my-portfolio-cb78d-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-cb78d",
    storageBucket: "my-portfolio-cb78d.appspot.com",
    messagingSenderId: "187549033705",
    appId: "1:187549033705:web:45fad04edbe20f7d603c78"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };