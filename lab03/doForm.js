// Utwórz formularz zawierający pola: imię nazwisko, email
// a) sprawdzający, czy imię i nazwisko zawiera dozwolone polskie znaki, duże pierwsze litery, 
// b) adres email jest odpowiednio sformatowany i w przypadku poprawnego wpisania wyświetla poprawne dane na stronie np alert. (może reagować na wciśnięcie przycisku) 

function f(){
    polskie = ["ę", "ó", "ą", "ś", "ł", "ż", "ź", "ć", "ń"] 
    let x = dane1.value;
    if(x[0] != x[0].toUpperCase()){
        x.slice(1)
        if(x != x.toLowerCase()){
            p1.innerHTML("BŁĄDDDD")
        }
    }
}