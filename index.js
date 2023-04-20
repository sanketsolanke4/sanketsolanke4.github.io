function myfunction(){
    document.getElementById("mytopnav").classList.toggle("responsive");
    
}
//navbar sticky
window.onscroll = function() {myFunction()};


var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mytopnav.classList.add("sticky")
  } else {
    mytopnav.classList.remove("sticky");
  }
}

GitHubCalendar(".calendar", "sanketsolanke4");
// or enable responsive functionality
GitHubCalendar(".calendar", "sanketsolanke4", { responsive: true });

function resume(){
  window.open("https://drive.google.com/file/d/1P4yUP7L26RuoF7DKPpQr0KVFFMM8rWVe/view?usp=share_link", "_blank");
}