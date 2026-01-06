import { useCallback, useEffect, useRef, useState } from "react";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCmdHistory([inputVal, ...cmdHistory]);
    setInputVal("");
    setPointer(-1);
  };

  // Focus on click anywhere
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && pointer < cmdHistory.length - 1) {
      setInputVal(cmdHistory[pointer + 1]);
      setPointer((p) => p + 1);
    }
    if (e.key === "ArrowDown" && pointer >= 0) {
      setPointer((p) => p - 1);
      setInputVal(pointer === 0 ? "" : cmdHistory[pointer - 1]);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>
        <Input
          type="text"
          id="terminal-input"
          autoComplete="off"
          autoFocus
          ref={inputRef}
          value={inputVal}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </Form>

      {cmdHistory.map((cmd, index) => (
        <div key={index}>
          <div>
            <TermInfo />
            <MobileBr />
            <MobileSpan>&#62;</MobileSpan>
            <span>{cmd}</span>
          </div>
          {cmd === "" ? (
            <Empty />
          ) : (
            <CmdNotFound>command not found: {cmd}</CmdNotFound>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default Terminal;
