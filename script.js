// 질문과 선택지를 담고 있는 HTML 엘리먼트들을 변수로 저장합니다.
const questions = document.querySelectorAll('.question-container');
const answerBtns = document.querySelectorAll('.answer-btn');

// 유형을 저장하는 객체입니다.
const results = {
  "AILI": 0,
  "AILC": 0,
  "AILS": 0,
  "AICI": 0,
  "AICL": 0,
  "AIIS": 0,
  "AIIL": 0,
  "AIIC": 0,
  "AIII": 0,
  "ILIL": 0,
  "ILIS": 0,
  "ILCL": 0,
  "IICL": 0,
  "IILS": 0,
  "IILI": 0,
  "IIIS": 0,
};

// 현재 진행 중인 질문의 인덱스입니다.
let currentQuestionIndex = 0;

// 선택지가 클릭될 때 실행되는 함수입니다.
function handleAnswerButtonClick(event) {
  const selectedOption = event.target;
  const selectedResult = selectedOption.getAttribute('data-result');

  // 선택한 결과값을 결과 객체에 추가합니다.
  results[selectedResult]++;

  // 다음 질문을 보여줍니다.
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    questions[currentQuestionIndex - 1].classList.add('hidden');
    questions[currentQuestionIndex].classList.remove('hidden');
  } else {
    // 모든 질문에 대한 선택이 완료된 경우 결과를 출력합니다.
    questions[currentQuestionIndex - 1].classList.add('hidden');
    showResult();
  }
}

// 결과를 출력하는 함수입니다.
function showResult() {
  // 결과값을 비교하여 가장 높은 유형을 찾습니다.
  let maxResult = null;
  for (const result in results) {
    if (maxResult === null || results[result] > results[maxResult]) {
      maxResult = result;
    }
  }

  // 결과값을 HTML 엘리먼트에 출력합니다.
  const resultElement = document.querySelector('#result');
  const resultTypeElement = document.querySelector('#type-result');
  resultTypeElement.innerHTML = maxResult;
  resultElement.classList.remove('hidden');
  const elementWithMaxResult = document.querySelector(`#${maxResult}`);
  elementWithMaxResult.classList.remove('hidden');
}

// 선택지 버튼에 이벤트 리스너 추가
answerBtns.forEach((btn) => {
  btn.addEventListener('click', handleAnswerButtonClick);
});