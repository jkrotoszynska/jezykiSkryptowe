// 4. Pobierz 2 liczby całkowite w polach tekstowych formularza i obliczający NWD tych liczb.

function NWD(a,b){
  let acc;
  while (b != 0){
    acc = a;
    a = b;
    b = acc % b;
 }
 return a;
}

function wNWD(){
    let x = document.getElementById("liczba1").value;
    let y = document.getElementById("liczba2").value;
    document.getElementById("najwikeszyWspolnyDzielnik").innerHTML = "Największy wspólny dzielnik: " + NWD(x,y);
    
}