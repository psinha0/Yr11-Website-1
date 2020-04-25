function buttonExecute(buttonElement){
  var buttonClickedId = buttonElement.id;
  if(buttonClickedId == 'btn1' ){
  	 document.getElementById('someheavymetalsongidk').pause();
     document.getElementById('carelesswhisper').play();
     document.getElementById('rightpanel').style.background = "url('https://s182.convertio.me/p/7heJkBQSpFpiKtPGS9jWWA/d0ddac8634ec618b5618847ca3ccc2ca/ExcfjiX.gif')";
     document.getElementById('rightpanel').style.backgroundSize = "cover";
     document.getElementById("p1").innerHTML = "The adorable GIF!. <br> Ducks casually loving each other.<br> Romantic, isn't it?";
     document.getElementById("p1").style.fontFamily = "Dancing Script";
     document.getElementById("p1").style.fontSize = "x-large";
     document.getElementById("h1").innerHTML = "Love is in the Air";
  }
  else if( buttonClickedId === 'btn2' ){
  	 document.getElementById('carelesswhisper').pause();
     document.getElementById('someheavymetalsongidk').play();
     document.getElementById('rightpanel').style.background = "url('https://im6.ezgif.com/tmp/ezgif-6-e3e4e5aebc61.gif')";
     document.getElementById('rightpanel').style.backgroundSize = "cover";
     document.getElementById('p1').innerHTML = "The not-so-adorable GIF!.<br> These ducks are at a war to see who gets Lake Quackling. Aggresively fighting each other, is this what you wanted?";
     document.getElementById('p1').style.fontFamily = "Walter Turncoat";
     document.getElementById('p1').style.fontSize = "large";
     document.getElementById("h1").innerHTML = "World War Duck";
  }
  else{
     document.getElementById('carelesswhisper').play();
  }
}
