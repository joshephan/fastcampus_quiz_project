import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
  display: block;
  margin-bottom: 29px;
  padding: 1.8em;
  background: #fefefe;
  position: relative;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: inherit;
  line-height: 1.6;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  border: 2px solid #8599b1;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  user-select: none;
  transition: transform 0.15s ease-out, background 0.15s ease-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #c4d8f9;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2efff;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    transform: translateY(0.25em);
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
