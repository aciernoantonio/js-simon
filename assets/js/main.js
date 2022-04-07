//visualizzare in pagina 5 numeri
let num_list = []; 

for (let a = 0; a < 5; a++){
    let randomNUm = Math.floor(Math.random() * 100) +1;
    num_list.push(randomNUm);
}


document.getElementById("remember").innerHTML = (num_list);


//toglili dopo 30 secondi

setTimeout (clearNum, 30000);

function clearNum(){
    document.getElementById("remember").innerHTML = "";
}

//inserisci i numeri che hai visto uno alla volta

let numIns = [];
let counter_try = 0;

setTimeout (addNum, 31000);

function addNum(){

    for (let i = 1; i <= num_list.length; i++){
        let insert = Number(prompt("Inserisci uno dei numeri che hai visto"));

        if(num_list.includes(insert)){
            numIns.push(insert)

            counter_try++;
        }
    }
    
   alert(`hai indovinato ${counter_try} numeri!...${numIns}`)

}


