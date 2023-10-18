import { test, expect } from '@playwright/test';
import {
  MockLoadOutputs,
  MockViewOutputs,
  MockSearchOutputs,
} from "../mock-data/mockedJson"; // All our mocked data

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:8000/")
  })

test('on page load, i see an input bar', async ({ page }) => {
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('Awesome command');
  const mock_input = `Awesome command`
  await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see all the buttons', async ({ page }) => {
  await expect(page.locator('.submit-button')).toBeVisible()
  await expect(page.locator('.brief-button')).toBeVisible()
  await expect(page.locator('.verbose-button')).toBeVisible()
});

test('after I click the button, the search box resets', async ({ page }) => {
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv');
  await page.locator('.submit-button').click();
  await expect(page.getByLabel('Command input')).toHaveValue("")
});

test('after submitting with an invalid command, I get an error message', async ({ page }) => {
  const intro = await page.locator('.command-history').innerText()
  expect(intro).toBe("Your Previous Commands:")

  // try to send a command without "load", "search" or "view"
  await page.getByLabel('Command input').fill(''); 
  await page.locator('.submit-button').click();
  const invalidSubmit = await page.locator('.command-history').innerText()
  // display error message
  expect(invalidSubmit).toBe(intro + "\nPlease input a command.")

  // try to load an invalid csv filepath
  await page.getByLabel('Command input').fill('load not_mocked_data'); 
  await page.locator('.submit-button').click();
  const invalidPath = await page.locator('.command-history').innerText()
  // display error message
  expect(invalidPath).toBe(invalidSubmit + "\nNo mocked data for this csv.") 

  // try to put in a command less than 5 characters
  await page.getByLabel('Command input').fill('no'); 
  await page.locator('.submit-button').click();
  const unexpectedCommand = await page.locator('.command-history').innerText()
  // display error message
  expect(unexpectedCommand).toBe(invalidPath + "\nInvalid command.") 

  // try to put in a command that is not of type "load", "view", or "search"
  await page.getByLabel('Command input').fill('aaaaaa'); 
  await page.locator('.submit-button').click();
  const invalidCommand = await page.locator('.command-history').innerText()
  // display error message
  expect(invalidCommand).toBe(unexpectedCommand + "\nNo mocked data found.") 
});

test('after loading a csv file, I can view if it was successful', async ({ page }) => {
  const intro = await page.locator('.command-history').innerText()
  expect(intro).toBe("Your Previous Commands:")

  // load star mocked data
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv'); 
  await page.locator('.submit-button').click();
  const starMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(starMockedLoad).toBe(intro + "\nsuccess") 

  // load invalid csv mocked data
  await page.getByLabel('Command input').fill('load invalid.csv'); 
  await page.locator('.submit-button').click();
  const invalidMockedLoad = await page.locator('.command-history').innerText()
  // display mocked file not found message
  expect(invalidMockedLoad).toBe(starMockedLoad + "\nFile not found.") 

  // load star mocked data again
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv'); 
  await page.locator('.submit-button').click();
  const starMockedLoad2 = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(starMockedLoad2).toBe(invalidMockedLoad + "\nsuccess") 

  // load census mocked data
  await page.getByLabel('Command input').fill('load csvs/census/postsecondary_education.csv');
  await page.locator('.submit-button').click();
  const censusMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(censusMockedLoad).toBe(starMockedLoad2 + "\nsuccess") 

  // load fruit mocked data
  await page.getByLabel('Command input').fill('load fruitdata.csv');
  await page.locator('.submit-button').click();
  const fruitMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(fruitMockedLoad).toBe(censusMockedLoad + "\nsuccess") 
});

