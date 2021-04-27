// 3.  Napisz funkcję pobierająca numer elementu ciągu Fibonacciego, obliczający ten element i wypisujący  w przeglądarce

function f(){
    let x = liczba1.value;
    x = parseInt(x, 10)
    if(x < 2){
        return 1
    }
    else{ 
        wynik = (x-2)+(x-1)
        alert(wynik)
        return wynik
    }
}