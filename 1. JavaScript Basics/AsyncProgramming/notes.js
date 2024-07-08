console.log("one");
console.log("two");
function hello() {
  console.log("Hello World");
}
setTimeout(hello, 2000);
console.log("three");
console.log("cour");

function sum(a, b) {
  console.log(a + b);
}

function Calculator(a, b, sumcallBack) {
  sumcallBack(a, b);
}

Calculator(1, 2, sum);

function getdata(dataId) {
  console.log(data, dataId);
}
