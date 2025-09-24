const add = (a, b, c = 0) => {
  return a + b + c;
};
console.log(add(1, 2, 3)); 
console.log(add(1, 2));    

const greet = (fname, lname, mname = "") => {
  console.log(`Hello ${fname} ${mname} ${lname}`);
};

greet("First", "Last");          
greet("First", "Last", "Middle"); 
