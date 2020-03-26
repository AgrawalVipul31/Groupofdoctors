

  var r=1255255;
  var g=3500000;
  var result=r/g*100;
  document.getElementById('progress100').style.width = result +'%'  ;

function myFunction1() {
document.getElementById("home-tab").style.borderBottom = "2px solid red";
document.getElementById("profile-tab").style.borderBottom = "2px solid white";


}
function myFunction2() {
document.getElementById("profile-tab").style.borderBottom = "2px solid red";
document.getElementById("home-tab").style.borderBottom = "2px solid white";

}

function copyToClipboard(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).html()).select();
document.execCommand("copy");
$temp.remove();
}
