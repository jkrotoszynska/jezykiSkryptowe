function f(){
    let x = liczba1.value;
    let y = liczba2.value;
    x = parseInt(x, 10)
    y = parseInt(y, 10)
    function NWD(a,b){
        let acc;
        while (b != 0){
          acc = a;
          a = b;
          b = acc % b;
       }
       return a;
      }
    
    alert( NWD(x,y))
}