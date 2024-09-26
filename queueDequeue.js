let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(addElement){
  if(currentSize>=maxSize){
    alert("Queue is full")
  } else {
    queue[currentSize] = addElement;
    currentSize++;
  }
}

function display(){
  console.log(queue);
}

function dequeue(){
  if(currentSize>0){
    for(let i=0; i<queue.length; i++){
      queue[i]=queue[i+1];
    }
    currentSize --;
    queue.length = currentSize;
    
  } else {
    alert("Queue is empty")
  }
}

function front(){
  if(currentSize>0){
    console.log(queue[0]);
  } else {
    alert("Queue is empty")
  }
}

function rear(){
  if(currentSize>0){
    console.log(queue[currentSize-1]);
  } else {
    alert("Queue is empty")
  }
}