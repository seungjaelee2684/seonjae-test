import React from 'react'
import { IoMdRefresh, IoMdShareAlt } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Button = ({ type }) => {

    const navigate = useNavigate();

    return (
        <div className="py-2">
            {(type === 'share')
                ? <button
                    type="button"
                    className={`flex gap-2 justify-center items-center text-mbti-blue bg-white font-cafe24surround rounded-4xl border-[6px] border-mbti-blue py-1 w-3/4 mx-auto`}
                >
                    친구에게 공유하기
                    <IoMdShareAlt size={32} />
                </button>
                : <button
                    type="button"
                    className={`flex gap-2 justify-center items-center text-white bg-mbti-blue font-cafe24surround rounded-4xl border-[6px] border-mbti-blue py-1 w-3/4 mx-auto`}
                    onClick={() => navigate('/')}
                >
                    궁합 다시보기
                    <IoMdRefresh size={32} />
                </button>}

        </div>
    )
};

export default Button;