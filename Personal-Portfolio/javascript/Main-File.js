function move(){
  let v1 = document.getElementById("slide");
  let v2 = document.getElementById("p2");
  let v3 = document.getElementById("p3");
  let v4=document.getElementById("pa1");
  v4.innerText=`I am \n program \n developer`
  v4.style.opacity=`1`;
  changeOpacity("pa1",0,1,0,0);
 
  changeOpacity("pa1",1,-1,3000,3);
  v2.style.opacity=`0`;
  v2.style.transition=`opacity 4s`;
  v1.style.transform=`translateX(-70%)`;
  v1.style.transition='transform 3s';
  v3.style.opacity=`1`;
  v3.style.transition=`opacity 4s`;
}

function move1(){
  let v1 = document.getElementById("slide");
  let v2 = document.getElementById("p3");
  let v3 = document.getElementById("p2");
  let v5=document.getElementById("pa1");
  let v4=document.getElementById("pa1");
  v4.innerText=`I am \n web \n developer`

  v1.style.transform=`translateX(0%)`;
  v1.style.transition='transform 3s';
  v3.style.opacity=`1`;
  v3.style.transition=`opacity 4s`;
  v2.style.opacity=`0`;
  v2.style.transition=`opacity 4s`;
  let em = window.getComputedStyle(v4).getPropertyValue("opacity");

  changeOpacity("pa1",0,1,0,0);
 
  changeOpacity("pa1",1,-1,3000,3);
}

function changeOpacity(elementId, targetOpacity, increment, delay, num) {
  const element = document.getElementById(elementId);
  let currentOpacity = parseFloat(window.getComputedStyle(element).opacity);
  const changeOpacityInterval = setInterval(() => {
    
    if(currentOpacity==0){
    element.style.transition=`opacity ${num}s`;
    }
      if (currentOpacity > targetOpacity) {
          currentOpacity -= increment;
      } else if (currentOpacity < targetOpacity) {
          currentOpacity += increment;
      } else {
          clearInterval(changeOpacityInterval);
      }
      element.style.opacity = currentOpacity;
      
  }, delay);
}

