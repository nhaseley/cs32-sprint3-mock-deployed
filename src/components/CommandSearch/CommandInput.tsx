import "../../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { SearchBar } from "./SearchBar";
import {
  MockLoadOutputs,
  MockViewOutputs,
  MockSearchOutputs,
} from "../../../mock-data/mockedJson"; // All our mocked data

interface CommandInputProps {
  history: [string, string[][]][];
  setHistory: Dispatch<SetStateAction<[string, string[][]][]>>;
  commandString: string;
  setCommandString: Dispatch<SetStateAction<string>>;
}

// Component that manages the contents of the input box
export function CommandInput(props: CommandInputProps) {

  const lastCommand: string = props.commandString;
  // State for the current filepath being loaded
  const [currentFile, setCurrentFile] = useState("");
  // Extract mocked data for load, view, and search
  const loadData = MockLoadOutputs;
  const viewData = MockViewOutputs;
  const searchData = MockSearchOutputs;

  /**
   * Function that handles when the search button is pressed by the user
   * Grabs the corresponding result value for valid load, view and search
   * commands in our mocked data
   * Displays error messages if request or response is invalid
   * Updates the history of commands to include the request just sent
   * If we are loading a new file, updates the currentFile state to the
   * file the user is loading
   */
  function handleSubmit() {
    let result: string[][] =
      lastCommand && lastCommand.length >= 4
        ? lastCommand.slice(0, 5) === "load "
          ? loadData[lastCommand.slice(5)] || "No mocked data for this csv."
          : lastCommand.slice(0, 4) === "view"
          ? viewData[currentFile] || "No csv loaded yet."
          : lastCommand.slice(0, 7) === "search "
          ? !currentFile
            ? [["No csv loaded yet."]]
            : searchData[currentFile][lastCommand] ||
              [["No matches from the loaded csv."]]
          : [["No mocked data found."]]
        : [["Invalid command."]];

    props.commandString != ""
      ? props.setHistory([...props.history, [props.commandString, result]])
      : props.setHistory([
          ...props.history,
          [props.commandString, [["Please input a command."]]],
        ]);
    props.setCommandString("");
    setCurrentFile(
      props.commandString.slice(0, 4) == "load"
        ? props.commandString.split(" ")[1]
        : currentFile
    ); // Grab only the url if we are loading
  }

  return (
    <div className="command-input">
      <fieldset className="command-fieldset">
        <legend>Enter a command:</legend>
        <SearchBar
          value={props.commandString}
          setValue={props.setCommandString}
          ariaLabel={"Command input"}
        />
        <button className="submit-button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </fieldset>
    </div>
  );
}