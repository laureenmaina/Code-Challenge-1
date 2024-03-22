// Write a program that prompts the user to input student marks. The input should be between 0 and 100. 
// Then output the correct grade: 
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

function studGrade(input){
    if (input>=100){
        return "Invalid" ;}
    
    if (input>=79){
        return "A"
    }else if(input<79 && input>=60){
        return "B"
    }else if(input<=59 && input>=49){
        return "C"
    }else if(input<=49 && input>=40){
        return "D"
    }else{
        return "E"
    }
}
studGrade()