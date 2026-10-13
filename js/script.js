function changeImage (fileName) {
  let img = document.querySelector(".current-image");
  img.setAttribute("src", fileName);
} /*unused?*/

function openTab(evt, tabName) {
  let i, tabcontent, stagecontent, removeactive, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  stagecontent = document.getElementsByClassName("stagecontent");
  for (i = 0; i < stagecontent.length; i++) {
    stagecontent[i].style.display = "none";
  }
  removeactive = document.getElementsByClassName("stagelinks active");
  for (i = 0; i < removeactive.length; i++) {
    removeactive[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openDayTab(evt, tabName) {
  let i, stagecontent, tablinks;
  stagecontent = document.getElementsByClassName("stagecontent");
  for (i = 0; i < stagecontent.length; i++) {
    stagecontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("stagelinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}