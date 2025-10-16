/*
Create an images object that will be used to store the images. The object should have a list property, 
which will be an array of image objects and methods:

    contains - which takes as its argument the title of the image and returns true if the image is already placed in the list
    (otherwise it returns false)
    add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list
    (if it has not already been added)
    show - which displays all images on the list;
    clear – which removes all objects from the list.

While creating an object, use the Image constructor prepared in the earlier task.

Test the script by calling the sequence:
*/

function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
    return this;
}


const images = {
    // The list property will hold our image objects.
    list: [],

    /**
     * Checks if an image with the given title already exists in the list.
     * @param {string} title - The title of the image to check.
     * @returns {boolean} - True if the image is in the list, otherwise false.
     */
    contains: function(title) {
        // Use the .some() method to check if any object in the array has a matching title.
        return this.list.some(image => image.title === title);
    },

    /**
     * Adds a new image to the list if it doesn't already exist.
     * @param {string} title - The title of the new image.
     * @param {string} artist - The artist of the new image.
     * @param {number} date - The date of the new image.
     */
    add: function(title, artist, date) {
        // Use our corrected 'contains' method to check for existence.
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    /**
     * Displays all the images currently in the list to the console.
     */
    show: function() {
        console.log("Images in the collection:");
        // Use forEach to iterate over the list and log each painting's details.
        this.list.forEach(painting => {
            console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
        });
    },

    /**
     * Removes all images from the list.
     */
    clear: function() {
        // The correct way to clear an array is to set its length to 0.
        this.list.length = 0;
        console.log("Image collection cleared.");
    }
};

// --- Testing the script ---
console.log("Adding images...");
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // This duplicate will be ignored.

images.show(); // Should now display the 3 unique images.

console.log("\nClearing images...");
images.clear(); // Clears the list.

images.show(); // Should now show an empty collection.