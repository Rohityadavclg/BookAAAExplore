//const BASE_URL = 'http://localhost:5000'; 
const BASE_URL='https://ksnezqtepd.us-east-1.awsapprunner.com';
 // actual base url 
async function fetchAllTreks() {
  try {
    const response = await fetch(`${BASE_URL}/api/public/treks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;  // Return just the array of treks
  } catch (error) {
    console.error('Error fetching treks:', error);
    return [];
  }
}

// Another function to fetch a single trek by its ID
async function fetchTrekById(trekId) {
  try {
    const response = await fetch(`${BASE_URL}/api/public/treks/${trekId}`);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json(); 
    return result;
      
  } catch (error) {
    console.error(`Error fetching trek by ID ${trekId}:`, error);
    return null;
  }
}
 
async function fetchTrekDetails(trekId) {
  try {
    const trek = await fetchTrekById(trekId);
    if (trek) {
      // Redirect to the details page with the trek ID as a query parameter
   window.location.href = `commonTrekDetail.html?id=${trekId}`;
    } else {
      alert('Trek not found or an error occurred.');
    }
  } catch (error) {
    
    alert('An error occurred while fetching trek details.');
  }
}
 

//#region Function to fetch all tours 

async function fetchAllTours() {
  try {
    const response = await fetch(`${BASE_URL}/api/public/tours`);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;  // Return just the array of treks
  } catch (error) {
    console.error('Error fetching tours:', error);
    return [];
  }
}

// Another function to fetch a single trek by its ID
async function fetchTourById(tourId) {
  try {
    const response = await fetch(`${BASE_URL}/api/public/tours/${tourId}`);
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json(); 
    return result;
      
  } catch (error) {
    console.error(`Error fetching tours by ID ${tourId}:`, error);
    return null;
  }
}
 
async function fetchTourDetails(tourId) {
  try {
    const trek = await fetchTourById(tourId);
    if (trek) {
      // Redirect to the details page with the trek ID as a query parameter
   window.location.href = `commonTourAPI.html?id=${tourId}`;
    } else {
      alert('Tours not found or an error occurred.');
    }
  } catch (error) {
    
    alert('An error occurred while fetching tours details.');
  }
}