/**
 * Mocked data for load commands
 * Will output a string of either success or an error message upon load failure
 */
interface MockLoadData {
  [key: string]: string[][];
}

const MockLoadOutputs: MockLoadData = {
  "csvs/stars/stardata.csv": [["success"]],
  "fruitdata.csv": [["success"]],
  "csvs/census/postsecondary_education.csv": [["success"]],
  "invalid.csv": [["File not found."]],
  "csvs/MyCSVs/empty.csv": [["success"]],
};

/**
 * Mocked data for view commands
 * Can either view a table (string[][]) or a single string
 */
interface MockViewData {
  [key: string]: string[][];
}

const normalStarViewOutput: string[][] = [
  ["0", "Sol", "0", "0", "0"],
  ["1", "Andreas", "282.43485", "0.00449", "5.36884"],
  ["2", "Rory", "43.04329", "0.00285", "-15.24144"],
  ["3", "Mortimer", "277.11358", "0.02422", "223.27753"],
  ["4", "Bailee", "79.62896", "0.01164", "-101.53103"],
  ["5", "Zita", "264.58918", "0.04601", "-226.71007"],
  ["6", "Araceli", "53.06535", "0.0168", "3.66089"],
  ["7", "Casey", "52.95794", "0.02084", "19.31343"],
  ["8", "Eura", "174.01562", "0.08288", "84.44669"],
  ["9", "Aracely", "166.9363", "0.10297", "123.9143"],
  ["10", "Destany", "58.65441", "0.03711", "-72.08957"],
  ["11", "Cael", "159.15237", "0.1036", "170.31215"],
  ["12", "Kaleigh", "199.36567", "0.14237", "-144.63632"],
  ["13", "Nikhil", "264.5403", "0.19243", "-110.08871"],
  ["14", "Elex", "195.69077", "0.16486", "-1.23101"],
  ["15", "Nataly", "258.01976", "0.22655", "316.26412"],
  ["16", "Channie", "124.20847", "0.11077", "-104.93583"],
  ["17", "Jered", "1084.53445", "0.97309", "-1543.94618"],
  ["18", "Less", "50.05006", "0.04641", "-3.54701"],
  ["19", "Jerel", "190.46888", "0.17724", "150.44538"],
  ["20", "Sandi", "85.20962", "0.09361", "37.10201"],
  ["21", "Lesa", "169.56332", "0.19602", "23.85242"],
  ["22", "Paul", "145.72842", "0.17838", "-169.738"],
  ["23", "Sandy", "79.69934", "0.10353", "18.85807"],
  ["24", "Kraig", "94.28446", "0.12514", "-40.90366"],
  ["25", "Merlin", "52.09682", "0.07216", "-50.82198"],
  ["26", "Vanesa", "105.85439", "0.15582", "-25.20501"],
  ["27", "Bailey", "77.77346", "0.11601", "-68.31981"],
  ["28", "Althea", "128.90634", "0.19629", "-121.7381"],
  ["29", "Lucille", "229.69649", "0.36935", "-265.24363"],
  ["30", "Georgene", "195.64354", "0.32826", "177.03531"],
  ["31", "Hamilton", "542.88504", "0.92945", "25.36898"],
  ["32", "Johnie", "198.86852", "0.34217", "253.98713"],
  ["33", "Dionne", "109.99693", "0.1904", "-20.31221"],
  ["34", "Shantel", "70.15358", "0.12179", "35.61908"],
  ["35", "Stephanie", "162.44759", "0.29078", "-41.98307"],
  ["36", "Raheem", "155.10574", "0.27957", "33.72526"],
  ["37", "Murl", "181.73838", "0.33416", "-196.1197"],
  ["38", "Ginger", "7.95927", "0.01542", "-41.18425"],
  ["39", "Audy", "87.23461", "0.17031", "-26.16659"],
  ["40", "Hughie", "170.61645", "0.3471", "237.45798"],
];

