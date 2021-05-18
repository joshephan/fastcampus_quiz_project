import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";
import { check, next } from "./../store/modules/score";
import styled from "styled-components";

const Img = styled.img`
  width: inherit;
  margin-bottom: 50px;
`;
export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <h1 style={{ margin: "50px 0" }}>{quiz[page - 1].q}</h1>
      {quiz[page - 1].img && <Img src={quiz[page - 1].img} />}
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            key={item.text}
            text={item.text}
            clickEvent={() => {
              console.log(item);
              // 정답 체크
              dispatch(check({ isCorrect: item.isCorrect }));
              // 다음 페이지로 이동
              dispatch(next());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quiz.length} />
    </>
  );
}
