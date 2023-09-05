import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { reset } from "../controller/resultReducer";
import Home from "./Home";

const Result = () => {
  const getResult = useSelector((state) => state.result.result);
  const getCorrect = useSelector((state) => state.result.correct);
  const user = useSelector((state) => state.result.userID);
  const dispatch = useDispatch();
  
  let n = 0;
  for (let i = 0; i < getResult.length; i++) {
    if (getResult[i] === getCorrect[i]) {
      n = n + 1;
    }
  }

  const setReset = () => {
    dispatch(reset());
  };
 
  return (
     <Stack
      direction={"column"}
      height={"90vh"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingX={3}
    >
      <Typography color="primary" gutterBottom sx={{
        fontSize: {
          md: 50,
          xs: 30
        }
      }}>
        {n < getResult.length / 2
          ? `SORRY! ${user}`
          : `CONGRATULAIONS! ${user}`}
      </Typography>
      <Typography gutterBottom sx={{
        fontSize: {
          md: 30,
          xs: 20
        }
      }}>
        {n < getResult.length / 2
          ? "You have failed. Please try again."
          : "You have passed."}
      </Typography>
      <Typography
        mb={"30px"}
        sx={{
          fontSize: {
            md: 30,
            xs: 20
          }
        }}
      >{`Your score is ${n}/${getResult.length}.`}</Typography>
      <Link to={"/"} element={<Home />} onClick={setReset}>
        <Button variant="contained" endIcon={<HomeIcon />}>
          Back to Home
        </Button>
      </Link>
    </Stack>
  );
};

export default Result;
