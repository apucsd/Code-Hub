import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import QuestionAns from "./Components/QuestionAns/QuestionAns";

function App() {
  return (
    <div className="App lg:mx-10">
      <Header></Header>
      <Main></Main>
      <QuestionAns></QuestionAns>
    </div>
  );
}

export default App;
