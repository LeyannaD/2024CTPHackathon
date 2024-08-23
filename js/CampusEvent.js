
  // Initialize Firebase


  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const CampusEventCarousel = document.querySelector(".carousel-inner");

  function updateCarousel(){
    var CarouselCount=1;
    console.log("CarouselEvent is triggered")
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