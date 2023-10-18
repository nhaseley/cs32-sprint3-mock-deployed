# Mock-akataru1-nhaseley
Sprint 3: Mock
Contributors: Nya Haseley-Ayende (nhaseley), Anushka Kataruka (akataru1)
Estimated time it took to complete project: 18 hours
Github Repo: [Link](https://github.com/cs0320-f23/mock-akataru1-nhaseley)

## How to run the program
1. 
`npm install` — Installs node_modules folder for dependencies
`npx install playwright` — Installs everything needed to run PlayWright

2. Run the frontend locally using `npm start`

3. How to **load** csv file data: 
After running the frontend locally, you can load a file's data in the search bar 
using the load command.

Parameters for the request: filepath to the file to load

As an example: **load csvs/stars/stardata.csv**

4. How to **view** csv file data:
After running the frontend locally, you can load a file's data in the search bar 
using the view command. You must have loaded a csv file previously in order to 
view its data. View will always return the file data for the last loaded csv.

Parameters for the request: N/A

As an example: **view**

5. How to **search** csv file data:
After running the frontend locally, you can search a file's data in the search bar 
using the search command. You must have loaded a csv file previously in order to 
view its data. Search will always search the file data for the last loaded csv.

Parameters for the request: column name to search, search term

As an example: **search Sex Women** where Sex is a valid column Name in the 
currently loaded csv, and Women is a valid search term in that column

## Testing Rundown
- **Tests for page setup**: Tests whether the different required components of the 
page are present and visible, including the input bar, the submit button and the creator's tag
- **Tests for the functionality of the input bar and mode buttons**: These
test whether the mode (brief and verbose) buttons are visible, the page response
after clicking the submit button, and the changing of the content in the input bar
when a user types into it. We also test for the different mode options, and
checking if our display does change what it shows based on which mode a user
selects, along with the correct display formats of each mode. 
- **Tests for load, view, and search commands**: These tests extensively test whether we are 
getting correct responses to load, view, and search requests. We first check for
any invalid commands and the output returned in the command history on such commands
which can be of varying lengths and types. We also check for different load request
and responses (success, file not found, etc.), different view interactions (success, file not found, empty
file, file not loaded, multiple files loaded after one another), and different
search interactions (same cases as view, in addition to term not found, wrong column/column not found,
empty csv, etc.). All these test the breadth of different error and success responses we 
should be displaying in our page.

### Running tests witih Playwright
`npx playwright test` — Runs tests

`npx playwright show-report` — Shows a code breakdown of test progressions

`npx playwright test --ui`— Opens a UI that allows you to watch and trace your (failing) tests live in a browser

`npx playwright codegen <url>` — Opens a URL and generates tests with locators for elements on the page. 

## Components Rundown
Main components include:
### App, BodyContents, CommandInput, SearchBar, CommandHistory, ModeButtons

**App**: Highest level app component, contains a site header, description, and 
all of its body contents

**BodyContent**: All contents of the app aside from its header and description. 
Contains the buttons, commandHistory, and search bar components. Creates states
for command history, command history mode, and command string.

**CommandInput**: Contains the search bar and its functionality, using our 
mocked data. Creates state of the filepath for the current file being read. 
Displays error messages if request or response is invalid. Updates the history 
of commands to include the request just sent. If user is loading a new file, 
updates the currentFile state to the file the user is loading.

**SearchBar**: Standard search bar. Updates the command string state as the user
types in the search bar.

**CommandHistory**: Displays all previous command history. Displays with the 
command input if the user set the mode to verbose, and displays only with the 
result if the user set the mode to brief.

**ModeButtons**: Contains the buttons to swap between user's desired history 
mode to display (brief or verbose)

### mockedJson.ts: Contains all mocked data for this sprint (load, view, search)

## Design Choices
1. Depending on if the request sent from the search bar is valid, the type of 
the result to output could either be a **string[][]** (represented as a table), 
or a single **string** with the response type. This was to ensure proper error 
handling and including an output that would make sense for the user. For 
example, a valid request like **search Sex Women** would display a table with 
all rows that have match "Women" in the "Sex" column in the currently loaded 
csv. However, an invalid request like **load invalid.csv** will display a 
single string *File is not found.* Thus, in a our type declaration, we have 
**const [history, setHistory] = useState<[string, string[][]] | [string, string]>(["", ""]).**
*EDIT: We removed this functionality in our final submission due to TypeScript warnings.*

2. Mode switching for history output is selected by the user through buttons on 
the frontend, rather than commands in the search bar. This was because it was 
more intuitive and offered a solution with better UI design.
