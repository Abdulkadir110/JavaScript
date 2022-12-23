let topnav = document.getElementById("topnav");
let sticky = topnav.offsetTop;
  
window.onscroll = function() {myfunction()};
  function myfunction() {
    if (window.pageYOffset >= sticky) {
      topnav.classList.add("sticky")
    } else {
      topnav.classList.remove("sticky");
    }
  }

  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }