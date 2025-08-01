import { useQuiz } from "../contexts/QuizContext";

const Finished = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = ((points / maxPossiblePoints) * 100).toFixed(2);

  return (
    <>
      <p className="result">
        You scorder <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default Finished;
