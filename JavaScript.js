function myFunction() {
    x=document.getElementById("head");
    x.innerHTML = "没心情";
    x=document.getElementById("A");
    x.innerHTML = "青";
    x=document.getElementById("B");
    x.innerHTML = "清";
    x=document.getElementById("C");
    x.innerHTML = "请";
}
function change() {
    x = document.getElementById('铜');
    if(x.src.match("铜2")){
        x.src="img/铜1.jpg";
    }
    else {
        x.src="img/铜2.jpg";
    }
}