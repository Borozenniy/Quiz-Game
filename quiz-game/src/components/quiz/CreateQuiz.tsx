import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz.js';
import { CreateQuestion } from '../question/CreateQuestion.js';
import { AnswerProps } from '../answer/types/answer.js';
import { QuizStatus } from './types/quiz.js';

//TODO: can do and import general Quiz type
type CreateQuizProps = {
  quizName: string;
  quizDescription: string;
  hasTimer: boolean;
  quizID: number;
  timerMinutes: TimerProps;
  questionsNumber: number;
  questions: QuestionProps[];
};
type TimerProps = {
  minutes: number | null;
  seconds: number | null;
};
export type QuestionProps = {
  questionName: string;
  answer: AnswerProps[];
};

export function CreateQuiz() {
  const navigate = useNavigate();
  const { quizzes, addQuiz, removeQuiz } = useQuiz();
  const [quiz, setQuiz] = useState([] as CreateQuizProps);
  const [currentQuizStatus, setCurrentQuizStatus] = useState<QuizStatus>('');
  const [isCreating, setIsCreating] = useState(false);
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [hasTimer, setHasTimer] = useState(false);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  //const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleCreateQuiz = () => {
    setIsCreating(true);
    setCurrentQuizStatus('creating');
  };

  const addNewQuiz = () => {
    const newQuiz = {
      name: quizName,
      id: Date.now(),
      description: quizDescription,
      hasTimer,
      timer: {
        minutes,
        seconds
      },
      questionsNumber,
      questions: questions,
    };

    addQuiz(...quizzes, newQuiz);
  };
  console.log(quizzes);
  console.log(currentQuizStatus);

  //const createQuiz = () => {
  //  setQuiz({
  //    quizName,
  //    quizDescription,
  //    hasTimer,
  //    questionsNumber,
  //    questions: questions,
  //  });

  //};

  //setQuiz({
  //  quizName,
  //  quizDescription,
  //  hasTimer,
  //  questionsNumber,
  //  questions: questions,
  //});
  const checkTimer = () => {
    if(hasTimer && minutes > 0) return true;
    if(!hasTimer) return true;
    return false;
  }

  const checkNameAndQuestions = () => {
    if(quizName && questionsNumber) return true;
    return false;
  }

  const handleNextStep = () => {
  if (checkTimer() && checkNameAndQuestions()) handleCreateQuiz();
    console.log(quizName);
    console.log(questionsNumber);
    console.log(quizDescription);
  };

  const handleQuestionNumber = (numbers: number) => {
    setQuestionsNumber(numbers);
    if (numbers > 99) setQuestionsNumber(99);
    if (numbers < 0) setQuestionsNumber(0);
  };

  //const handleNextQuesiton = () => {
  //  if (currentQuestionNumber < questionsNumber)
  //    setCurrentQuestionNumber(currentQuestionNumber + 1);
  //};

  //const handleChangeQuizStatus = (status: QuizStatus) => {};

  //const submitQuiz = (newQuiz: QuestionProps) => {
  //  addQuiz([...quizzes, newQuiz]);
  //};
  const navigateToQuizzes = () => {
    navigate('/quizzes')
  }

  useEffect(() => {
    if (currentQuizStatus === 'finished') {
      addNewQuiz();
      setCurrentQuizStatus('');
      navigateToQuizzes();
    }
  }, [currentQuizStatus]);

  useEffect(() => {
    if(minutes < 0) setMinutes(0)
    if(seconds < 0) setSeconds(0)
    if(minutes > 60) setMinutes(60)
    if(seconds > 59) setSeconds(59)

  }, [minutes, seconds]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {!isCreating ? (
          <>
            <h1>CreateQuiz</h1>
            {/*<form action=""></form>*/}
            <input
              value={quizName}
              type='text'
              placeholder='Quiz Name'
              required
              autoFocus
              onChange={(e) => setQuizName(e.target.value)}
            />
            <label id='' htmlFor='quiz_timer'>
              Has a timer
            </label>
            <input
              type='checkbox'
              id='quiz_timer'
              checked={hasTimer}
              name='quiz_timer'
              onChange={(e) => setHasTimer(e.target.checked)}
            />
            <label htmlFor=''>Minutes (max 60)</label>
            <input type='number' value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} disabled={!hasTimer} />
            <label htmlFor='' >Seconds</label>
            <input type='number' value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}disabled={!hasTimer} />
            <h2>Amount of Questions (max 99)</h2>
            <input
              type='number'
              placeholder='Question Number'
              value={questionsNumber}
              required
              onChange={(e) => handleQuestionNumber(Number(e.target.value))}
            />
            <label id='' htmlFor='quiz_description'></label>
            <textarea
              placeholder='Quiz Description'
              value={quizDescription}
              rows={8}
              onChange={(e) => setQuizDescription(e.target.value)}
            />
            <button onClick={handleNextStep}>Next Step</button>
          </>
        ) : (
          <CreateQuestion
            setQuestions={setQuestions}
            questions={questions}
            addNewQuiz={addNewQuiz}
            setCurrentQuizStatus={setCurrentQuizStatus}
            questionsNumber={questionsNumber}
          />
        )}
        {/*<button onClick={submitQuiz}>Submit Quiz</button>*/}
      </div>
    </div>
  );
}
