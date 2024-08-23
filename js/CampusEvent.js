
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  const CampusEventCarousel = document.querySelector(".carousel-inner");

  const BaruchCampusEventData = db.collection("BaruchCollege").doc("CampusEvent");
  const CarouselData = BaruchCampusEventData.collection("Carousel");

  const BARUCHButton = document.getElementById("BARUCH");


  // BARUCHButton.addEventListener("click",LoadCarousel());



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
        var CarselIMG = firebase.storage().ref(imageURL); 
        
        EventImage.src = CarselIMG;
        EventImage.classList.add("d-block");
        EventImage.classList.add("w-100");
        var EventDetail = document.createElement("div");
        EventDetail.classList.add("carousel-caption","d-none","d-md-block");
        var EventTitle = document.createElement("h5");
        EventTitle.append(CarouselEvent.EventTitle);
        var EventDetail = document.createElement("p");
        var EventTime = String(CarouselEvent.TimeStart) + " - " + String(CarouselEvent.TimeEnd);

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
    <div class="carousel-item carousel-1 active">
                    <img class="d-block w-100" src="carselIMG/Designer.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>CS Career Fair on 8/23</h5>
                      <p>2:00PM - 4:00PM</p>
                    </div>
                  </div>

