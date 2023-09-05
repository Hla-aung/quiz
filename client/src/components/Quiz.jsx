/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  FormControl,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { pushResult, pushCorrect } from "../controller/resultReducer";
import Result from "./Result";

const Quiz = () => {
  const [value, setValue] = useState();
  const [next, setNext] = useState(0);
  const dispatch = useDispatch();

  const que = useSelector((state) => state.result.questions);
  const q = que?.questions?.questions;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(pushResult(value));
    dispatch(pushCorrect(q[next].correct));
    setNext((prev) => prev + 1);
  };

  const submitClick = () => {
    dispatch(pushResult(value));
    dispatch(pushCorrect(q[next].correct));
  };

  return (
    <Stack
      direction={"column"}
      height={"90vh"}
      justifyContent={"center"}
      alignItems={"center"}
      key={q[next]?.id}
      paddingX={3}
    >
      <Stack direction={"column"} alignItems={"flex-start"} mb={"20px"}>
        <Typography
          color={"primary"}
          fontWeight={"bold"}
          gutterBottom
          sx={{
            fontSize: {
              md: 30,
              xs: 25
            }
          }}
        >
          {q[next]?.question}
        </Typography>
        <FormControl>
          <RadioGroup name="options" onChange={handleChange}>
            {q[next]?.options?.map((option, i) => (
              <FormControlLabel
                value={option}
                control={<Radio sx={{ color: "white" }} />}
                label={option
                  .split(" ")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")}
                key={i}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      {next < q?.length - 1 ? (
        <Button
          onClick={handleClick}
          variant="contained"
          size="large"
          endIcon={<NavigateNextIcon />}
        >
          Next Question
        </Button>
      ) : (
        <Link to={"/result"} element={<Result />} onClick={submitClick}>
          <Button
            variant="contained"
            size="large"
            endIcon={<KeyboardArrowUpIcon />}
          >
            Submit
          </Button>
        </Link>
      )}
    </Stack>
  );
};

export default Quiz;
