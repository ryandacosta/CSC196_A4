function biggerBtnClick()
{
  document.getElementById("input-text").style.fontSize = "2em";
}

function fancyShmancy()
{
  document.getElementById("input-text").style.fontWeight = "bold";
  document.getElementById("input-text").style.color = "blue";
  document.getElementById("input-text").style.textDecoration = "underline";
}

function boringBetty()
{
  document.getElementById("input-text").style.fontWeight = "normal";
  document.getElementById("input-text").style.color = "black";
  document.getElementById("input-text").style.textDecoration = "none";
}

function mooBtnClick()
{
  var str = document.getElementById("input-text").value;
  str = str.toUpperCase();
  var parts = str.split(".");
  str = parts.join("-Moo");
  document.getElementById("input-text").value = str;
}