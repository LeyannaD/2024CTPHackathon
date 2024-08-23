
const CunyCampusPage = document.getElementById("CUNYPAGE");
const CampusPage = document.getElementById("CAMPUSPAGE");

function goToCampus(){
    CunyCampusPage.classList.add("hide");
    CampusPage.classList.remove("hide");
}

function  BackToCuny(){
    CunyCampusPage.classList.remove("hide");
    CampusPage.classList.add("hide");
}