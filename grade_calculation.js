function convertScoreToGrade(score) {
    var grade = "";
    console.log("score",score);
     switch(score) {
       case score>=90:console.log("case 1",score);
       break;
       case (score>=10 || score<=30):console.log("case 2",score);
       break;
    // case 100>=score: 
    // console.log("grade A");
    //   break;
    // case 89>=score && score>=80: grade = "B";
    //   break;
    // case 79>=score && score>=70: grade = "C";
    //   break;
    // case 69>=score && score>=60: grade = "D";
    //   break;
    // case 59>=score && score>=0: grade = "F";    
    //   break;
    // case score>100 || score<0: grade = "INVALID SCORE";
    } return grade;
   }
  //  alert(grade);   
console.log(convertScoreToGrade(92));





// function convertScoreToGrade(score) {
//  var grade = "";
//  if(score>=0){
//    grade = "F";
//  }
//  if(score>=60){
//     grade = "D";
//  }
//  if(score>=70){
//     grade = "C";
//  }
//  if(score>=80){
//    grade = "B";
//  }
//  if(score>=90){
//    grade = "A";
//  }
//  if (score>100 || score<0){
//    grade = "INVALID SCORE";
//  }
//  return grade;
// }
