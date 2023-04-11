const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (let i=1;i<=5;i++) 
{
  let newData ='Block Number :'+i;
  bc.addBlock({data:newData});
}
console.log(bc);