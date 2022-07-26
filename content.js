/*
function deleteSideView()
{
  //var sideView=document.getElementById("secondary");
  var sideView=document.querySelector("#secondary");
  alert(sideView);
  sideView.remove();
}
function deleteHomePage(allDivs){
  for(let i=0;i<allDivs.length;i++){
    allDivs[i].remove();
  }
}
function getSearch(){
  var mySearch=prompt("Enter the video to be watched:");
  return mySearch;
}




var url=window.location.href;

if(url=="https://www.youtube.com/"){
  allDivs=document.querySelectorAll("div");
  deleteHomePage(allDivs);
  var search=getSearch();
  window.location.href="https://www.youtube.com/results?search_query="+search;
}
url=window.location.href;
alert(url);
if(url.startsWith("https://www.youtube.com/watch?v=")){
deleteSideView();
}*/

//window.setTimeout(deleteSideView,3000);
url=window.location.href;
if(url.startsWith("https://www.youtube.com")){window.setTimeout(function () {
  homePage=document.querySelector(".style-scope ytd-two-column-browse-results-renderer");
  homePage.remove();

  leftSideBars=document.querySelector(".style-scope ytd-guide-renderer");

  leftSideBars.remove();


  topRightBars=document.querySelector("#end");
  topRightBars.remove();
}, 1000);


//alert(homePage);



window.setTimeout(function () {
  sideBar=document.querySelector("#secondary");
  sideBar.remove();
}, 2000);
}
