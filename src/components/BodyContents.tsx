import { useState } from 'react';
import "../styles/main.css"
import { CommandHistory } from './DisplayWindow/CommandHistory';
import { CommandInput } from './CommandSearch/CommandInput';
import ModeButtons from "./DisplayWindow/ModeButtons"
import CreatorsTag from "./CreatorsTag"

export default function BodyContents() {
  // List of command, result
  const [history, setHistory] = useState<[string, string[][]][]>([]); 
  // String to represent the mode selected by the user (either verbose or brief)
  const [historyMode, setHistoryMode] = useState<string>("brief")
  const [commandString, setCommandString] = useState<string>("");

  return (
    <div className="body-contents"> 
     <ModeButtons historyMode={historyMode} setHistoryMode={setHistoryMode}></ModeButtons>
      <CommandHistory history={history} historyMode={historyMode} commandString={commandString}/>
      <hr></hr>
      <CommandInput history={history} setHistory={setHistory} commandString={commandString} setCommandString={setCommandString}/>
      <CreatorsTag></CreatorsTag>
    </div>
  );
}
