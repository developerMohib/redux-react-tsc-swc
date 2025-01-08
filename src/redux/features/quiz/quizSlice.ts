import { quizData } from "@/jsonData/quiz";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
  isComplete: boolean;
}

const initialState: TQuiz = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  isComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

export default quizSlice.reducer;
