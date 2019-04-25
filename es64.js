// Spread

const nama = ['athariq','cresto'];
const nama2 = ['purbaya','cestro'];;

const namaBaru = [...nama, ...nama2];

console.log(namaBaru);

// Rest

function test (nilai1, nilai2, ...others){
   console.log("Nilai1 " , nilai1);
   console.log("Nilai2 " , nilai2);
   console.log("Lainnya " , others);
} 

test(1,2,3,4,5);