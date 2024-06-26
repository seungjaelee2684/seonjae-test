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
  const [mbtiResult, setMbtiResult] = useState([]);

  const { step, questionText } = mbtiQuestion;
  const { answerList } = mbtiAnswer;

  const handleAnswerClick = () => {
    setCurrentStep(prev => prev + 1);
  };

  useEffect(() => {
    // question 데이터 변경
    const nextQuestion = mbtiQuestionList.find((item) => item.step === currentStep);
    nextQuestion ? setMbtiQuestion(nextQuestion) : navigate('/result');
    
    // answer 데이터 변경
    const nextAnswer = mbtiAnswerList.find((item) => item.questionStep === currentStep);
    nextAnswer && setMbtiAnswer(nextAnswer);

    setMbtiResult(prev => [...prev]);
  }, [currentStep]);

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      <Progress step={step} />
      <Question text={questionText} step={step} />
      <Answer data={answerList} step={step} handleClick={handleAnswerClick} />
    </section>
  );
};

export default Test;
