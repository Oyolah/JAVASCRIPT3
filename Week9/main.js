// Q1
async function f(x,y) {
    console.log(x+y);
  }
  f(1,2).then();

//Q2
async function result(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}
result('oyolah')
  .then(data => console.log(data));


  //Q3
  async function calculateSum( x ,y ){
    const sum = x + y;
    if( sum>8 ){
        console.log( "larger than 8")
    }else{
        console.log( sum )
    }
}
calculateSum(7,2)
 
//Q4

async function writeDataToFile(){  
    await fetch('https://api.github.com/users/id'); 
    let data = data.map(function (x) {
     return x * 8; 
    })};
writeDataToFile(data);