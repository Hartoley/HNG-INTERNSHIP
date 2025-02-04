# HNG Internship - Stage 0 Backend

## Project Description

This project is part of the HNG Internship (Stage 0) Backend challenge. It involves building a simple public API that returns basic information about the developer, including:

- Registered email address
- Current datetime in ISO 8601 format
- GitHub URL of the project's codebase

This API is built using **Node.js** and the **Express** framework.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version >= 14.x)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hartoley/HNG-INTERNSHIP.git
   ```
2. **Navigate into the project directory:**

   ```bash
   cd HNG-INTERNSHIP

   ```

3. **Install dependencies:**

   ```bash
   npm install

   ```

4. **Run the project:**

   ```bash
   npm start

   ```

5. **API should now be running at:**
   http://localhost:5010/

6. **The API accepts a GET request and will respond with the following JSON structure:**
   {
   "email": "tolanijimoh1@gmail.com",
   "current_datetime": "2025-01-30T09:30:00Z",
   "github_url": "https://github.com/Hartoley/HNG-INTERNSHIP"
   }
7. **If you're looking for developers skilled in Node.js, consider hiring through this Node.js developer page:** [Node.js Developer Page](https://hng.tech/hire/nodejs-developers).

### **Stage 1: Number Classification API**

This stage builds upon Stage 0 by introducing an API that classifies numbers based on their mathematical properties and provides a fun fact.

#### **API Specifications**

- **Endpoint:** `GET /api/classify-number?number={number}`
- **Parameters:**
  - `number` (required): An integer to classify
- **Response Format:** JSON
- **CORS Handling:** Enabled
- **Deployment:** Publicly accessible
- **Version Control:** Hosted on a public GitHub repository

#### **Example Responses**

**✅ 200 OK (Valid Number Response)**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**❌ 400 Bad Request (Invalid Input Response)**

```json
{
  "number": "alphabet",
  "error": true
}
```

#### **Classification Logic**

- **Prime Check**: Determines if the number is prime.
- **Perfect Number Check**: Determines if the sum of divisors (excluding itself) equals the number.
- **Armstrong Check**: If sum of its digits raised to the power of their count equals the number.
- **Odd/Even Check**: Determines if the number is odd or even.
- **Digit Sum Calculation**: Computes the sum of its digits.
- **Fun Fact Retrieval**: Fetches a mathematical fun fact from [Numbers API](http://numbersapi.com/).

---

5. **Access the API:**
   - Developer Info: `http://localhost:5010/`
   - Number Classification: `http://localhost:5010/api/classify-number?number=371`

---
