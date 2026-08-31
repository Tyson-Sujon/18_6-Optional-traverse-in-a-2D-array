/**
 * ata akta 2d array
 * e.g: 
 * const exam_marks = [
  [10, 20, 30, 40],
  [70, 80, 90, 100]
];
 *
 *exam_marks
   ↓
   [0] → [10, 20, 30, 40]
   [1] → [70, 80, 90, 100]
 * 
 * exam_marks[0]=[10, 20, 30, 40] aita array akare show kore
 * 
 */

const numbers = [1, 2, 5, 4, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
  [98, 87, 45, 12, 63],
  [54, 89, 74, 23, 11],
  [45, 87, 12, 56, 45],
  [78, 65, 32, 87, 54],
];
// using variable how to show the code

const forOneNumber = exam_marks[0][1];
console.log(forOneNumber);
/**
 * exam_marks[1][3].pop();
 * aita hobe na
 * karon,pop() holo array method
 * echara o sas er ta pop kore
 * last holo ata nested array na
 * r.g: nestedArray =[7,9,90[23,25,210]]
 * r amra kaj kortesi @ dimentional array nea
 *
 */
//pop a value of 2nd row array
exam_marks[1].pop();
console.log(exam_marks);

//push a value of 2nd row array
exam_marks[1].push(85);
console.log(exam_marks);

//change 2D array value

exam_marks[2][3] = 799;

console.log(exam_marks);

//express 2D array using for...of loop
//jodi singel array hoto tobe loop chalale akta
//array element ashto
//e.g=array=[2,11,324,33,24]
// akhane for..of looop dile;
//singel element '2' ashbe
//but 2d array te loop hole full array ashbe
//const exam_marks = [
//   [98, 87, 45, 12, 63],
//   [54, 89, 74, 23, 11],
//   [45, 87, 12, 56, 45],
//   [78, 65, 32, 87, 54],
// ];
//e.g. [98, 87, 45, 12, 63]
//karon ata multi dimentional array ba 2d array
for (marks of exam_marks) {
  console.log(marks);
}
