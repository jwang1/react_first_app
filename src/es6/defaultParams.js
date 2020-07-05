/* eslint-disable no-undef */
function go() {
  return ":)";
}

function a1(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value
) {
  return [a, b, c, d, e, f, g];
}

// result:
//         [ undefined, 5, 5, ':)', {value: 'happy'}, {}, 'happy' ]
console.log(a1.call({ value: "happy" }));

console.log("testing ES6 features....");

console.log(a1.call({ value: "happy" }, []));
