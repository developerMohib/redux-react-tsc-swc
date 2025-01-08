import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Quiz = () => {
  const dispatch = useAppDispatch()
  const { questions, currentQuestionIndex } = useAppSelector(state => state.quizs)

  const currentQuestion = questions[currentQuestionIndex]
  const { question } = currentQuestion;

  const handleUserAnswer = (option :string) =>{
console.log(option)
  }


  return (
    <div>
      <h1 className="uppercase font-semibold text-center my-10 text-5xl">jakanaka Quiz app</h1>
      <Card className="w-[550px] mx-auto">
        <CardHeader>
          <CardTitle className="md:text-2xl" >{question}</ CardTitle>
          <CardDescription> Question {currentQuestionIndex + 1} of {questions.length} </CardDescription>
        </CardHeader>
        <CardContent>
          {
            currentQuestion.options.map((option, idx) => <Button key={idx} onClick={()=>handleUserAnswer(option)} className="w-full my-2 p-1">{option}</Button>)
          }
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Previous</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quiz;