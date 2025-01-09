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
  reducers: {
    setAnswer: (state, action) => {
      // when user click the question => need to know two thing,
      // question number and option
      const { currentQuestionIndex, option } = action.payload;
      console.log("slice", currentQuestionIndex, option);
      state.userAnswer[currentQuestionIndex] = option;
    },

    nextButton: (state) => {
      if (state.currentQuestionIndex < state.questions.length-1) {
        state.currentQuestionIndex = state.currentQuestionIndex + 1;
      }
    },
    previousButton: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex = state.currentQuestionIndex - 1;
      }
    },
    completeQuiz: (state) => {
      state.isComplete = true;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.userAnswer = Array(state.questions.length).fill(null);
      state.isComplete = false;
    },
    
  },
});
export const { setAnswer, nextButton, previousButton, completeQuiz ,resetQuiz} =
  quizSlice.actions;
export default quizSlice.reducer;
