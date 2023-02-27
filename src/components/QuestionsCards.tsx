import { answerObject } from "../App"
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles"


type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: answerObject | undefined,
    questionNumber: number,
    totalQuestions: number
}


const QuestionsCards: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className="number">
                Questions : {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionsCards
