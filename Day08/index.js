const generatorAge =()=>{
    const ccurrentDate = new Date();
    const dob = document.getElementById('dob').value;
    
    const currentDateYear= currentDate.getFullYear();
    const dobYear = birttDate.getFullYear();

    console.log(currentDateYear - dobYear);
}