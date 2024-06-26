import React from 'react'

const Logo = () => {
    return (
        <div className="text-center relative">
            <i className="absolute -left-1 -top-4 bg-[url('../public/images/icon/main-icon-wave.png')] w-[71px] h-[29px]" />{" "}
            {/* icon */}
            <div className="relative pt-8">
                <span className="flex justify-center items-end font-cafe24surround text-4xl font-bold p-1 text-stroke-1 text-stroke-black text-white relative z-10">
                    <span className="block text-6xl text-mbti-deep-yellow transform -rotate-12 origin-right">
                        궁
                    </span>
                    합{" "}
                    <span className="block text-6xl text-mbti-light-pink transform rotate-12 origin-left -ml-1">
                        결
                    </span>
                    <span className="block transform -rotate-12 origin-bottom-right">
                        과
                    </span>
                </span>
                {/* START: icon */}
                <i className="absolute inset-0 bg-[url('../public/images/icon/result-icon-heart.svg')] bg-no-repeat bg-hand-heart bg-center -top-6 left-1" />
                <svg
                    viewBox="0 0 500 500"
                    className="transform -rotate-12 absolute -top-2 right-0"
                >
                    <path
                        id="curve"
                        d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                        className="fill-none"
                    />
                    <text width="500" className="text-2xl font-cafe24surround">
                        <textPath xlinkHref="#curve" textAnchor="end" startOffset="100%">
                            선재와 나의
                        </textPath>
                    </text>
                </svg>
                {/* END: icon */}
            </div>
        </div>
    )
};

export default Logo;