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
    if(x.src.match("tong2")){
        x.src="img/tong1.jpg";
    }
    else {
        x.src="img/tong2.jpg";
    }
}