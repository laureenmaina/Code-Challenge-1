function studGrade(input){
    if (input>=100 || input<0){
        console.log("Invalid" )  // does not give out a grade if the input is more than 100
    
    } else if (input>=79){
       console.log("A");
    }else if(input<79 && input>=60){
        console.log("B");
    }else if(input<=59 && input>=49){
        console.log("C"); 
    }else if(input<=49 && input>=40){
        console.log("D");
    }else if(input>=0 && input<40){
        console.log("E");
    }
}
studGrade(105) // where you call out your function with an argument(input)