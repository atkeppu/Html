/*
Complement the images object from the previous task with two new methods (without rewriting the whole object):

    edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list,
    it changes its artist and date properties;
    delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it
    (to delete a list element, use the splice method)

Additionally, add a show method to the Image constructor, which will display information about this one image.
Do not rewrite the constructor. Use prototypes for this purpose. 
Then modify the show method of the images object so that it uses the newly created single image show method to display the information.
*/


function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
    return this;
}

/**
 * Adds a 'show' method to the Image constructor's prototype.
 * All instances of Image will inherit this method.
 */
Image.prototype.show = function() {
    console.log(`- Title: ${this.title}, Artist: ${this.artist}, Date: ${this.date}`);
};


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
        // Modified to call the show() method on each individual painting object.
        this.list.forEach(painting => {
            painting.show();
        });
    },

    /**
     * Removes all images from the list.
     */
    clear: function() {
        // The correct way to clear an array is to set its length to 0.
        this.list.length = 0;
        console.log("Image collection cleared.");
    },

    edit: function(title, artist, date) {
        // Find the image object with the matching title.
        const imageToEdit = this.list.find(image => image.title === title);
        if (imageToEdit) {
            imageToEdit.date = date; // Update the date
        }
    },

    delete: function(title) {
        //this.list = this.list.filter(image => image.title !== title);
        const index = this.list.findIndex(image => image.title === title);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    },
};



images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)