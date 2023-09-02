const $button = document.getElementsByTagName('button');;
const $result = document.getElementById('result');
let saveNum = 0;
let num=[];
let lastNum = 0;
let resultNum = 0;
// $result.textContent = 0;
function plus(){
    digit = num.length;
    for(let c=0;c<digit;c++){
        saveNum+=num[c]*(10**(digit-c-1));
        console.log(num[c],saveNum,c+1)
    }
    resultNum += saveNum
    num=[];
}

for(let i=0;i<$button.length;i++){
    $button[i].addEventListener('click',()=>{        
        if($button[i].textContent=="="){
            plus();
            resultNum = saveNum+lastNum;
            $result.textContent = `result: ${resultNum}`;
        }else if($button[i].textContent=="+"){
            $result.textContent += "+";
            plus();
            console.log(saveNum);
        }else{
            num.push($button[i].textContent);
            $result.textContent += $button[i].textContent;
            console.log(num)
        }
    })
}

// console.log($button[0])