test('after loading csv files, I can view loaded files', async ({ page }) => {
  const intro = await page.locator('.command-history').innerText()
  expect(intro).toBe("Your Previous Commands:")

  // attempt to view unloaded data
  await page.getByLabel('Command input').fill('view csvs/census/postsecondary_education.csv'); 
  await page.locator('.submit-button').click();
  const unloadedMockedView = await page.locator('.command-history').innerText()
  // display mocked file not found message
  expect(unloadedMockedView).toBe(intro + "\nNo csv loaded yet.") 

  /*
  // view invalid file
  await page.getByLabel('Command input').fill('view invalid.csv');
  await page.locator('.submit-button').click();
  const invalidMockedView = await page.locator('.command-history').innerText()
  // display mocked file not found message
  expect(invalidMockedView).toContain("\nFile with this path is not found.") 
  */

  // load star mocked data
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv'); 
  await page.locator('.submit-button').click();
  const starMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(starMockedLoad).toBe(unloadedMockedView + "\nsuccess") 

  //view successfully loaded csv
  await page.getByLabel('Command input').fill('view'); 
  await page.locator('.submit-button').click();
  const starMockedView = await page.locator('.command-history').innerText()
  // displayed output contains the data
  expect(starMockedView).toContain(MockViewOutputs['csvs/stars/stardata.csv'][6][2]) 


  //load empty csv
  await page.getByLabel('Command input').fill('load csvs/MyCSVs/empty.csv');
  await page.locator('.submit-button').click();

  //attempt to view empty csv
  await page.getByLabel('Command input').fill('view csvs/MyCSVs/empty.csv');
  await page.locator('.submit-button').click();
  const emptyMockView = await page.locator('.command-history').innerText()
  // display mocked empty view message
  expect(emptyMockView).toContain("\nThis file is empty.") 

  //load fruit csv
  await page.getByLabel('Command input').fill('load fruitdata.csv');
  await page.locator('.submit-button').click();

  //view fruit csv
  await page.getByLabel('Command input').fill('view fruitdata.csv');
  await page.locator('.submit-button').click();
  const fruitMockedView = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(fruitMockedView).toContain('Jackfruit') 

});

