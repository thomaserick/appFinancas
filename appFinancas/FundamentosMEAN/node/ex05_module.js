console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

this.digaoi = () => {
  console.log("Diga oi");
};
