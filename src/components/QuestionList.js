import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsData, onDelete, onUpdate }) {

  const questionsItems = questionsData.map(question => {
    return (<QuestionItem key={question.id} question={question} onDelete={onDelete}
      onUpdate={onUpdate} />)
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsItems}</ul>
    </section>
  );
}

export default QuestionList;
