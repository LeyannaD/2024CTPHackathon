
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdSevJ5ZmYWDu5pkccpEFWjRyTnDv3blM",
    authDomain: "ctphackathon-cunynews.firebaseapp.com",
    projectId: "ctphackathon-cunynews",
    storageBucket: "ctphackathon-cunynews.appspot.com",
    messagingSenderId: "183597557455",
    appId: "1:183597557455:web:f36127597594b3a64f39ba",
    measurementId: "G-R5CJLY65FX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore();

  const CampusEventCarousel = document.querySelector(".carousel-inner");

  function updateCarousel(){
    var CarouselCount=1;
    db.collection("BaruchCollege").doc("CampusEvent").collection("Carousel").get().then((event)=>{
        
        var eventData = event.data();
        var imageURL = String(eventData.IMG-URL);
        console.log(imageURL);
        var CarselItem = document.createElement("div");
        CarselItem.classList.add("carousel-item");
        var CarselIMG = firebase.storage().ref(imageURL); 
        var EventImage = document.createElement("img");
        EventImage.src = CarselIMG;
        CarselIMG.classList.add("d-block w-100");
        var EventDetail = document.createElement("div");
        EventDetail.classList.add("carousel-caption","d-none","d-md-block");
        var EventTitle = document.createElement("h5");
        EventTitle.append(eventData.EventTitle);
        var EventDetail = document.createElement("p");
        var EventTime = String(eventData.TimeStart) + " - " + String(eventData.TimeEnd);
        EventDetail.append(EvenTime);

        EventDetail.append(EventTitle,EventDetail);
        CarselItem.append(CarselIMG,EventDetail);

        CampusEventCarousel.append(CarselItem);
    })
  }
