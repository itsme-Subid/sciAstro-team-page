import Advisors from "./components/advisors";
import Institutes from "./components/institutes";
import Mentors from "./components/mentors";

const App = () => {
  return (
    <div className="my-16 grid gap-16">
      <Institutes />
      <Mentors />
      <Advisors />
    </div>
  );
};

export default App;
