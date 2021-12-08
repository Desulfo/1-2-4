const generateNumbers = () => {
  const amountOfNumbers = 20;
  const numbers = [];
  for (let i = 0; i < amountOfNumbers; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    numbers.push(number);
  }
  return numbers;
};

const resultsTable = document.getElementById("numbers");
function addRow(evenNumber, oddNumber) {
  const row = document.createElement("tr");
  const evenCol = document.createElement("td");
  const oddCol = document.createElement("td");

  evenCol.innerHTML = evenNumber;
  oddCol.innerHTML = oddNumber;

  row.appendChild(evenCol);
  row.appendChild(oddCol);
  resultsTable.appendChild(row);
}

const createRowsInTable = (evenNumbers, oddNumbers) => {
  const isMoreEvenNumbers = evenNumbers.length >= oddNumbers.length;
  const longerArray = isMoreEvenNumbers ? evenNumbers : oddNumbers;
  const shorterArray = isMoreEvenNumbers ? oddNumbers : evenNumbers;
  resultsTable.innerHTML = "";
  longerArray.forEach((number, index) => {
    const shorterArrayNumber = shorterArray[index] || "";
    isMoreEvenNumbers
      ? addRow(number, shorterArrayNumber)
      : addRow(shorterArrayNumber, number);
  });
};

const displayResults = () => {
  const evenNumbers = [];
  const oddNumbers = [];

  const numbers = generateNumbers();
  for (const number of numbers) {
    number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number);
  }

  const compareNumbers = (a, b) => a - b;
  evenNumbers.sort(compareNumbers);
  oddNumbers.sort(compareNumbers);

  createRowsInTable(evenNumbers, oddNumbers);
};

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", displayResults);
