//Your code here

function justInvoke(fn) {
  const result = fn();
  return result;
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}
