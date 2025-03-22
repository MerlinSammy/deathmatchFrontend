import dumbell from "../assets/dumbbell.png";
import "../App.css";

export function MainPage() {
  return (
    <>
      <h1 className="bg-primary-subtle p-3">
        <img src={dumbell} alt="Icon" width={50} height={50} className="me-3" />
        Deadlift Deathmatch 2025
      </h1>
    </>
  );
}
