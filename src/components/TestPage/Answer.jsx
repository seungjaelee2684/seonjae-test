import React from 'react'

const Answer = ({ data, step, handleClick }) => {

    const { answerList } = data;

    return (
        <div>
            {answerList.map((answer, idx) =>
                <div key={idx} className="py-2">
                    <button
                        type="button"
                        className="block w-full p-4 rounded-xl bg-white border-2 border-black"
                        onClick={() => handleClick(answer.type)}
                    >
                        {answer.text}
                    </button>
                </div>
            )}
        </div>
    )
};

export default Answer;