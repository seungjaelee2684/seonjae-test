import React from "react";
import Logo from "../components/ResultPage/Logo";
import Score from "../components/ResultPage/Score";
import LoveIndex from "../components/ResultPage/LoveIndex";
import ResultMessage from "../components/ResultPage/ResultMessage";
import Button from "../components/ResultPage/Button";

const Result = () => {
  // logic

  // view
  return (
    <section className="pt-10 pb-8">
      {/* START: 로고 텍스트 */}
        <Logo />
      {/* END: 로고 텍스트 */}
      <div className="py-4">
        {/* START: Score 컴포넌트 */}
          <Score />
        {/* END: Score 컴포넌트 */}
      </div>
      <div className="py-4">
        {/* START: LoveIndex 컴포넌트 */}
          <LoveIndex />
        {/* END: LoveIndex 컴포넌트 */}
      </div>
      <div className="py-4">
        {/* START: ResultMessage 컴포넌트 */}
          <ResultMessage />
        {/* END: ResultMessage 컴포넌트*/}
      </div>
      <div className="py-4">
        {/* START: Button 컴포넌트 */}
          <Button type='share' />
        {/* END: Button 컴포넌트 */}
        {/* START: Button 컴포넌트 */}
          <Button type='return' />
        {/* END: Button 컴포넌트 */}
      </div>
    </section>
  );
};

export default Result;
