import { useState } from 'react';

export function CreateQuiz() {
  return (
    <div>
      <h1>CreateQuiz</h1>
      {/*<form action=""></form>*/}
      <input type='text' placeholder='Quiz Title' />
      <label id='' htmlFor='quiz_timer'>
        Has a timer
      </label>
      <input type='checkbox' id='quiz_timer' name='quiz_timer' />
      <input type='text' placeholder='Quiz name' />
      <h2>Amount of Questions (max 99)</h2>
      <input type='number' placeholder='Question Number' size={2} />
      <label id='' htmlFor='quiz_description'>
        Question
      </label>
      <textarea placeholder='Quiz Description' />
    </div>
  );
}
