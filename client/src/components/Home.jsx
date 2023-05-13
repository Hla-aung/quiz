import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Stack,
  FormControl,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { setUser } from "../controller/resultReducer";
import { useFetchQuestions } from "../hooks/fetchQuestions";
import { setQuestions } from "../controller/resultReducer";
import Quiz from "./Quiz";

const Home = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const [data] = useFetchQuestions();

  const handleClick = () => {
    if (inputRef.current.value) {
      dispatch(setUser(inputRef.current.value));
      dispatch(setQuestions({ questions: data }));
    }
  };

  const dialogOpen = () => {
    setOpen(true);
  };

  const dialogClose = () => {
    setOpen(false);
  };

  const rules = [
    "Username is required to answer the quizzes.",
    "50% and above 50% of the marks are required to pass.",
    "After clicking the 'Next Question' button, you cannot return to the previous question.",
    "Please make sure your answer is correct before clicking the 'Next Question' button.",
  ];

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
      height={"90vh"}
    >
      <Typography
        variant="h1"
        mb={"20px"}
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          border: "#2196f3 solid 3px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        Quiz App
      </Typography>
      <FormControl>
        <TextField
          inputRef={inputRef}
          type="text"
          name="username"
          placeholder="Username"
          variant="standard"
          sx={{
            color: "black",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          helperText="*Required"
        />
      </FormControl>
      <Link to="/quiz" element={<Quiz />} onClick={handleClick}>
        <Button variant="contained" size="large">
          Start
        </Button>
      </Link>
      <Button variant="contained" size="large" onClick={dialogOpen}>
        Rules
      </Button>
      <Dialog open={open} onClose={dialogClose} keepMounted>
        <DialogTitle color={"primary"}>{"RULES"}</DialogTitle>
        <DialogContent>
            <List>
              {rules.map((rule, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={rule}></ListItemText>
                </ListItem>
              ))}
            </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Home;
