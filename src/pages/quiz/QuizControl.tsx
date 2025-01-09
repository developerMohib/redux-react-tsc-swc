import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { completeQuiz, nextButton, previousButton } from '@/redux/features/quiz/quizSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const QuizControl = () => {
    const { currentQuestionIndex, questions, userAnswer, isComplete } = useAppSelector((state) => state.quizs);

    const dispatch = useAppDispatch()
    const handleNext = (): void => {
        dispatch(nextButton())
    }
    const handlePrevious = (): void => {
        dispatch(previousButton())
    }
    const hanldeQuizComplete = (): void=> {
        dispatch(completeQuiz())
    }
    const isAnswered = userAnswer[currentQuestionIndex] !== null

    // Check if all answers are selected for the last question
    const isQuizCompleted = isAnswered || currentQuestionIndex !== questions.length - 1

    return (
        <CardFooter className="flex justify-between">
            <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0 || isComplete} >Previous</Button>
            {
                currentQuestionIndex < questions.length - 1 && <Button disabled={!isAnswered || isComplete} onClick={handleNext} >Next</Button>
            }
            {
                currentQuestionIndex === questions.length - 1 && !isComplete && <Button disabled={!isQuizCompleted} onClick={hanldeQuizComplete} >Quiz Complete</Button>
            }
        </CardFooter>
    );
};

export default QuizControl;