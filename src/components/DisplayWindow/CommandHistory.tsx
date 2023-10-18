import "../../styles/main.css";

interface CommandHistoryProps {
  history: [string, string[][]][];
  historyMode: string;
  commandString: string; // current command being typed by user
}

// Component to display all command history
export function CommandHistory(props: CommandHistoryProps) {
  return (
    <div className="command-history">
      <h2> Your Previous Commands: </h2> <hr></hr>
      {props.history.map((command, index) => (
        <div className="datum" key={index}>
          {props.historyMode === "verbose" ? (
            <div>
              <div className="command">
                Command:
                {" " + command[0]}
              </div>
              <p className="result"> Output:</p>
            </div>
          ) : null}

          {command[1][0].length != 1 ? ( 
            // more than 1 column in result, so display as a table
            <table>
              <tbody>
                {command[1].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            " " + command[1]
          )}
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
