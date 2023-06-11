async function getPrediction(){
    let infor = await fetch("./predictions.json")
            .then((res) => res.text())
            .then((json) => JSON.parse(json))
    let love_index = Math.floor(Math.random() * infor.love.length);
    let money_index = Math.floor(Math.random() * infor.money.length);
    let health_index = Math.floor(Math.random() * infor.health.length);
    if(document.getElementById("showmessage") !== null){
      document.getElementById("showmessage").remove()
    }
    const predictionSpan = document.createElement("span");
    predictionSpan.setAttribute("id","showmessage")
    predictionSpan.setAttribute("class","animate__animated animate__rotateInUpLeft animate__slow")
    let button = document.getElementById("button")
    button.insertBefore(predictionSpan, button.firstChild);
    let randomMessage = document.getElementById("showmessage").innerHTML = "<i><mark>Love:</i></mark> " + infor.love[love_index] + "<br/><br/><i><mark>Money:</i></mark> " + infor.money[money_index] + "<br/><br/><i><mark>Health:</i></mark> " + infor.health[health_index];
  };
  
  document.getElementById("button").addEventListener("click", getPrediction);
