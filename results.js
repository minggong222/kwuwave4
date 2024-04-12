document.addEventListener('DOMContentLoaded', function () {
    const answersElement = document.getElementById('answers');
    const answers = JSON.parse(localStorage.getItem('quizAnswers'));

    let cnt, scr;
    if (answers) {
        cnt = 1;
        scr = 0;
        answers.forEach((isCorrect, index) => {
            const imgElement = document.createElement('img');
            imgElement.classList.add('answer-img');
            if (isCorrect) {
                imgElement.src = './O.PNG';
                scr++;
            } else {
                imgElement.src = './X.PNG';
            }
            switch (cnt){
                case 1:
                    imgElement.style.top = `${20}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 2:
                    imgElement.style.top = `${38}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 3:
                    imgElement.style.top = `${57}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 4:
                    imgElement.style.top = `${77}vw`; // 예시
                    imgElement.style.left = `${0}vw`; // 예시
                    break;
                case 5:
                    imgElement.style.top = `${20}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 6:
                    imgElement.style.top = `${42}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 7:
                    imgElement.style.top = `${62}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
                case 8:
                    imgElement.style.top = `${80}vw`; // 예시
                    imgElement.style.left = `${48}vw`; // 예시
                    break;
            }
            answersElement.appendChild(imgElement);
            cnt++;
        });
        const imgElement = document.createElement('img');
        imgElement.classList.add('answer-img');
        switch (scr){
            case 0:
                imgElement.src = './F.PNG';
                break;
            case 1:
            case 2:
                imgElement.src = './B.PNG';
                break;
            case 3:
            case 4:
                imgElement.src = './B+.PNG';
                break;
            case 5:
            case 6:
                imgElement.src = './A.PNG';
                break;
            case 7:
            case 8:
                imgElement.src = './A+.PNG';
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