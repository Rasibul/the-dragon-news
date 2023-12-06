export function showCurrentDate() {
    // Create a new Date object
    let currentDate = new Date();

    // Get day, month, date, and year
    let dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    let month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    let dayOfMonth = currentDate.getDate();
    let year = currentDate.getFullYear();

    // Display the result
    return ("Current Date: " + dayOfWeek + ", " + month + " " + dayOfMonth + ", " + year);
}

// Call the function to display the current date
//   showCurrentDate();
