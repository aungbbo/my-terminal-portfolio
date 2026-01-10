import _ from "lodash";
import theme from "../components/styles/themes";

export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
): boolean =>
  arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

export const getCurrentCmdArry = (history: string[]): string[] =>
  _.split(history[0].trim(), " ");

export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: string[]
): boolean =>
  rerender &&
  currentCommand[0] === "themes" &&
  currentCommand[1] === "set" &&
  currentCommand.length > 1 &&
  currentCommand.length < 4 &&
  _.includes(themes, currentCommand[2]);

export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  if (inputVal === "themes ") {
    setInputVal("themes set");
    return [];
  }

  if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal("themes set");
    return [];
  }

  if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  if (_.startsWith(inputVal, "themes set ")) {
    const partialTheme = _.split(inputVal, " ")[2];
    _.keys(theme).forEach((t) => {
      if (_.startsWith(t, partialTheme)) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }
};
