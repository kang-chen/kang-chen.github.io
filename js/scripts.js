var mystring = "K ++  -- C";
var myarr = mystring.split("");
var loopTimer;
function framelooper(){

if ( myarr.length > 0){
document.getElementById("type-text").innerHTML += myarr.shift();
}else{
clearTimeout(loopTimer);
                return false;
}
loopTimer = setTimeout('framelooper()',100);
}
setTimeout(function(){ framelooper(); }, 2000);
