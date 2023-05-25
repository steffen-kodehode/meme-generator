import "./App.css";
import Header from "./Components/Header/Header";
import MemeTextInput from "./Components/Meme-text-input/Meme-text-input";
import Button from "./Components/Button/Button";
import MemeOutput from "./Components/Meme-Output/Meme-Output";

function App() {
  return (
    <div className="App">
      <Header />
      <MemeTextInput />
      <Button />
      <MemeOutput />
    </div>
  );
}

export default App;
