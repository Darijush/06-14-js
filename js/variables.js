const a = 5
console.log(a);

const b = 3.565
console.log(b);

const c = -56
console.log(c);

const str1 = 'labas'
console.log(str1);

const str2 = 'rytas'
console.log(str2);

const str3 = 'vakaras'
console.log(str3);

const arr1 = [5,8,2,9,3]
console.log(arr1);

const arr2 = [25,89,46,-4,0.23]
console.log(arr2);

const arr3 = [-55.2,88,3,99,75]
console.log(arr3);

const rez1 = a + b;
console.log(rez1);

const rez2 = a + b + c;
console.log(rez2);

const rezstr1 = str1 + ' ' + str2 + ' ' + str3;
console.log(rezstr1);


function sumEvens (arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (i % 2 === 0) {
      sum = sum + arr1[i];
      } else{
        sum = sum - arr1[i];
      }
    }
    return sum;
  }
  console.log(sumEvens(arr1));
  console.log(sumEvens(arr2));
  console.log(sumEvens(arr3));
  
  function reoder(str){
  const newarr=[]
  for (i = str.length-1; i>=0;i--){
     newarr.unshift(str[i]);
  }
  return newarr
}
console.log(reoder(arr1).join(', '));

const d = 2;
const e = 5;

if (d > e) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

function long(dta){
    const result = dta.length;
    return result
}

console.log(long(str1));
console.log(long(str2));
console.log(long(str3));

const strar1 = ['diena', 'naktis', 'vakaras', 'rytas'];

if (long(str1) > long(str2)) {
    console.log('Pomidoras');
} if (long(str1) < long(str2)){
    console.log('agurkas');
} if (long(str1) == long(str2)){
    console.log('salotos');
}
    else {
    console.log('Bandykite kitą kartą.');
}

function arlong(ndta){
    return ndta.map(w => w.length)
}
console.log(arlong(strar1));
