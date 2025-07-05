
 const BASE_URL = 'http://localhost:5000'
 // actual base url 
async function fetchAllTreks() {
  try {
    const response = await fetch(`${BASE_URL}/api/public/treks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result.data); // Log the result for debugging
    // result should be { success: true, data: [...] } 
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
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    // result should be { success: true, data: { ... } } 
    return result.data;  // Return the single trek
  } catch (error) {
    console.error(`Error fetching trek by ID ${trekId}:`, error);
    return null;
  }
 
}
 
