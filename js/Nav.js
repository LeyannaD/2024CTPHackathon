
const CunyCampusPage = document.getElementById("CUNYPAGE");
const CampusEvent = document.getElementById("CAMPUSPAGE");
const CampusPage = document.getElementById("CampusEvent")
const SupportPage = document.getElementById("SUPPORT");
const CalenderPage = document.getElementById("CALENDER");
const ClubPage = document.getElementById("CLUBACTIVITY");


function goToCampus(){
    CunyCampusPage.classList.add("hide");
    CampusEvent.classList.remove("hide");
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