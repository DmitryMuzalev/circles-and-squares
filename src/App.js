import { Checkbox } from "./components/Checkbox/Checkbox";

function App() {
  return (
    <div>
      <Checkbox>квадраты</Checkbox>
      <Checkbox>круги</Checkbox>
      <Checkbox color="red">красный</Checkbox>
      <Checkbox color="blue">синий</Checkbox>
      <Checkbox color="green">зелёный</Checkbox>
      <Checkbox color="yellow">жёлтый</Checkbox>
    </div>
  );
}

export default App;
