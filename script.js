

function switchOn(){
  document.getElementById("bulb-Img").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png ";
  document.getElementById("cat-Img").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
 
  document.getElementById("switchStatus").textContent = "Switched ON";
  document.getElementById("onSwitch").style.backgroundColor="#706d6dff";
  document.getElementById("offSwitch").style.backgroundColor="#084dd7ff";
}

function switchOff(){
  document.getElementById("bulb-Img").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("cat-Img").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  
  document.getElementById("switchStatus").textContent = "Switched OFF";
  document.getElementById("onSwitch").style.backgroundColor="#084dd7ff";
  document.getElementById("offSwitch").style.backgroundColor="#706d6dff";
  
}
