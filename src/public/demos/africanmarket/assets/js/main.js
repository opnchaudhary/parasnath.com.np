const parallax  = document.getElementById('section1');
const screenshot = document.getElementById('screenshot');
const section2 = document.getElementById('section2');
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  if(300+0.75*this.window.innerHeight-offset<0){
    screenshot.style.top = "0 px";
  }else{
    screenshot.style.top = 300+0.75*this.window.innerHeight-offset +"px";
  }
});
  