function studGrade(input){
    if (input>=100){
        return "Invalid" ;} // does not give out a grade because the input is more than 100
    
    if (input>=79){
        return "A";
    }else if(input<79 && input>=60){
        return "B";
    }else if(input<=59 && input>=49){
        return "C";
    }else if(input<=49 && input>=40){
        return "D";
    }else{
        return "E";
    }
}
studGrade() // where you call out your function with an argument(input)