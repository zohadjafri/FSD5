const register =()=>{
    waitForSomeTime(4000);
    console.log("Registered sucessfully");
}
const waitForSomeTime = (time)=>{
    const start=Date.now();
    while(Date.now() - start < time){

    };
}

console.log("script start");
register();
console.log("script end");