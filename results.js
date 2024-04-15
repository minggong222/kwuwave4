document.addEventListener('DOMContentLoaded', function () {
    const answersElement = document.getElementById('answers');
    const answers = JSON.parse(localStorage.getItem('quizAnswers'));
    const sug = JSON.parse(localStorage.getItem('quizsug'));
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
            const textSpan = document.createElement('span');
            textSpan.textContent = sug;
            section.appendChild(textSpan);
        } else {
            q.answers.forEach((a, answerIndex) => {
                const label = document.createElement('label');
                label.className = 'custom-radio';
                const input = document.createElement('input');
                input.name = `question${index}`;

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
    let cnt, scr;
    if (answers) {
        cnt = 1;
        scr = 0;
        answers.forEach((isCorrect, index) => {
            const imgElement = document.createElement('img');
            imgElement.classList.add('answer-img');
            if (isCorrect) {
                imgElement.src = './image/O.PNG';
                scr++;
            } else {
                imgElement.src = './image/X.PNG';
            }
            switch (cnt){
                case 1:
                    imgElement.style.top = `${18}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 2:
                    imgElement.style.top = `${36}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 3:
                    imgElement.style.top = `${55}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 4:
                    imgElement.style.top = `${75}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 5:
                    imgElement.style.top = `${18}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 6:
                    imgElement.style.top = `${40}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 7:
                    imgElement.style.top = `${60}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 8:
                    imgElement.style.top = `${78}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
            }
            answersElement.appendChild(imgElement);
            cnt++;
        });
        const imgElement = document.createElement('img');
        imgElement.classList.add('grade-img');
        switch (scr){
            case 0:
                imgElement.src = './image/F.PNG';
                break;
            case 1:
            case 2:
                imgElement.src = './image/B.PNG';
                break;
            case 3:
            case 4:
                imgElement.src = './image/B+.PNG';
                break;
            case 5:
            case 6:
                imgElement.src = './image/A.PNG';
                break;
            case 7:
            case 8:
                imgElement.src = './image/A+.PNG';
                break;
        }
        imgElement.style.top = `${0}vw`; // 예시
        imgElement.style.left = `${5}vw`; // 예시
        answersElement.appendChild(imgElement);
    } else {
        // 답안 데이터가 없는 경우
        answersElement.innerHTML = '<p>결과를 표시할 수 없습니다.</p>';
    }
});