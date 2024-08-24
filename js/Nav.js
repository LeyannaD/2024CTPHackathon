
const CunyCampusPage = document.getElementById("CUNYPAGE");
const CampusEvent = document.getElementById("CAMPUSPAGE");
const CampusPage = document.getElementById("CampusEvent")
const SupportPage = document.getElementById("SUPPORT");
const CalenderPage = document.getElementById("CALENDER");
const ClubPage = document.getElementById("CLUBACTIVITY");
const CampusLogo = document.getElementById("CampusLogo");
const CampusNavbar = document.getElementById("nav")


function goToCampus(school){
    CunyCampusPage.classList.add("hide");
    CampusEvent.classList.remove("hide");
    if(school == 'Baruch'){
        CampusLogo.src = "img/BaruchLogo.png";
        CampusNavbar.classList.add("B")
        CampusNavbar.classList.remove("JJ");
        CampusNavbar.classList.remove("Y");
    } else if(school =="JohnJay"){
        CampusLogo.src = "img/JohnJayLogo.png";
        CampusNavbar.classList.add("JJ");
        CampusNavbar.classList.remove("Y");
        CampusNavbar.classList.remove("B");
    } else if(school =="York"){
        CampusLogo.src = "img/YorkLogo.png";
        CampusNavbar.classList.add("Y");
        CampusNavbar.classList.remove("B");
        CampusNavbar.classList.remove("JJ");
    }
}

function  BackToCuny(){
    CunyCampusPage.classList.remove("hide");
    CampusEvent.classList.add("hide");
    ShowCampusEvent();
}

function ShowSupport(){
    CampusPage.classList.add("hide");
    SupportPage.classList.remove("hide");
    CalenderPage.classList.add("hide");
    ClubPage.classList.add("hide");
}

function ShowCampusEvent(){
    CampusPage.classList.remove("hide");
    SupportPage.classList.add("hide");
    CalenderPage.classList.add("hide");
    ClubPage.classList.add("hide");
}

function ShowMyCalender(){
    CampusPage.classList.add("hide");
    SupportPage.classList.add("hide");
    CalenderPage.classList.remove("hide");
    ClubPage.classList.add("hide");
}

function ShowClubActivity(){
    CampusPage.classList.add("hide");
    SupportPage.classList.add("hide");
    CalenderPage.classList.add("hide");
    ClubPage.classList.remove("hide");
}