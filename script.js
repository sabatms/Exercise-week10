
export const add = (a, b) => a + b;
export const subtract = (a, b) => `${a - b}`;
const defaultOperation = (a, b) => a * b;
export default defaultOperation;
console.log(add(2, 3));              
console.log(subtract(5, 3));         
console.log(defaultOperation(4, 3)); 


// sessionStorage.setItem('isLoggedIn', 'true');
// sessionStorage.removeItem('isLoggedIn');
// let status1 = sessionStorage.getItem('isLoggedIn');
// console.log(status1);

// sessionStorage.setItem('isLoggedIn', 'true');
// let status2 = sessionStorage.getItem('isLoggedIn');
// console.log(status2);