test('after loading csv files, I can search loaded files', async ({ page }) => {
  const intro = await page.locator('.command-history').innerText()
  expect(intro).toBe("Your Previous Commands:")

  // attempt to search unloaded data
  await page.getByLabel('Command input').fill('search Sex Women'); 
  await page.locator('.submit-button').click();
  const unloadedMockedView = await page.locator('.command-history').innerText()
  // display mocked file not found message
  expect(unloadedMockedView).toBe(intro + "\nNo csv loaded yet.") 

  /*
  // view invalid file
  await page.getByLabel('Command input').fill('view invalid.csv');
  await page.locator('.submit-button').click();
  const invalidMockedView = await page.locator('.command-history').innerText()
  // display mocked file not found message
  expect(invalidMockedView).toContain("\nFile with this path is not found.") 
  */
 
  // load star mocked data
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv'); 
  await page.locator('.submit-button').click();
  const starMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(starMockedLoad).toBe(unloadedMockedView + "\nsuccess") 

  //search successfully loaded csv
  await page.getByLabel('Command input').fill('search 0 Merlin'); 
  await page.locator('.submit-button').click();
  const starMockedSearch = await page.locator('.command-history').innerText()
  // displayed output contains the data
  expect(starMockedSearch).toContain("52.09682") 


  //load empty csv
  await page.getByLabel('Command input').fill('load csvs/MyCSVs/empty.csv');
  await page.locator('.submit-button').click();

  //attempt to search empty csv
  await page.getByLabel('Command input').fill('search 0  ');
  await page.locator('.submit-button').click();
  const emptyMockSearch = await page.locator('.command-history').innerText()
  // display mocked empty search message
  expect(emptyMockSearch).toContain("\nThis csv is empty.") 

  //load fruit csv
  await page.getByLabel('Command input').fill('load fruitdata.csv');
  await page.locator('.submit-button').click();

  //search fruit csv
  await page.getByLabel('Command input').fill('search 0 Bananas');
  await page.locator('.submit-button').click();
  const fruitMockedSearch = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(fruitMockedSearch).toContain('Bananas') 

  //load census csv
  await page.getByLabel('Command input').fill('load csvs/census/postsecondary_education.csv');
  await page.locator('.submit-button').click();

  //search census csv - this time by column name
  await page.getByLabel('Command input').fill('search Sex Women');
  await page.locator('.submit-button').click();
  const censusMockedSearch = await page.locator('.command-history').innerText()
  // returned data contains correct search result 
  expect(censusMockedSearch).toContain(MockSearchOutputs['csvs/census/postsecondary_education.csv']['search Sex Women'][4][3]) 

  //load stars csv
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv');
  await page.locator('.submit-button').click();

  //search stars csv - with value not found in specified column
  await page.getByLabel('Command input').fill('search 0 Sandeep');
  await page.locator('.submit-button').click();
  const notFoundMockedSearch = await page.locator('.command-history').innerText()
  // returned data contains correct error message
  expect(notFoundMockedSearch).toContain('No matches from the loaded csv') 

  //load stars csv again
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv');
  await page.locator('.submit-button').click();

  //search stars csv - this time no column specified
  await page.getByLabel('Command input').fill('search Merlin');
  await page.locator('.submit-button').click();
  const noColumnMockedSearch = await page.locator('.command-history').innerText()
  // returned data contains correct error message
  expect(noColumnMockedSearch).toContain(MockSearchOutputs['csvs/stars/stardata.csv']['search Merlin'][0][0]) 
  
  //load census csv again
  await page.getByLabel('Command input').fill('load csvs/census/postsecondary_education.csv');
  await page.locator('.submit-button').click();

  //search stars csv - but term simply not found
  await page.getByLabel('Command input').fill('search 3 Bruh');
  await page.locator('.submit-button').click();
  const notFoundMockedSearch2 = await page.locator('.command-history').innerText()
  // returned data contains correct error message
  expect(notFoundMockedSearch2).toContain('No matches from the loaded csv') 

  //load fruit csv again
  await page.getByLabel('Command input').fill('load fruitdata.csv');
  await page.locator('.submit-button').click();

  //search fruit csv - column doesn't exist
  await page.getByLabel('Command input').fill('search 1 Apples');
  await page.locator('.submit-button').click();
  const colNotFoundMockedSearch = await page.locator('.command-history').innerText()
  // returned data contains correct error message
  expect(colNotFoundMockedSearch).toContain(MockSearchOutputs['fruitdata.csv']['search 1 Apples'][0][0]) 

});

test('when i click the mode buttons the command history view changes', async ({ page }) => {
  const intro = await page.locator('.command-history').innerText()
  expect(intro).toBe("Your Previous Commands:")


  // try to put in a command less than 5 characters
  await page.getByLabel('Command input').fill('no'); 
  await page.locator('.submit-button').click();
  const unexpectedCommand = await page.locator('.command-history').innerText()
  // display error message
  expect(unexpectedCommand).toBe(intro + "\nInvalid command.") 

  // try to put in a command that is not of type "load", "view", or "search"
  await page.getByLabel('Command input').fill('aaaaaa'); 
  await page.locator('.submit-button').click();
  const invalidCommand = await page.locator('.command-history').innerText()
  // display error message
  expect(invalidCommand).toBe(unexpectedCommand + "\nNo mocked data found.") 

  // load star mocked data
  await page.getByLabel('Command input').fill('load csvs/stars/stardata.csv'); 
  await page.locator('.submit-button').click();
  const starMockedLoad = await page.locator('.command-history').innerText()
  // display mocked success message
  expect(starMockedLoad).toBe(invalidCommand + "\nsuccess") 

  //test display format in verbose mode 
  await page.locator('.verbose-button').click();
  const verboseOutput = await page.locator('.command-history').innerText()
  expect(verboseOutput).toContain("Command: aaaaaa")
  expect(verboseOutput).toContain("Command: no")
  expect(verboseOutput).toContain("Command: load csvs/stars/stardata.csv")
  expect(verboseOutput).toContain("Output:")

  //test display in brief mode
  await page.locator('.brief-button').click();
  const briefOutput = await page.locator('.command-history').innerText()
  expect(briefOutput).toBe(starMockedLoad)
})