const normalEducationViewOutput: string[][] = [
  [
    "Asian",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "214",
    "brown-university",
    "0.069233258",
    "Men",
    "1",
  ],
  [
    "Black or African American",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "77",
    "brown-university",
    "0.024911032",
    "Men",
    "1",
  ],
  [
    "Native Hawaiian or Other Pacific Islanders",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "3",
    "brown-university",
    "0.00097056",
    "Men",
    "1",
  ],
  [
    "Hispanic or Latino",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "143",
    "brown-university",
    "0.046263345",
    "Men",
    "1",
  ],
  [
    "Two or More Races",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "58",
    "brown-university",
    "0.018764154",
    "Men",
    "1",
  ],
  [
    "American Indian or Alaska Native",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "4",
    "brown-university",
    "0.00129408",
    "Men",
    "1",
  ],
  [
    "Non-resident Alien",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "327",
    "brown-university",
    "0.105791006",
    "Men",
    "1",
  ],
  [
    "White",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "691",
    "brown-university",
    "0.223552248",
    "Men",
    "1",
  ],
  [
    "Asian",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "235",
    "brown-university",
    "0.076027176",
    "Women",
    "2",
  ],
  [
    "Black or African American",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "95",
    "brown-university",
    "0.03073439",
    "Women",
    "2",
  ],
  [
    "Native Hawaiian or Other Pacific Islanders",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "4",
    "brown-university",
    "0.00129408",
    "Women",
    "2",
  ],
  [
    "Hispanic or Latino",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "207",
    "brown-university",
    "0.066968619",
    "Women",
    "2",
  ],
  [
    "Two or More Races",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "85",
    "brown-university",
    "0.027499191",
    "Women",
    "2",
  ],
  [
    "American Indian or Alaska Native",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "7",
    "brown-university",
    "0.002264639",
    "Women",
    "2",
  ],
  [
    "Non-resident Alien",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "281",
    "brown-university",
    "0.090909091",
    "Women",
    "2",
  ],
  [
    "White",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "660",
    "brown-university",
    "0.213523132",
    "Women",
    "2",
  ],
];

const normalFruitViewOutput: string[][] = [
  ['Apples'],
  ['Bananas'],
  ['Grapes'],
  ['Jackfruit'],
  ['Mangoes'],
  ['Peaches'],
  ['Lychee'],
  ['Cherries'],
  ['Strawberries']
]


const invalidFilepathViewOutput: string[][] = [["File with this path is not found."]];

const MockViewOutputs: MockViewData = {
  "csvs/stars/stardata.csv": normalStarViewOutput,
  "fruitdata.csv": normalFruitViewOutput,
  "csvs/census/postsecondary_education.csv": normalEducationViewOutput,
  "invalid.csv": invalidFilepathViewOutput,
  "csvs/MyCSVs/empty.csv": [["This file is empty."]],
};
// add more mocked data here

/**
 * Mocked data for search commands
 * Hashmap of the filepath as a key, and the result of term search as the value
 * Either outputs a table (string[][]) or a single string
 */
interface MockSearchData {
  [filePath: string]: {
    [searchCommand: string]: string[][];
  };
}

const normalStarSearchOutput: string[][] = [
  ["Merlin", "52.09682", "0.07216", "-50.82198"],
];
const normalFruitSearchOutput: string[][] = [["Bananas"]];
const normalEducationSearchOutput: string[][] = [
  [
    "Asian",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "235",
    "brown-university",
    "0.076027176",
    "Women",
    "2",
  ],
  [
    "Black or African American",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "95",
    "brown-university",
    "0.03073439",
    "Women",
    "2",
  ],
  [
    "Native Hawaiian or Other Pacific Islanders",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "4",
    "brown-university",
    "0.00129408",
    "Women",
    "2",
  ],
  [
    "Hispanic or Latino",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "207",
    "brown-university",
    "0.066968619",
    "Women",
    "2",
  ],
  [
    "Two or More Races",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "85",
    "brown-university",
    "0.027499191",
    "Women",
    "2",
  ],
  [
    "American Indian or Alaska Native",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "7",
    "brown-university",
    "0.002264639",
    "Women",
    "2",
  ],
  [
    "Non-resident Alien",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "281",
    "brown-university",
    "0.090909091",
    "Women",
    "2",
  ],
  [
    "White",
    "2020",
    "2020",
    "217156",
    "Brown University",
    "660",
    "brown-university",
    "0.213523132",
    "Women",
    "2",
  ],
];
const invalidFilepathSearchOutput: string[][] = [["File not found."]];
const invalidRequestOutput: string[][] = [["Please search in format of 'search <column> <value>'"]]
const columnNotFoundOutput: string[][] = [["Column not found in this csv."]]

// add more mocked data here
const MockSearchOutputs: MockSearchData = {
  "csvs/stars/stardata.csv": {
    "search 0 Merlin": normalStarSearchOutput,
    "search Merlin": invalidRequestOutput,
    "search 0": invalidRequestOutput
  },
  "fruitdata.csv": {
    "search 0 Bananas": normalFruitSearchOutput,
    "search 1 Apples": columnNotFoundOutput
  },
  "csvs/census/postsecondary_education.csv": {
    "search Sex Women": normalEducationSearchOutput,
  },
  "invalid.csv": {
    "search 0  ": invalidFilepathSearchOutput,
  },
  "csvs/MyCSVs/empty.csv": {
    "search 0  ": [["This csv is empty."]],
  },
  
};

// exporting so we can use these mocked data to return in CommandInput
export { MockLoadOutputs, MockViewOutputs, MockSearchOutputs };