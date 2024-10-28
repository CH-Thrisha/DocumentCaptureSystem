// Mock function to simulate data extraction from an uploaded image
function extractData() {
    // Mock extracted data
    const extractedData = {
      fullName: "John Doe",
      passportNumber: "A12345678",
      dateOfBirth: "1990-05-15",
      nationality: "US",
      issueDate: "2020-01-01",
      expirationDate: "2030-01-01"
    };
  
    // Populate fields with extracted data
    document.getElementById('fullName').value = extractedData.fullName;
    document.getElementById('passportNumber').value = extractedData.passportNumber;
    document.getElementById('dateOfBirth').value = extractedData.dateOfBirth;
    document.getElementById('nationality').value = extractedData.nationality;
    document.getElementById('issueDate').value = extractedData.issueDate;
    document.getElementById('expirationDate').value = extractedData.expirationDate;
  }
  
  // Function to validate extracted data fields
  function validateData() {
    const passportNumber = document.getElementById('passportNumber').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const issueDate = document.getElementById('issueDate').value;
    const expirationDate = document.getElementById('expirationDate').value;
    
    let validationMessage = '';
  
    // Basic Validation Checks
    if (!passportNumber.match(/^[A-Z0-9]{8,9}$/)) {
      validationMessage += "Invalid Passport Number. ";
    }
    
    if (!isValidDate(dateOfBirth)) {
      validationMessage += "Invalid Date of Birth. ";
    }
    
    if (!isValidDate(issueDate)) {
      validationMessage += "Invalid Issue Date. ";
    }
    
    if (!isValidDate(expirationDate)) {
      validationMessage += "Invalid Expiration Date. ";
    }
  
    if (validationMessage === '') {
      validationMessage = "All fields are valid!";
    }
  
    document.getElementById('validationMessage').textContent = validationMessage;
  }
  
  // Helper function to validate date format (YYYY-MM-DD)
  function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regex)) return false;
  
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }
  