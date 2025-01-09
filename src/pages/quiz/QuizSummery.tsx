import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const QuizSummery = () => {
    const { questions, userAnswer } = useAppSelector(state => state.quizs)

    // Calculate correct and incorrect answers 
    const currectAnswer = questions.reduce((count, question, index) => {
        return question.correctAnswer === userAnswer[index] ? count + 1 : count
    }, 0)

    // incorrect 
    const incorrectAnswer = questions.length - currectAnswer
    console.log(incorrectAnswer)

    // progress bar
    const correctPercentage = Number((currectAnswer / questions.length) * 100).toFixed(2)

    return (
        <div className="flex justify-center my-auto">
            <Card className="p-10">
                <CardHeader>All quiz done, Quiz Summery</CardHeader>
                <CardContent>
                    <h1>You got {currectAnswer} out of {questions.length} </h1>
                </CardContent>
                <Progress value={parseFloat(correctPercentage)} />
            </Card>
        </div>
    );
};

export default QuizSummery;