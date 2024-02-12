import ProgressBar from "react-bootstrap/ProgressBar";

function AnimatedExample({ progress }: { progress: number }) {
  return <ProgressBar animated now={progress} />;
}

export default AnimatedExample;
