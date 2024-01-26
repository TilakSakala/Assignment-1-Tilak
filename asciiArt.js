// Check if an argument is provided
if (process.argv.length <= 2) {
    console.log("Please provide a string to turn into ASCII art");
} else {
    // Grab the first command line argument after the program name
    const inputString = process.argv[2];

    // Print the string to the terminal
    console.log("String to turn into ASCII art:", inputString);
}
