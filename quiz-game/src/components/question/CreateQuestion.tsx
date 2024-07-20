import { useState } from 'react';
import { Answers } from '../answer/Answers';
import { AnswerProps } from '../answer/types/answer';
import { QuestionProps } from '../quiz/CreateQuiz';

//TODO: to types and import here
type CreateQuestionProps = {
  questionsNumber: number;
  setQuestions: () => void;
  questions: QuestionProps;
  addNewQuiz: () => void;
  setCurrentQuizStatus: (status: string) => void;
  createQuiz: () => void;
};

type QuestionProps = {
  questionName: string;
  answers: AnswerProps[];
};

//!
//TODO: choose correct answer and add check for it if answers have correct answer
export function CreateQuestion({
  setQuestions,
  addNewQuiz,
  questions,
  questionsNumber,
  setCurrentQuizStatus,
  createQuiz,
}: CreateQuestionProps) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [questionName, setQuestionName] = useState('');
  const [oneCorrectAnswer, setOneCorrectAnswer] = useState(true);
  //const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState('');
  //const [isCorrect, setIsCorrect] = useState(false);
  const [answers, setAnswers] = useState([]);
  //const [haveCorrectAnswer, setHaveCorrectAnswer] = useState(false);

  //TODO: answer (1) => answers (2) => question (3) => questions (4) -> quiz (5)

  const clearAll = () => {
    setQuestionName('');
    setAnswers([]);
    setAnswer('');
    //setIsCorrect(false);
    //setHaveCorrectAnswer(false);
  };

  //* Adding new answer/answers
  //? #1
  const addAnswer = () => {
    if (answer && answers.length < 10) {
      const answerVariant = {
        answer: answer.trim(),
        id: Date.now(),
        isCorrect: false,
      };
      //? #2
      setAnswers([...answers, answerVariant]);
      setAnswer('');
    }
  };
  console.log(answers);
  console.log(answer);

  //console.log(questions);

  /*
setQuestions([...questions, question])
 */
  //const handleSubmit = () => {
  //  if (questionName && answers.length > 0) nextQuesiton();
  //};

  //? maybe add general reset function for answers, question name
  const nextQuesiton = () => {
    if (currentQuestionNumber < questionsNumber) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
      clearAll();
    }
  };
  //* Adding new question
  //? #3
  //const AddNewQuestion = (question: QuestionProps) => {
  //  console.log(question);
  //  //const newQuestion : QuestionProps = {
  //  //  questionName,
  //  //  answers: answers,
  //  //};
  //  setQuestions({ ...questions, question });
  //  console.log(questions);
  //};

  //* Adding new question
  //? #3
  const addQuestion = () => {
    if (questionName && answers.length >= 2) {
      const newQuestion = {
        questionName: questionName.trim(),
        answers: answers,
      };
      //setQuestions([...questions, question]);
      setQuestions([...questions, newQuestion]);
      nextQuesiton();
    }
  };

  //* check for more than one correct answer and did we choose rule with more than one correct answer
  const moreThanOneCorrectAnswer = () => {
    const correctAnswers = answers.filter((answer) => answer.isCorrect);
    console.log(correctAnswers.length);
    return correctAnswers.length < 1
  }

  const updateCorrectAnswer = (id: number) => {
    setAnswers(answers.map((answer) => answer && {...answer, isCorrect: false}));
    if(oneCorrectAnswer && moreThanOneCorrectAnswer()) {
      setAnswers(answers.map((answer) => answer.id === id ? {...answer, isCorrect: !answer.isCorrect} : answer));
    } else {
      setAnswers(answers.map((answer) => answer && {...answer, isCorrect: false}));
    }
  };


  //* choose correct answer
  //? check answers by id and set isCorrect
  const chooseCorrectAnswer = (answerId: number) => {
    updateCorrectAnswer(answerId)
  }

  const handleSumbit = () => {
    addQuestion();
    setCurrentQuizStatus('finished');
    //changeQuizStatus();
    //addNewQuiz();
    //navigate('/quizzes');
  };

  //const finishQuiz = () => {
  //  createQuiz();
  //};

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>
          Question {currentQuestionNumber} of {questionsNumber}
        </h2>
        <label htmlFor=''>Question Name</label>
        <input
          type='text'
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
        />
        <div className='question-variants'>
          <label htmlFor=''>Answers (min. 2, max. 10)</label>
          <input
            type='text'
            disabled={answers.length === 10}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button onClick={addAnswer}>Add answer</button>
        {answers.length > 0 && <Answers answers={answers} chooseCorrectAnswer={chooseCorrectAnswer}/>}
        {currentQuestionNumber !== questionsNumber ? (
          <button onClick={addQuestion}>Next Question</button>
        ) : (
          //TODO: add finish function
          <button onClick={handleSumbit}>Finish</button>
        )}
      </div>
    </div>
  );
}
