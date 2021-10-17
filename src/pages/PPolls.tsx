import { Stack } from "@mui/material";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import CPoll from "../components/present/CPoll";
import { PollContext } from "../contexts/PollProvider";

interface PPollsProps {}

const PPolls: FC<PPollsProps> = () => {
  const { polls } = useContext(PollContext);
  return (
    <Stack spacing={1}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <h2>Polls</h2>
        <Link to="/create">Create</Link>
      </div>
      {polls.map((poll) => (
        <CPoll poll={poll} />
      ))}
    </Stack>
  );
};

export default PPolls;