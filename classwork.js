let anArray = [ ]

let base = anArray.indexOf(anArray)
console.log(base);

const size = anArray.length
console.log(size);

function isFull(){
    if(size-base===1){
        console.log('the array is full');
    }
}

isFull()

function isEmpty(){
    if(base===-1){
        console.log('the array is empty');
    }
}

isEmpty()

function pushToArray(base, number ){
   if(size-base===1){
    console.log('the array is full');
   }
   else{
     base = base + 1;
     return base
     console.log(base);
   }
}

pushToArray()

function popToArray(){
    if(size-base===1){
    console.log('array is empty can not pop');
    }else{
        console.log('can be poped into array');
        base  = base - 1;
        return base
        console.log(base);
    }
}

popToArray()

function clearArray(){
    if(size-base === 1){
    console.log('array is empty can not clear');
    }else{
    console.log('the array has been cleared');
    size = size - size;
    return size
    console.log(size);
    }
}

clearArray()

function searchArray(){
    if(size-base===1){
    console.log('array is empty can not search');
    }else{
        console.log('can search from the array');
        size = size - size[whatYouWantToSearch]
    }
}

searchArray()

function pickFromArray(){
    if(size-base===1){
    console.log('array is empty can not pick');
    }else{
        console.log('can pick from the array');
        
        size.length = size - size[whatYouWantToPick]
    }
}