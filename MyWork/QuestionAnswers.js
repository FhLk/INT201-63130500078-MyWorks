let question = [5]; // สร้าง Array เก็บโจทย์ 5 ข้อ
question[0] = {
  // ข้อที่ 1
  QuestionNo: 1,
  topic: "What is 1+1 ?", //โจทย์
  addChoice: [
    { No: 1, Item: "1" }, //Choice 1
    { No: 2, Item: "3" }, //Choice 2
    { No: 3, Item: "2" }, //Choice 3
    { No: 4, Item: "4" }, //Choice 4
  ],
  setCorrectAnswers: 3, // set คำตอบ
};

question[1] = {
  // ข้อที่ 2
  QuestionNo: 2,
  topic: "What is 50-5 ?", //โจทย์
  addChoice: [
    { No: 1, Item: "45" }, //Choice 1
    { No: 2, Item: "100" }, //Choice 2
    { No: 3, Item: "15" }, //Choice 3
    { No: 4, Item: "20" }, //Choice 4
  ],
  setCorrectAnswers: 1, // set คำตอบ
};

question[2] = {
  // ข้อที่ 2
  QuestionNo: 3,
  topic: "What is 5+5 ?", //โจทย์
  addChoice: [
    { No: 1, Item: "3" }, //Choice 1
    { No: 2, Item: "5" }, //Choice 2
    { No: 3, Item: "10" }, //Choice 3
    { No: 4, Item: "15" }, //Choice 4
  ],
  setCorrectAnswers: 3, // set คำตอบ
};
question[3] = {
  // ข้อที่ 2
  QuestionNo: 4,
  topic: "What is 10/2 ?", //โจทย์
  addChoice: [
    { No: 1, Item: "3" }, //Choice 1
    { No: 2, Item: "5" }, //Choice 2
    { No: 3, Item: "10" }, //Choice 3
    { No: 4, Item: "15" }, //Choice 4
  ],
  setCorrectAnswers: 2, // set คำตอบ
};
question[4] = {
  // ข้อที่ 2
  QuestionNo: 5,
  topic: "What is Pi on Math ?", //โจทย์
  addChoice: [
    { No: 1, Item: "24/7" }, //Choice 1
    { No: 2, Item: "2.5" }, //Choice 2
    { No: 3, Item: "11" }, //Choice 3
    { No: 4, Item: "4.85" }, //Choice 4
  ],
  setCorrectAnswers: 1, // set คำตอบ
};

let point = 0;
let player = {
  name: "Paramat", // set Name
  selectQuestion: 1, // เลือกคำถาม
  selectChoice: 3, // เลือก Choice
  Point: function () {//คะแนนที่ได้จากค่า return ของ function
          //ถ้า Choice ที่เราเลือก มีค่าเท่ากับ คำตอบที่ set ไว้ใน question ที่ [คำถามที่เราเลือก - 1]
    if (this.selectChoice == question[this.selectQuestion - 1].setCorrectAnswers) {
              // return point สะสมไปเรื่อย ๆ ถ้าตอบถูก
      return (point += 1);
    }
  },
};

//แสดง player 2 รอบ
console.log(
  "Name: " +
    player.name +
    "\n" +
    "QuestionNo: " +
    player.selectQuestion +
    "\n" +
    "Choice: " +
    player.selectChoice +
    "\n" +
    "Point: " +
    player.Point()
);

console.log(
  "Name: " +
    player.name +
    "\n" +
    "QuestionNo: " +
    player.selectQuestion +
    "\n" +
    "Choice: " +
    player.selectChoice +
    "\n" +
    "Point: " +
    player.Point()
);
