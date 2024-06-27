import React, { useEffect, useState } from "react";
import Progress from "../components/TestPage/Progress";
import Question from "../components/TestPage/Question";
import Answer from "../components/TestPage/Answer";
import { useNavigate } from "react-router-dom";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiAnswerList, mbtiQuestionList } from "../data/response";
import { useRecoilState } from "recoil";
import { resultMbti } from "../store/resultMbti";

const Test = () => {
  // logic
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);
  const [mbtiResult, setMbtiResult] = useState([]);
  const [getResultMbti, setGetResultMbti] = useRecoilState(resultMbti);

  const { step, questionText } = mbtiQuestion;

  const handleAnswerClick = (data) => {
    setCurrentStep(prev => prev + 1);
    setMbtiResult(prev => [...prev, data]);
  };

  useEffect(() => {
    const getMbti = (arr, char1, char2) => {
      const count1 = arr.filter((str) => str === char1).length;
      const count2 = arr.filter((str) => str === char2).length;
      return count1 > count2 ? char1 : char2;
    };

    // question 데이터 변경
    const nextQuestion = mbtiQuestionList.find((item) => item.step === currentStep);
    nextQuestion ? setMbtiQuestion(nextQuestion) : navigate('/result');

    // answer 데이터 변경
    const nextAnswer = mbtiAnswerList.find((item) => item.questionStep === currentStep);
    if (nextAnswer) {
      setMbtiAnswer(nextAnswer);
    } else {
      let result = [];
      result[0] = getMbti(mbtiResult, 'E', 'I');
      result[1] = getMbti(mbtiResult, 'S', 'N');
      result[2] = getMbti(mbtiResult, 'F', 'T');
      result[3] = getMbti(mbtiResult, 'P', 'J');

      const resultString = result.join('');
      setGetResultMbti(resultString);
    };
  }, [currentStep]);

  console.log("resultMbti: ", getResultMbti);

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      <Progress step={step} />
      <Question text={questionText} step={step} />
      <Answer data={mbtiAnswer} step={step} handleClick={handleAnswerClick} />
    </section>
  );
};

export default Test;
