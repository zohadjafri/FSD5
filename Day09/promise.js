const printMessage =(msg)=>{
  console.log(msg);
}
const wait = (msg,sec)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
      printMessage(msg);
      resolve();
  },sec);
  });
}
const bookTicket=()=>{
  printMessage("Welcome");
  wait("Login Sucessfully",3000)
  .then(()=>wait("seat has been selected sucessfully",2000))
  .then(()=>wait("your seat has been booked",3000))
  .then(()=>wait("your seat has been booked",4000))
  .then(()=>wait("Ticket has been confirmed",3000))
  .then(()=>printMessage("Thankyou"))
}

bookTicket();