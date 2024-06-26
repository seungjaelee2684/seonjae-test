import React, { useEffect, useState } from "react";
import Progress from "../components/TestPage/Progress";
import Question from "../components/TestPage/Question";
import Answer from "../components/TestPage/Answer";
import { useNavigate } from "react-router-dom";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiAnswerList, mbtiQuestionList } from "../data/response";

const Test = () => {
  // logic
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);

  const { step, questionText } = mbtiQuestion;
  const { answerList } = mbtiAnswer;

  const handleAnswerClick = () => {
    setCurrentStep(prev => prev + 1);
  };

  useEffect(() => {
    const nextQuestion = mbtiQuestionList.find((item) => item.step === currentStep);
    const nextAnswer = mbtiAnswerList.find((item) => item.questionStep === currentStep);

    nextQuestion ? setMbtiQuestion(nextQuestion) : navigate('/result');
    nextAnswer && setMbtiAnswer(nextAnswer);
  }, [currentStep]);

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progress step={step} />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question text={questionText} step={step} />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer data={answerList} step={step} handleClick={handleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
