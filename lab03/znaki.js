// 1. Utwórz formularz zawierający pola: imię nazwisko, email
// a) sprawdzający, czy imię i nazwisko zawiera dozwolone polskie znaki, duże pierwsze litery, 
// b) adres email jest odpowiednio sformatowany i w przypadku poprawnego wpisania wyświetla poprawne dane na stronie np alert. (może reagować na wciśnięcie przycisku) 

function poprawnosc(){
    let wynik = true;
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;

    // -------------------------------------------------------------------------------


    const reg = /[a-zA-ZąĄćĆęĘłŁóÓżŻźŹ]*/;
    const reg2 = /[a-ząężźćół]/
    const mreg = /[a-z0-9_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/;

    // -------------------------------------------------------------------------------


    if(!(reg.test(imie)) || imie.length == 0 || imie.match(/\d/)){
        document.getElementById("wImie").innerHTML = "Wprowadzono nieporawne imię";
        document.getElementById("wImie").style.color = "red";
        wynik = false;
    }

    else if(reg2.test(imie.slice(0,1))){
        document.getElementById("wImie").innerHTML = "Proszę zacząć od wielkiej litery";
        document.getElementById("wImie").style.color = "red";
        wynik = false;
    }

    else{
        document.getElementById("wImie").innerHTML = "Wprowadzono imię!";
        document.getElementById("wImie").style.color = "green";
    }

    // -------------------------------------------------------------------------------

    if(!(reg.test(nazwisko)) || nazwisko.length == 0 || nazwisko.match(/\d/)){
        document.getElementById("wNazwisko").innerHTML = "Wprowadzono nieporawne nazwisko";
        document.getElementById("wNazwisko").style.color = "red";
        wynik = false;
    }

    else if(reg2.test(nazwisko.slice(0,1))){
        document.getElementById("wNazwisko").innerHTML = "Proszę zacząć od wielkiej litery";
        document.getElementById("wNazwisko").style.color = "red";
        wynik = false;
    }

    else{
        document.getElementById("wNazwisko").innerHTML = "Wprowadzono nazwisko!";
        document.getElementById("wNazwisko").style.color = "green";
    }

    // -------------------------------------------------------------------------------

    if(!(mreg.test(email)) || email.length == 0){
        document.getElementById("wEmail").innerHTML = "Proszę podać poprawny adres e-mail";
        document.getElementById("wEmail").style.color = "red";
        wynik = false;
    }

    else {
        document.getElementById("wEmail").innerHTML="Wprowadzono adres e-mail";
        document.getElementById("wEmail").style.color="green";
    } 

    // -------------------------------------------------------------------------------

    if (wynik) {
        alert("Dane użytkownika: \n  Imię: " + imie +"\n  Nazwisko: " + nazwisko + "\n  Adres email: " + email)
    }
    else{
        alert("Wprowadzono błędne dane")
    }
}