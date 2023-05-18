function reinitConst() {
  const me = 1;
  console.log(me);
  me = 2;
  console.log(me);
}

reinitConst();

//1
//ERROR!
//Uncaught TypeError: Assignment to constant variable.
//at reinitConst (class1.js:4:6)
//at class1.js:8:1
//
