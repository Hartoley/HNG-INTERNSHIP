const returnMyDetails = async (req, res) => {
  try {
    res.status(200).json({
      email: "tolanijimoh1@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Hartoley/HNG-INTERNSHIP",
    });
  } catch (error) {
    console.error("Error fetching details:", error); // Logs error for debugging
    res.status(500).json({
      error: "Internal Server Error",
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { returnMyDetails };
