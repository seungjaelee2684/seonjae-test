import React from 'react'

const LoveIndex = ({ data }) => {
    return (
        <div className="px-4">
            <ul>
                {data.map((item, idx) =>
                    <li className="flex gap-1 py-3 first:pt-0 last:pb-0" key={idx}>
                        <span className="text-base min-w-20 max-w-20">{item.text}</span>
                        <div className="w-full h-4 bg-mbti-light-pink rounded-xl overflow-hidden relative">
                            <span
                                className="block h-full bg-mbti-pink transition-all rounded-xl"
                                style={{ width: `${item.score}%` }}
                            ></span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default LoveIndex;