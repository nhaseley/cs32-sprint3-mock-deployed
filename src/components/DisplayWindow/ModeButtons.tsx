import { Dispatch, SetStateAction } from "react";
import '../../styles/main.css';

interface ModeButtonsProps{
  historyMode: string;
  setHistoryMode: Dispatch<SetStateAction<string>>;
}

// Component with buttons to swap between user's desired history mode to display
export default function ModeButtons(props : ModeButtonsProps) {

  return (
    <div className="mode-buttons"> 
     <button 
     className="brief-button" 
     onClick={() => {
      props.setHistoryMode("brief");
    }}
    style={{
      border: props.historyMode === "brief" ? "0.5vw solid #213547" : "none",
      backgroundColor: props.historyMode === "brief" ? "#A52A2A" : "darkblue",

    }}
> Brief </button>
     <button 
     className="verbose-button" 
     onClick={() => {
      props.setHistoryMode("verbose");
    }}     
    style={{
      border: props.historyMode === "verbose" ? "0.5vw solid #213547" : "none",
      backgroundColor: props.historyMode === "verbose" ? "#A52A2A" : "darkblue",
    }}
> Verbose </button>
    </div>
  );
}