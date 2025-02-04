const axios = require("axios");

const returnMyDetails = async (req, res) => {
  try {
    res.status(200).json({
      email: "tolanijimoh1@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Hartoley/HNG-INTERNSHIP",
    });
  } catch (error) {
    console.error("Error fetching details:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "Something went wrong. Please try again later.",
    });
  }
};

// Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if a number is a perfect number
const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

// Check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum === num;
};

// Get sum of digits of a number
const getDigitSum = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, d) => acc + parseInt(d), 0);

// Function to classify the number
const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input
  if (!/^-?\d+$/.test(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = [];

  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    // Fetch fun fact from Numbers API
    const factResponse = await axios.get(`http://numbersapi.com/${num}/math`);
    const funFact = factResponse.data;

    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: getDigitSum(num),
      fun_fact: funFact,
    });
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    res.status(500).json({ error: "Failed to fetch fun fact." });
  }
};

module.exports = { returnMyDetails, classifyNumber };
