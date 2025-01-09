import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

const Question = () => {
    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
      (state) => state.quizs
    );
  
    const currentQuestion = questions[currentQuestionIndex];
    const { question } = currentQuestion;
    const currentAnswer = userAnswer[currentQuestionIndex]; // Get the selected answer
  
    const handleUserAnswer = (option: string) => {
      dispatch(setAnswer({ currentQuestionIndex, option }));
    };
  
    return (
      <div>
        <h1 className="uppercase font-semibold text-center my-10 text-5xl">jakanaka Quiz app</h1>
        <Card className="w-[550px] mx-auto">
          <CardHeader>
            <CardTitle className="md:text-2xl">{question}</CardTitle>
            <CardDescription>
              Question {currentQuestionIndex + 1} of {questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion?.options?.map((option, idx) => (
              <Button
                key={idx}
                onClick={() => handleUserAnswer(option)}
                className="w-full my-2 p-1"
                variant={option === currentAnswer ? "default" : "outline"}
              >
                {option}
              </Button>
            ))}
          </CardContent>
          <QuizControl />
        </Card>
      </div>
    );
  };

export default Question;