const figlet = require('figlet');

// Check if an argument is provided
if (process.argv.length <= 2) {
    console.log("Please provide a string to turn into ASCII art");
} else {
    // Grab the first command line argument after the program name
    const inputString = process.argv[2];

    // Use Figlet to convert the string into ASCII art
    figlet(inputString, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
