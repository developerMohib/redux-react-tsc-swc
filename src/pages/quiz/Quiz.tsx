import { useAppSelector } from "@/redux/hooks";
import Question from "./Question";
import QuizSummery from "./QuizSummery";

const Quiz = () => {
const {isComplete} = useAppSelector(state => state.quizs)
console.log('complete ', isComplete)
  return (
    <div>
      {
        isComplete ? <QuizSummery /> : <Question />
      }
    </div>
  );
};

export default Quiz;
