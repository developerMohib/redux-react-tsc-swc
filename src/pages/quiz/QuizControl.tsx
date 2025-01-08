import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { nextButton,previousButton } from '@/redux/features/quiz/quizSlice';
import { useAppDispatch } from '@/redux/hooks';

const QuizControl = () => {


    const dispatch = useAppDispatch()
    const handleNext = () => {
        dispatch(nextButton())
    }
    const handlePrevious = () => {
        dispatch(previousButton())
    }


    return (
        <CardFooter className="flex justify-between">
            <Button onClick={handlePrevious} >Previous</Button>
            <Button onClick={handleNext} >Next</Button>
        </CardFooter>
    );
};

export default QuizControl;