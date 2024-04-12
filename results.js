document.addEventListener('DOMContentLoaded', function () {
    const answersElement = document.getElementById('answers');
    const answers = JSON.parse(localStorage.getItem('quizAnswers'));

    let cnt;
    if (answers) {
        cnt = 1;
        answers.forEach((isCorrect, index) => {
            const imgElement = document.createElement('img');
            imgElement.classList.add('answer-img');
            if (isCorrect) {
                imgElement.classList.add('correct');
                imgElement.src = './O.PNG';
            } else {
                imgElement.classList.add('incorrect');
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
    } else {
        // 답안 데이터가 없는 경우
        answersElement.innerHTML = '<p>결과를 표시할 수 없습니다.</p>';
    }
});