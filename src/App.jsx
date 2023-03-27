import Bucket from "./components/Bucket/Bucket";
import { GithubLogo } from "@phosphor-icons/react";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5">
      <div className="flex gap-2">
        <h1 className="text-3xl">Convin Assignment</h1>
        <a className="flex items-end" href="https://github.com/hellboy41785/covin_assignment">
          <GithubLogo size={25} color="#eda302" weight="fill" />
        </a>
      </div>
      <Bucket />
    </div>
  );
}

export default App;
