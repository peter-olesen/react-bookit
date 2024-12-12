import { useUser } from "../../contexts/UserContext";
import "./Welcome.module.scss";

export const Welcome = () => {
  const { signedIn } = useUser();

  return (
    <div>
      <h1>{signedIn ? <p>Welcome back, Peter</p> : <p>Welcome, Guest</p>}</h1>
    </div>
  );
};
