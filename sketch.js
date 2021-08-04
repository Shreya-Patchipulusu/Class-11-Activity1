var weights=[45,55,60,52,56]
for(var i=0;i<weights.length;i++){
  console.log(weights[i])
}
function setup() 
{
  createCanvas(400,400);
  cal_average()
}

function draw() 
{
background(51);

}
function cal_average(){
 var sum=0;

 for(var i=0;i<weights.length;i++){
   sum=sum+weights[i]
}
  var avg=sum/weights.length
  console.log(avg)

}
