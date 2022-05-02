var imgList = [
  "images/img01.png",
  "images/img02.png",
  "images/img03.png",
  "images/img04.png"
 ];

for(var i = 0;i < imgList.length; i++){
  var slide = document.createElement("li");
  slide.innerHTML = "<img src = '" + imgList[i] + "'>";
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);
  
  var nav = document.createElement("li");
  nav.setAttribute("data-nav-index",i);
  document.getElementsByClassName("nav")[0].appendChild(nav);
