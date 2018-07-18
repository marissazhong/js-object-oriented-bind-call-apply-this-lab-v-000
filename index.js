//Your code here

function justInvoke(fn) {
  const result = fn();
  return result;
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, arg);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  let fnCopied = functionToBeCopied.bind(thisValue);
  return fnCopied();
}

// let fred;
// let functionToBeCopied;
// functionToBeCopied = function (){return this};
// fred = { name: 'fred'};
// console.log(returnNewFunctionOf(functionToBeCopied, fred));
