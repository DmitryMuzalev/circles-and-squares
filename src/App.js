import { RadioButton } from "./components/RadioButton/RadioButton";

function App() {
  return (
    <div>
      <RadioButton name="shades" value="all">
        все
      </RadioButton>
      <RadioButton name="shades" value="dark">
        тёмные
      </RadioButton>
      <RadioButton name="shades" value="light">
        светлые
      </RadioButton>
    </div>
  );
}

export default App;
