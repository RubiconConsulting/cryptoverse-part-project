import { QuestionBox, ChanceBox, TrapBox } from "./Objects";
import questions from "./questions.json";

const boxes = [
  new QuestionBox("Question 1", questions),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new TrapBox("Trap 1"),
  new ChanceBox("Chance 1"),
  new QuestionBox("Question 2", questions),
  new TrapBox("Trap 2"),
  new ChanceBox("Chance 2"),
  new QuestionBox("END", []),
];

export default boxes;