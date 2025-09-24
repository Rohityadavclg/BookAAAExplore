//const BASE_URL = 'http://localhost:5000'; 
const BASE_URL='https://ksnezqtepd.us-east-1.awsapprunner.com';
// actual base url 



function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')  
    .replace(/[^a-z0-9-]/g, '')  
    .replace(/-+/g, '-'); 
}

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
   window.location.href = `trek.html?id=${trekId}`;
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
   window.location.href = `tour.html?id=${tourId}`;
    } else {
      alert('Tours not found or an error occurred.');
    }
  } catch (error) {
    
    alert('An error occurred while fetching tours details.');
  }
}



//#start region Function new Way 

 async function fetchTrekBySlug(trekSlug) {
  try {
    const response = await fetch(`${BASE_URL}/api/public/treks/${trekSlug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching trek by slug ${trekSlug}:`, error);
    return null;
  }
}

async function fetchTrekDetailsBySlug(trekSlug) {
  try {
    const result = await fetchTrekBySlug(trekSlug);
    if (result && result.success) {
      window.location.href = `trek.html?slug=${trekSlug}`;
    } else {
      alert('Trek not found or an error occurred.');
    }
  } catch (error) {
    console.error('An error occurred while fetching trek details:', error);
    alert('An error occurred while fetching trek details.');
  }
}

async function fetchTourBySlug(tourSlug) {
  try {
    const response = await fetch(`${BASE_URL}/api/public/tours/${tourSlug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching tour by slug ${tourSlug}:`, error);
    return null;
  }
}

async function fetchTourDetailsBySlug(tourSlug) {
  try {
    const result = await fetchTourBySlug(tourSlug);
    if (result && result.success) {
      window.location.href = `tour.html?slug=${tourSlug}`;
    } else {
      alert('Tour not found or an error occurred.');
    }
  } catch (error) {
    console.error('An error occurred while fetching tour details:', error);
    alert('An error occurred while fetching tour details.');
  }
}