import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";

export const useFetchQuestions = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const questions = await (
        await axios.get("http://localhost:3000/api/questions")
      ).data;

      const i = Math.round(Math.random() * (questions.length - 1));

      try {
        if (questions.length > 0) {
          setData(questions[i]);
        }
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return [data, setData];
};
