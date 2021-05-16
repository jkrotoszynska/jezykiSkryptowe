// 3.  Napisz funkcję pobierająca numer elementu ciągu Fibonacciego, obliczający ten element i wypisujący  w przeglądarce

function fibonacci(a){
    if(a === 0) return 0;
    else if(a === 1 || a === 2) return 1;
    else{
        return(fibonacci(a-1) + fibonacci(a-2));
    }
}

function wFibonacci(){
    let x = document.getElementById("liczba").value;
    document.getElementById("WynikFibonacciego").innerHTML= "Wartość wyrazu w ciągu, o podanym numerze, wynosi: " + fibonacci(x);
}