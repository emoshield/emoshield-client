import React, { useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User01 from '../../images/user-36-01.jpg';
import User02 from '../../images/user-36-02.jpg';
import User03 from '../../images/user-36-03.jpg';
import User04 from '../../images/user-36-04.jpg';

function Chat01() {
  const [chatvalue, setChatvalue] = useState("");

  const handleSubmit = (value) => {
    
  }

  const handleChatValue = (e) => {
    const { value } = e.target;
    setChatvalue(value);
  }

  return (
    <>
      <div class="w-full h-16 rounded-lg flex"
        style={{ borderRadius: "10px 10px 0px 0px", backgroundColor: "#000001" }}>
        <div class="h-8 w-8 ml-6 m-4 bg-white rounded-full flex rounded-lg"></div>
        <div class="h-6 w-32 m-4 mt-5 bg-white rounded-full flex rounded-lg"></div>
        <div class="h-8 w-16 m-4 ml-36 mt-5 bg-white rounded-full flex rounded-lg" 
        style={{backgroundColor:"#E74F63"}}></div>
      </div>
      <div class="w-full h-full "
        style={{ backgroundColor: "#D9D9D9" }}>
        <div className="sc-jSMfEi sc-laFCIP eXGIIr cYEFlo">
          <div id="ScrollContainer" className="rounded-lg sc-iRaSfU eYKESv">
            <div className="sc-dhyxXW gacFCF"
              style={{ height: "640px" }}>
              <div style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)', position: 'relative', height: '100%' }}>
                <div className="sc-jSMfEi IvyET" style={{ width: '100%' }}>
                  <div className="sc-jSMfEi sc-kRktcz sc-ejVUYw eXGIIr gFXdna gjqWGP">
                    <div className="sc-khBlLl eTVFAW">
                      아
                    </div>
                    <div className="sc-khBlLl eTVFAW " style={{ width: "300px" }}>
                      안녕하세요! 여러분을 위한 AI 필터링 서비스 이모쉴드예요. 핵심만 전달해드릴게요.
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '-2px' }}>
                  <div style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="sc-jSMfEi sc-gzzPqb bzWeFp fmdMnR" style={{ visibility: 'visible', maxHeight: '100vh', alignItems: "center" }}>

                      <div className="mb-2 sc-jSMfEi sc-fmrZth bzWeFp1 dSeEhO">
                        <button className="sc-gKXOVf sc-iFwKgL gQPbfP WbQFN" style={{ borderTopLeftRadius: '0px' }}>
                          우주복을 입은 강아지 캐릭터를 그려줘.
                        </button>
                      </div>
                      <div className="sc-jSMfEi sc-gkJlnC eXGIIr gxhulW">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#6446FF" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_10379_50419)">
                            <path
                              d="M8 0.445312C3.58178 0.445312 0 3.23109 0 6.66753C0 8.60887 1.144 10.3422 2.93511 11.4831C2.70222 12.5093 2.15956 14.0315 0.888889 15.5564C3.448 15.1298 5.084 13.8849 6.096 12.7049C6.70756 12.8213 7.34267 12.8898 8 12.8898C12.4182 12.8898 16 10.104 16 6.66753C16 3.23109 12.4182 0.445312 8 0.445312Z"
                              fill="current"
                            />
                            <path d="M7.99997 7.55512C8.49089 7.55512 8.88886 7.15715 8.88886 6.66623C8.88886 6.17531 8.49089 5.77734 7.99997 5.77734C7.50905 5.77734 7.11108 6.17531 7.11108 6.66623C7.11108 7.15715 7.50905 7.55512 7.99997 7.55512Z" fill="white" />
                            <path d="M11.5556 7.55512C12.0466 7.55512 12.4445 7.15715 12.4445 6.66623C12.4445 6.17531 12.0466 5.77734 11.5556 5.77734C11.0647 5.77734 10.6667 6.17531 10.6667 6.66623C10.6667 7.15715 11.0647 7.55512 11.5556 7.55512Z" fill="white" />
                            <path d="M4.44455 7.55512C4.93547 7.55512 5.33344 7.15715 5.33344 6.66623C5.33344 6.17531 4.93547 5.77734 4.44455 5.77734C3.95363 5.77734 3.55566 6.17531 3.55566 6.66623C3.55566 7.15715 3.95363 7.55512 4.44455 7.55512Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10379_50419">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        고객의 음성을 필터링 하는 중 입니다.
                      </div>
                      <div className="mb-2 sc-jSMfEi sc-fmrZth bzWeFp dSeEhO">
                        <button className="sc-gKXOVf sc-iFwKgL gQPbfP WbQFN" style={{ borderBottomRightRadius: '0px' }}>
                          지금부터 너는 나의 심리상담사야. 요즘 내가 느끼는 스트레스를 듣고 적절한 조언을 해줘.
                        </button>
                      </div>
                      <div className="mb-2 sc-jSMfEi sc-fmrZth bzWeFp1 dSeEhO">
                        <button className="sc-gKXOVf sc-iFwKgL gQPbfP WbQFN" style={{ borderTopLeftRadius: '0px' }}>
                          칸트와 데카르트 관점에서 각각 "있음"과 "존재"의 차이를 설명해줘.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-jSMfEi IvyET flex" style={{ width: '100%', height: "50px", position: 'absolute', bottom: '16px' }}>
                  {/* <div className="flex sc-jSMfEi sc-kRktcz sc-ejVUYw eXGIIr gFXdna gjqWGP"
                  style={{padding:"0"}}> */}
                  {/* <div className="sc-khBlLl eTVFAW " style={{ width: "300px", }}>
                      
                    </div> */}
                  {/* <div className="sc-khBlLl eTVFAW bg-black " style={{ width: "50px", height: "50px" }}> */}
                  <div class="w-full mt-6 flex max-w-md gap-x-4">
                    <label for="input" class="sr-only">Input</label>
                    <input id="input" value={chatvalue} onChange={(e) => handleChatValue(e)} required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="이모쉴드가 전달해드릴게요" />
                    <button onClick={() => handleSubmit(chatvalue)} type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send</button>
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Chat01;
