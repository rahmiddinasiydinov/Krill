
let counterForm = document.querySelector('.counter');
let counterInput = document.querySelector('.counter__input');
let counterSubmit = document.querySelector('.counter__submit');
let counterResult = document.querySelector('.counter__value');
counterForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    counterResult.innerHTML = null;
    let elemValue = counterInput.value;
    let newArr = [...elemValue];
    let chosen = [];

      
     function ShChNg( arr, char2, char3, char4){
         let count = 0;
        arr.forEach(elem =>{
            if(elem == char2 ){ 
                // let num = newArr.indexOf(elem);
                let nextLetter = newArr[count+1];
                if(nextLetter == char3){
                    newArr.splice(count, 2, char4 );
                } } 
            count++;
        })
     }
  
     ShChNg(newArr, 'S', 'h', 'Ш');
     ShChNg(newArr, 's', 'h', 'ш');
     ShChNg(newArr, 'C', 'h', 'Ч');
     ShChNg(newArr, 'c', 'h', 'ч');
     ShChNg(newArr, 't', 's', 'ц'); 
     ShChNg(newArr, 'T', 's', 'Ц'); 
     ShChNg(newArr, 'O', '\'', 'Ў');
     ShChNg(newArr, 'O', '‘', 'Ў');
     ShChNg(newArr, 'o', '\'', 'ў'); 
     ShChNg(newArr, 'o', '‘', 'ў'); 
     ShChNg(newArr, 'G', '\'', 'Ғ'); 
     ShChNg(newArr, 'g', '\'', 'ғ'); 
     ShChNg(newArr, 'Y', 'a', 'Я'); 
     ShChNg(newArr, 'y', 'a', 'я'); 
     ShChNg(newArr, 'Y', 'u', 'Ю'); 
     ShChNg(newArr, 'y', 'u', 'ю'); 
     ShChNg(newArr, 'Y', 'o', 'Ё'); 
     ShChNg(newArr, 'y', 'o', 'ё'); 



     
   


    newArr.forEach(elem =>{

        let code = elem.charCodeAt();
       if(code != undefined){

        
        
        switch(code){
            case 39:
            elem = 'ъ';
            chosen.push(elem) ;break;
            case 65:
            elem = 'А';
            chosen.push(elem) ;break;
            case 66:
            elem = 'Б'; 
            chosen.push(elem) ;break;
            case 67:
            elem = 'C'; 
            chosen.push(elem) ;break;
            case 68:
            elem = 'Д'; 
            chosen.push(elem) ;break;
            case 69:
            elem = 'Е'; 
            chosen.push(elem) ;break;
            case 70:
            elem = 'Ф'; 
            chosen.push(elem) ;break;
            case 71:
            elem = 'Г'; 
            chosen.push(elem) ;break;
            case 72:
            elem = 'Ҳ'; 
            chosen.push(elem) ;break;
            case 73:
            elem = 'И'; 
            chosen.push(elem) ;break;
            case 74:
            elem = 'Ж'; 
            chosen.push(elem) ;break;
            case 75:
            elem = 'К'; 
            chosen.push(elem) ;break;
            case 76:
            elem = 'Л'; 
            chosen.push(elem) ;break;
            case 77:
            elem = 'М'; 
            chosen.push(elem) ;break;
            case 78:
            elem = 'Н'; 
            chosen.push(elem) ;break;
            case 79:
            elem = 'О'; 
            chosen.push(elem) ;break;
            case 80:
            elem = 'П'; 
            chosen.push(elem) ;break;
            case 81:
            elem = 'Қ'; 
            chosen.push(elem) ;break;
            case 82:
            elem = 'Р'; 
            chosen.push(elem) ;break;
            case 83:
            elem = 'С'; 
            chosen.push(elem) ;break;
            case 84:
            elem = 'Т'; 
            chosen.push(elem) ;break;
            case 85:
            elem = 'У'; 
            chosen.push(elem) ;break;
            case 86:
            elem = 'В'; 
            chosen.push(elem) ;break;
            case 88:
            elem = 'Х'; 
            chosen.push(elem) ;break;
            case 89:
            elem = 'Й'; 
            chosen.push(elem) ;break;
            case 90:
            elem = 'З'; 
            chosen.push(elem) ;break;
            case 97:
            elem = 'а';
            chosen.push(elem) ;break;
            case 98:
            elem = 'б'; 
            chosen.push(elem) ;break;
            case 99:
            elem = 'с'; 
            chosen.push(elem) ;break;
            case 100:
            elem = 'д'; 
            chosen.push(elem) ;break;
            case 101:
            elem = 'е'; 
            chosen.push(elem) ;break;
            case 102:
            elem = 'ф'; 
            chosen.push(elem) ;break;
            case 103:
            elem = 'г'; 
            chosen.push(elem) ;break;
            case 104:
            elem = 'ҳ'; 
            chosen.push(elem) ;break;
            case 105:
            elem = 'и'; 
            chosen.push(elem) ;break;
            case 106:
            elem = 'ж'; 
            chosen.push(elem) ;break;
            case 107:
            elem = 'к'; 
            chosen.push(elem) ;break;
            case 108:
            elem = 'л'; 
            chosen.push(elem) ;break;
            case 109:
            elem = 'м'; 
            chosen.push(elem) ;break;
            case 110:
            elem = 'н'; 
            chosen.push(elem) ;break;
            case 111:
            elem = 'о'; 
            chosen.push(elem) ;break;
            case 112:
            elem = 'п'; 
            chosen.push(elem) ;break;
            case 113:
            elem = 'қ'; 
            chosen.push(elem) ;break;
            case 114:
            elem = 'р'; 
            chosen.push(elem) ;break;
            case 115:
            elem = 'с'; 
            chosen.push(elem) ;break;
            case 116:
            elem = 'т'; 
            chosen.push(elem) ;break;
            case 117:
            elem = 'у'; 
            chosen.push(elem) ;break;
            case 118:
            elem = 'в'; 
            chosen.push(elem) ;break;
            case 120:
            elem = 'х'; 
            chosen.push(elem) ;break;
            case 121:
            elem = 'й'; 
            chosen.push(elem) ;break;
            case 122:
            elem = 'з'; 
            chosen.push(elem) ;break;
            default: 
            chosen.push(elem) ;break;
        }}
    })
    
    let count = 0;
 
    chosen = chosen.join('');
    counterResult.innerHTML=`${chosen}`
})







//remove null
console.log('removing nulls');
let array = [1, 2, null, 7, 8, null, 3, null , 'salom'];
console.log(array);
function  remove(arr){
    if(arr.includes(null)){
        let index = arr.indexOf(null);
        arr.splice(index, 1);
    }
}
function removeNull(Arr){
    let length =Arr.length;
let i = 0;
for(i ; i<length; i++ ){
    remove(Arr)
}console.log(Arr);
}
removeNull(array);


//subarrys
console.log('removing sub arrays!');

let arr = [1, [2, [3, [4,5]]]];
console.log(arr);
let result = arr.flat(Infinity)
console.log(result);