import _ from "lodash";
import theme from "../components/styles/themes";

/**
 * Generate a string of non-breaking spaces (tabs) for indentation.
 * @param {number} num - Number of additional spaces to add.
 * @returns {string} A string of non-breaking spaces.
 */
export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check if the provided argument array is invalid for a given action and options.
 * @param {string[]} arg - The argument array.
 * @param {string} action - The action to check for.
 * @param {string[]} options - The list of valid options.
 * @returns {boolean} True if invalid, false otherwise.
 */
export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
): boolean =>
  arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

/**
 * Get the current command array from history (splits first entry by spaces).
 * @param {string[]} history - The history array containing commands.
 * @returns {string[]} The current command split into an array.
 */
export const getCurrentCmdArry = (history: string[]): string[] =>
  _.split(history[0].trim(), " ");

/**
 * Check if the command triggers a redirect based on conditions.
 * @param {boolean} rerender - Whether rerender is triggered.
 * @param {string[]} currentCommand - The current command split into an array.
 * @param {string} command - The base command to check for.
 * @returns {boolean} True if a redirect should occur, false otherwise.
 */
export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean =>
  rerender &&
  currentCommand[0] === command &&
  currentCommand[1] === "go" &&
  currentCommand.length > 1 &&
  currentCommand.length < 4 &&
  _.includes([1, 2, 3, 4], parseInt(currentCommand[2]));

/**
 * Check if the theme switch command should trigger a theme change.
 * @param {boolean} rerender - Whether rerender is triggered.
 * @param {string[]} currentCommand - The current command split into an array.
 * @param {string[]} themes - Array of valid theme names.
 * @returns {boolean} True if theme should change, false otherwise.
 */
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

/**
 * Provide tab-completion hints or changes for theme commands.
 * @param {string} inputVal - Current input value.
 * @param {(value: React.SetStateAction<string>) => void} setInputVal - Setter for the input value.
 * @param {(value: React.SetStateAction<string[]>) => void} setHints - Setter for the hints list.
 * @param {string[]} hintsCmds - Array of current hint commands.
 * @returns {string[] | undefined} Array of completion hints or undefined.
 */
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

  //  Show available theme keys after "themes set "
  if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  //  Suggest matching theme keys for partial matches
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
