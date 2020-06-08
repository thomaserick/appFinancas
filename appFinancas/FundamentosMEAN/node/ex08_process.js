function temParam() {
  return ProcessingInstruction.argv.indexOf(param) !== -1;
}

if (temParam) {
  console.log("Atenção total!!");
} else {
  console.log("Tranquilo");
}
