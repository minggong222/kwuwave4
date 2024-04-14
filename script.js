document.addEventListener('DOMContentLoaded', function (node) {
    const leftColumn = document.querySelector('.left');
    const rightColumn = document.querySelector('.right');
    const submitButton = document.getElementById('submit');
    const resultDiv = document.getElementById('result');

    const questions = [
        // 문제 객체 배열
        {
            question: '1. 총학생회 파동은 몇 대 학생회 일까요?',
            answers: [
                { text: ') 51대', correct: true },
                { text: ') 888888대', correct: false },
                { text: ') 광운대', correct: false },
                { text: ') 1대', correct: false },

            ]
        },
        {
            question: '2. 다음 중 2024년도 축제 시작 날짜로 정답인 것은?',
            answers: [
                { text: ') 02.06', correct: false },
                { text: ') 12.09', correct: false },
                { text: ') 05.22', correct: true },
                { text: ') 03.04', correct: false },
            ]
        },
        {
            question: '3. 다음 중 학생들이 누릴 수 있는 혜택이 아닌 것은?',
            answers: [
                { text: ') 예비군 버스 지원 받기', correct: false },
                { text: ') 광운초등학교에서 수업 받기', correct: true },
                { text: ') 아이스링크 입장권 할인 받기', correct: false },
                { text: ') 배치된 여성용품 받기', correct: false },
            ]
        },
        {
            question: '4. 파동에서 진행한 3월 행사 "마취"의 뜻은?',
            answers: [
                { text: ') 마늘 취킨', correct: false },
                { text: ') 마싰는 취두부', correct: false },
                { text: ') 마니 취했다', correct: false },
                { text: ') 마시고 취한 썰', correct: true },
            ]
        },
        {
            question: '5. 파동의 캐치프라이즈는?',
            answers: [
                { text: ') 잔잔함 속 확실한 일렁임', correct: true },
                { text: ') 어머니는 짜장면이 싫다고 하셨어', correct: false },
                { text: ') 아버지는 택시드라이버', correct: false },
                { text: ') 꽁꽁 얼어 붙은 한강 위로 고양이가 걸어다닙니다.', correct: false },
            ]
        },

        {
            question: '6. 다음 중 함지마루 점심 이용 가능 시간으로 정답인 것은?',
            answers: [
                { text: ') 11:30 ~ 14:00', correct: true },
                { text: ') 15:00 ~ 15:30', correct: false },
                { text: ') 16:00 ~ 17:00', correct: false },
                { text: ') 19:00 ~ 20:00', correct: false }
            ]
        },
        {
            question: '7. 다음 중 보건실 위치로 맞는 것은?',
            answers: [
                { text: ') 63빌딩 51층', correct: false },
                { text: ') 하늘에 떠 있는 구름 층', correct: false },
                { text: ') 윤스쿡 건물의 1층', correct: false },
                { text: ') 복지관 2층', correct: true }
            ]
        },
        {
            question: '8.  건의사항이 있다면?',
            type: 'text', // 주관식 문제임을 나타내는 속성
            answer: '2022', // 정답
        }
    ];

    // 문제를 좌측과 우측 컬럼에 나누어 추가하는 로직
    questions.forEach((q, index) => {
        const column = index < 4 ? leftColumn : rightColumn;
        const section = document.createElement('section');
        section.innerHTML = `<h3>${q.question}</h3>`;

        if (q.type === 'text') { // 주관식 문제인 경우
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `question${index}`;
            input.maxLength = 200;
            section.appendChild(input, maxlength = '5'); // 주관식 입력 필드 추가
        } else {
        q.answers.forEach((a, answerIndex) => {
            const label = document.createElement('label');
            label.className = 'custom-radio';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = a.text; // 'true'나 'false' 대신 실제 텍스트 값을 사용
            input.correct = a.correct; // 정답 여부를 확인하기 위해 커스텀 속성을 설정

            const numberSpan = document.createElement('span');
            numberSpan.className = 'number';
            numberSpan.textContent = answerIndex + 1; // 숫자를 표시

            const textSpan = document.createElement('span');
            textSpan.textContent = a.text;

            const checkmark = document.createElement('span');
            checkmark.className = 'checkmark';

            label.appendChild(input);
            label.appendChild(numberSpan); // 숫자를 나타내는 span 추가
            label.appendChild(textSpan); // 텍스트를 나타내는 span 추가
            label.appendChild(checkmark);
            section.appendChild(label);
            section.appendChild(document.createElement('br'));
        });}

        column.appendChild(section);
    });
    questions.forEach((q, index) => {
        if (q.type !== 'text'){
        q.answers.forEach((a, answerIndex) => {
            const label = document.createElement('label');
            label.className = 'custom-radio';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = a.text;
            input.dataset.correct = a.correct
            input.addEventListener('change', () => {
                if(input.checked) {
                    // 모든 체크마크를 초기화
                    document.querySelectorAll(`input[name="question${index}"]`).forEach(el => {
                        const checkmark = el.nextElementSibling.nextElementSibling; // input 다음에 오는 span (checkmark)을 찾습니다.
                        checkmark.textContent = ''; // 체크 표시를 지웁니다.
                    });

                    // 현재 선택한 답안에 대해 체크 표시
                    const checkmark = input.nextElementSibling.nextElementSibling; // input 다음에 오는 span (checkmark)을 찾습니다.
                    checkmark.textContent = '✔'; // 체크 표시를 추가합니다.
                }
            });
        });}
    });
    // 제출 버튼 이벤트 핸들러
    submitButton.addEventListener('click', function() {
        let score = 0;
        let answers = [];
        questions.forEach((q, index) => {
            if (q.type === 'text') {
                // 주관식 문제의 답변을 검사하는 로직
                const input = document.querySelector(`input[name="question${index}"]`);
                if (input.value !== '') { // 주관식 문제의 정답과 사용자 입력값 비교
                    score += 12.5; // 정답인 경우 점수 부여
                    answers.push(true);
                    localStorage.setItem('quizsug', JSON.stringify(input.value));
                }else
                    answers.push(true);
            } else {
                // 객관식 문제에 대한 정답 확인
                const inputs = document.querySelectorAll(`input[name="question${index}"]`);
                let answered = false; // 사용자가 문제에 대해 답을 했는지 여부를 추적
                inputs.forEach(input => {
                    if (input.checked && input.correct === true) { // 정답인 경우에만 점수 부여
                        score += 12.5;
                        answers.push(true);
                        answered = true;
                    }
                });
                if (!answered) { // 사용자가 답을 하지 않았거나, 정답이 아닌 경우
                    answers.push(false); // 객관식 문제에 대해 false 처리
                }
            }
        });


        // localStorage에 저장
        localStorage.setItem('quizAnswers', JSON.stringify(answers));

        // 결과 페이지로 리디렉션
        window.location.href = 'resultPage.html';
        // 쿼리 스트링을 사용하여 점수를 결과 페이지 URL에 추가
    });
});