
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  const CampusEventCarousel = document.querySelector(".carousel-inner");

  const BaruchCampusEventData = db.collection("BaruchCollege").doc("CampusEvent");
  const CarouselData = BaruchCampusEventData.collection("Carousel");

  const BARUCHButton = document.getElementById("BARUCH");


  BARUCHButton.addEventListener("click",LoadCarousel());



function LoadCarousel() {
    console.log("CarouselEvent is triggered");
    var carselID=1;
    const querySnapshot = CarouselData.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        const CarouselEvent = doc.data();
        console.log(doc.id +": "+ CarouselEvent.EventTitle);



        var imageURL = CarouselEvent.IMG;
        console.log(imageURL);
        const imageRef = storage.ref(imageURL);
        var EventImage = document.createElement('img');
        EventImage.classList.add("d-block");
        EventImage.classList.add("w-100");
        imageRef.getDownloadURL()
          .then(url => {
            EventImage.src = url;
            console.log(url);
          })
          .catch(error => {
            console.error("Error getting image URL:", error);
          });
  
  
        var CarselItem = document.createElement("div");
        CarselItem.classList.add("carousel-item");

        var EventDetail = document.createElement("div");
        EventDetail.classList.add("carousel-caption");
        EventDetail.classList.add("d-none");
        EventDetail.classList.add("d-md-block");

        var EventTitle = document.createElement("h5");
        EventTitle.append(CarouselEvent.EventTitle);
        var EventTime = document.createElement("p");
        EventTime.append(CarouselEvent.TimeStart + " - " + CarouselEvent.TimeEnd);

        if(carselID == 1){
          CarselItem.classList.add("active");
        }

        carselID = carselID + 1;

        EventDetail.append(EventTitle,EventTime);
        CarselItem.append(EventImage,EventDetail);

        CampusEventCarousel.append(CarselItem);
      })
    })
    }
