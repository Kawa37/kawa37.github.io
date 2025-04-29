const al = 
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
const alNums = '0123456789' ;
const alsym = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function randomChar(str){
    return str[Math.floor(Math.random()*str.length)];
}


function main(){
    
    document.getElementById(`b`).onclick = function (){


         // Grab values as strings first
        let lenStr = document.getElementById('len').value;
        let lettersStr = document.getElementById('letters').value;
        let numsStr = document.getElementById('numbers').value;
        let symStr = document.getElementById('sym').value;
        let res = document.getElementById('res');
        let stat = document.getElementById('stat');

        let len;
        let letters;
        let nums;
        let sym;

        // if all the inputs are numbers
        if ( !isNaN(letters)  && !isNaN(nums) && !isNaN(sym) && !isNaN(len)){

            
            letters = Number(lettersStr);
            nums =Number( numsStr);
            sym =Number( symStr);


        // if the length is a number and the others are empty
        }else if ( lenStr !== '' && lettersStr == '' && numsStr == "" && symStr == '' ){
            if (isNaN(lenStr)){
                res.textContent = 'Make sure the len is a num';
                return;
            }else{
                len = Number(lenStr);
            }
            
            let k = Math.floor(len/3);
            let r = len - 3*(k);

            if (len % 2 == 0){
                

                if (  (k + k+k+r) == len ){
                    letters = k + r ;
                    nums = k;
                    sym = k;
                }else if ( (k + k+1 + k+1) == len ){
                    letters = k+1;
                    nums = k+1;
                    sym = k;
                }else{
                    console.log(`Err`);
                }


            }else{
                if ((k + k + k+ r ) == len){
                    // hello
                    letters = k + r;
                    nums = k;
                    sym = k;
                }else if ((k + k+1 + k+1) == len) {

                    letters = k+1;
                    nums = k+1;
                    sym = k;

                }else{
                    console.log(`Err`);
                }
                
            }


        // if the length is empty and the others not
        }else if (lenStr == '' && lettersStr !== '' && numsStr !== '' && symStr !== '' ){
            if (  isNaN(lettersStr) | isNaN(numsStr) | isNaN(symStr) ){
                res.textContent = 'Enter numbers';
            }

            len = Number(lettersStr)+Number(numsStr)+Number(symStr);
            letters = Number(lettersStr);
            nums = Number(numsStr);
            sym = Number(symStr);

        }else{
            stat.textContent = 'Enter more inputs';
        }
        
        
        let result = '';

        // check again if all are numbers 
        if (!isNaN(letters)  && !isNaN(nums) && !isNaN(sym) && !isNaN(len)){
            


            if (len !== letters + nums + sym){
                res.textContent = (`the length and the sum of the others don't match`);
                return;
            }

            for (let i = 0; i<nums;i++){
                result += randomChar(alNums)
            }

            for (let i = 0; i < letters; i++){
                result += randomChar(al)
            }

            for (let i = 0; i < sym; i++){
                result += randomChar(alsym)
            }
            let shuffled = result.split('').sort(() => Math.random() - 0.5).join("");
            res.textContent = shuffled;


        }else{
            res.textContent = `Enter a num`;
        }
    };
}

main();