import "../styles/App.css";
import BodyContents from "./BodyContents";

// Highest level app component
function App() {
  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
      </p>
      <div className="App-description">
        <h3>With this front-end application, we offer you the opportunity to load,
        view, and search for instances in CSVs in <i>our mocked data</i>.</h3>
        <p>
          You can choose view your command history in one of two ways:{" "}
          <b>Brief mode</b> will display the results for all previous commands
          run. <b>Verbose mode</b> will display both the commands and results
          for all previous commands run.
        </p>
        <p>
          To load, please enter the command <b>load CSV_FILEPATH</b>. To view,
          please enter the command <b>view</b>. To search, please enter the
          command <b>search COLUMN_NAME SEARCH_TERM</b>. Alternatively, you can
          search with the command
          <b> search COLUMN_INDEX SEARCH_TERM</b>. Have fun!
        </p>
      </div>
      <BodyContents />
    </div>
  );
}

export default App;
