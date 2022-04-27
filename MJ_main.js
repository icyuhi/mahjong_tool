// ダイスロール
let count;
let $id = function(id){ return document.getElementById(id); };
function role(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    dice1a = "dice" + dice1 + ".png";
    $id("dice1").innerHTML = "<img src='" + dice1a + "' width='60%' height='60%'>";
    let dice2 = Math.floor(Math.random() * 6) + 1;
    dice2a = "dice" + dice2 + ".png";
    $id("dice2").innerHTML = "<img src='" + dice2a + "' width='60%' height='60%'>";
    $id("dice_total").innerHTML = dice1 + dice2;
// 東南西北
    let dt = (dice1 + dice2);
      if(dt == 5 || dt == 9 ) {
        $id("ESWN").innerHTML = "<img src='ESWN1.png' width='50%' height='50%'>";
        }
      else if(dt == 2 || dt == 6 || dt == 10 ) {
        $id("ESWN").innerHTML =　"<img src='ESWN2.png' width='50%' height='50%'>";
        }
      else if(dt == 3 || dt == 7 || dt == 11) {
        $id("ESWN").innerHTML =　"<img src='ESWN3.png' width='50%' height='50%'>";
        }
      else{
        $id("ESWN").innerHTML =　"<img src='ESWN4.png' width='50%' height='50%'>";
        }
}
function anime(){
  if(count > 20) {
      count = 0;
      $id("btn1").disabled = "";
      return 0;
    }
  role();
  count++;
  setTimeout(anime, 30);
}
function dice_roller(){
    count = 0;
    $id("btn1").disabled = "true";
    anime();
}
window.onload = function(){
      role();
}
