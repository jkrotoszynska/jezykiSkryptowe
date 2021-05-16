// 2. Pobierz 7 liczb jednocyfrowych z pola tekstowego, zapisz do tablicy 7-elementowej JavaScript, znajdź element największy i wypisz  go na stronie HTML pod polem tekstowym. Użyj Funkcji

function maksimum(){
    let acc = [];
    let x = document.getElementById("siedem").value;
    let liczby = x.split(' ');

    for(let i = 0; i < 7; i++){
        acc.push(liczby)
    };

    let max = Math.max(...liczby);

    document.getElementById("tab").innerHTML = "Maksiumum z tablicy " + liczby + " to " + max;
}

