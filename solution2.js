// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70,
//  it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points,
//  the function should print: “License suspended”.

const speedLimit=70
function speedRules(speedLimit,input){
    if(input<=speedLimit){
        return "Ok"
    }
    const demeritPoints=((input-speedLimit)/5)
    if(demeritPoints>12){
        return "Licence suspended"}
    else{
        return "Demerit Points:"+ [demeritPoints];
    }
}console.log(speedRules(70,200))

