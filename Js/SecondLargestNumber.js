let arr=[3,8,4,7,9,0,1,11,12,19]
let ar=[1,2,2,4,5,5,5,6,6,6]

function findSecondLargest(arr){
    if(arr.length<2)
    return "Array should have more elements"
    let first=-Infinity,second=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first
            first=arr[i];
        }
        else if(arr[i]>second && arr[i]!=first){
            second=arr[i]
        }
    }
        return second;
}

function findSecondLargestSort(arr){
  let a= arr.sort((a,b)=>a-b);
  console.log("array",a)
    return a[arr.length-2];
    
}




console.log(findSecondLargest(ar));
console.log(findSecondLargestSort(ar))
