const days = document.getElementById("days");
const btn = document.querySelector("button");
const result = document.getElementById("result");
let day;
btn.onclick = () => {
  day = parseInt(days.value);
  switch (day) {
    case 1:
      result.innerHTML = `It's Monday`;
      break;
    case 2:
      result.innerHTML = `It's Tuesday`;
      break;
    case 3:
      result.innerHTML = `It's Wednesday`;
      break;
    case 4:
      result.innerHTML = `It's Thursday`;
      break;
    case 5:
      result.innerHTML = `It's Friday`;
      break;
    case 6:
      result.innerHTML = `It's Saturday`;
      break;
    case 7:
      result.innerHTML = `It's Sunday`;
    default:
      result.innerHTML = `${day}  is not the valid Day number`;
  }
};

//grading sytem

const grade = document.getElementById("grade");
const gradeBtn = document.getElementById("grades");
const gradeResult = document.getElementById("grade-result");

let score;
gradeBtn.onclick = () => {
  score = parseInt(grade.value);
  let letterGrade;
  switch (true) {
    case score >= 90:
      gradeResult.innerHTML = `Your grade is A`;
      break;
    case score >= 80:
      gradeResult.innerHTML = `Your grade is B`;
      break;
    case score >= 70:
      gradeResult.innerHTML = `Your grade is C`;
      break;
    case score >= 60:
      gradeResult.innerHTML = `Your grade is D`;
      break;
    default:
      gradeResult.innerHTML = `Your grade is F`;
  }
};
