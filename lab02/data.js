function today(){
    var date = new Date();
    var day = date.getDate();
    if(day < 10){
        day = "0" + day;
    }
    var month = date.getMonth();
    if(month < 10){
        month = "0" + month;
    }
    var year = date.getFullYear();
    var txt = day + "." + month + "." + year;
    document.getElementById("TodayDate").innerHTML = txt;
}
