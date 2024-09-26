let data = [20, 12, 53, 3]

function selectionSort(){
  for (let i=0; i<data.length; i++){
    minId = i;
    for(let j=i+1; j<data.length;j++){
      if(data[j]<data[minId]){
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

function reverseSort(){
  for(let i= data.length-1; i>=0; i--){
    maxId = i;
    for(let j=i-1; j>=0; j--){
        if(data[maxId]>data[j]){
        maxId = j;            
        }
    }let temp = data[maxId];
    data[maxId] = data[i];
    data[i] = temp;
  } 
}

selectionSort(data);
console.log("After sorting: ", data)
reverseSort(data);
console.log("Reverse sorting: ", data);
