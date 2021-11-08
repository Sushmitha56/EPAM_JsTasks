function gradeCalculation(score) {
  var grade = "";
  switch(true)
  {      
    case 100>=score && score>=90: grade = "A";
      break;
    case 89>=score && score>=80: grade = "B";
      break;
    case 79>=score && score>=70: grade = "C";
      break;
    case 69>=score && score>=60: grade = "D";
      break;
    case 59>=score && score>=0: grade = "F";    
      break;
    case score>100 || score<0: grade = "INVALID SCORE";
  } return grade;
}
console.log(gradeCalculation(70));
console.log(gradeCalculation(990));

