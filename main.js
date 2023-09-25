
let arr0 = []
function RandomNumberPushMassForMass0(arr0,number,min,max){
   for(let i=0;i<number;i++){
    arr0[i] = Math.round( Math.random() * (max-min)+min );
    console.log(`МАСИВ 1 - Елемент- ${[i]}, Значення - ${arr0[i]}`)
    }
}
RandomNumberPushMassForMass0(arr0,3,-10,2)

console.log('------------------------------------')

let arr1 = []
function RandomNumberPushMassForMass1(arr1,number,min,max){
    for(let i=0;i<number;i++){
     arr1[i] = Math.round( Math.random() * (max-min)+min );
     console.log(`МАСИВ 2 - Елемент- ${[i]}, Значення - ${arr1[i]}`)
     }
 }
RandomNumberPushMassForMass1(arr1,5,-1,25)


//2
function average(arr1){
    let sum =0
    for(let i = 0; i<arr1.length; i++){ // Сума
        sum += arr1[i]
    }

    let avr =0
    avr = sum / arr1.length // арфм

    let count = 0 
    for(let i = 0; i<arr1.length; i++){ // те, що більше за сер.арф
        if(arr1[i] > Math. floor(avr)){
            count++
        }
    }

    console.log(`Сума - ${sum}, Середнє арф - ${avr}, К-сть чисел, які більші за середнє арифметичне - ${count}`)
    return avr
}
//average(arr1)


//3 
function sumOfTwoArrays(arr0,arr1){
    let sum = 0
    let arr2= []

    if(arr0.length !== arr1.length){
        console.log('Масиви різної довжини')
    }else{
        for(let i=0 ; i<arr0.length; i++){
            sum = arr0[i]+arr1[i]
            arr2.push(sum)
        }
    console.log(`Сума елементів з двох масивів - ${arr2}`)
    }
}
//sumOfTwoArrays(arr0,arr1)


//4
function concatenation(arr0,arr1){
    let arr2 = ''
    let sum = 0
    const minLength = Math.min(arr0.length, arr1.length);

    for(let i =0 ; i<minLength; i++){
        arr2 += arr0[i];
        arr2 += arr1[i];
    }
    if (arr0.length > minLength) {
        arr2 += arr0.slice(minLength).join('')
    }else if (arr1.length > minLength) {
        arr2 += arr1.slice(minLength).join('')
    }
    console.log(`Конкатенація - ${arr2}`)   
}
//concatenation(arr0,arr1)

//5
function swichMinMax(arr0){
    let minIndex = 0;
    let maxIndex = 0;
    let minValue = arr0[0];
    let maxValue = arr0[0];

    console.log(`Початковий масив ${arr0}`)

    for (let i = 1; i < arr0.length; i++) {
        if (arr0[i] < minValue) {
            minValue = arr0[i];
            minIndex = i;
        }
        if (arr0[i] > maxValue) {
            maxValue = arr0[i];
            maxIndex = i;
        }
    }
    const temp = arr0[minIndex];
    arr0[minIndex] = arr0[maxIndex];
    arr0[maxIndex] = temp;
    
    console.log(`Масив після зміни  ${arr0}`)
}
//swichMinMax(arr0)

//6 
function separationArray(arr0){
    let arrayPlus =[]
    let arrayMinus =[]

    for(let i=0; i<arr0.length; i++){
        if(arr0[i]< 0){
            arrayMinus.push(arr0[i])
        }if(arr0[i]>=0){
            arrayPlus.push(arr0[i])
        }
    }
    console.log(`Масив : ${arr0} , Від'ємні числа : ${arrayMinus}, Додатні числа : ${arrayPlus}`)
}
//separationArray(arr0)

//7
function deleteDuplicate(arr0){
    let min = Math.min(...arr0);
    let max = Math.max(...arr0);

    for (let i = arr0.length - 1; i >= 0; i--) {
        if (arr0[i] === min || arr0[i] === max) {
            arr0.splice(i, 1);
        }
    }
    console.log(arr0)
}
let temp = [0,1,2,3,4,0,4,4]
//deleteDuplicate(temp)

//8
function createArrayBetweenAverages(arr0,arr1) {

    let resultArray = [];
    let avrFirstArray = average(arr0)
    let avrSecondArray =average(arr1)
    let minAverage = Math.min(avrFirstArray, avrSecondArray);
    let maxAverage = Math.max(avrFirstArray, avrSecondArray);

    for (let i = 0; i < arr0.length; i++) {
        if (arr0[i] >= minAverage && arr0[i] <= maxAverage) {
        resultArray.push(arr0[i]);
        }   
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= minAverage && arr1[i] <= maxAverage) {
            resultArray.push(arr1[i]);
        }
    }
    console.log(`Середє значення 1го масива : ${avrFirstArray} , Середнє значення другого масива : ${avrSecondArray} , результат : ${resultArray}`)
}
//createArrayBetweenAverages(arr0,arr1)