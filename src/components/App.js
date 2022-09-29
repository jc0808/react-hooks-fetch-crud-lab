import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setData(data))

  }, [])

  function handleAddQuestions(questionForm) {
    setData([...data, questionForm]);
  }

  function onDelete(id) {
    const filtered = data.filter(question => {

      return question.id !== id;
    });
    setData(filtered)
  }

  function onUpdate(id, value) {
    const update = data.map(question => {
      if (question.id === id) {
        question["correctIndex"] = value;
      }

      return question
    })

    setData(update);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addItem={handleAddQuestions} /> : <QuestionList questionsData={data} onDelete={onDelete} onUpdate={onUpdate} />}
    </main>
  );
}

export default App;
