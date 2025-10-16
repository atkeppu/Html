/*
Write two functions, Image and getImage, that will return a new image object based on three given arguments:
title, artist, and date.

The Image function is the constructor, and getImage is the factory. Using the images data array from 
the previous task, create a new array, images1, using the Image constructor 
(don't copy the objects, but just create new ones based on the properties read).

Similarly, from images1 create a new array, images2, using getImage.

Display the contents of images2.
*/


const Images =[
// The prompt mentions using the data from the previous task. 
// Let's assume we have access to a `paintings` array from Lab1.js.
// If not, we can define it here. For clarity, let's use a lowercase name.
    getImage('Mona Lisa', 'Leonardo da Vinci', 1503),
    getImage('The Last Supper', 'Leonardo da Vinci', 1495),
    getImage('Starry Night', 'Vincent van Gogh', 1889),
    getImage('The Scream', 'Edvard Munch', 1893),
    getImage('Guernica', 'Pablo Picasso', 1937),
    getImage('The Kiss', 'Gustav Klimt', 1907), 
    getImage('The Kiss', 'Gustav Klimt', 1907),
    getImage('Girl With a Pearl Earring', 'Johannes Vermeer', 1665),
    getImage('The Birth of Venus', 'Sandro Botticelli', 1485),
    getImage('Las Meninas', 'Diego Velázquez', 1656),
    getImage('The Creation of Adam', 'Michelangelo', 1512)
];


function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
    return this;
}

// It's more common and modern to use the `class` syntax.
// This is largely "syntactic sugar" over the constructor function you had.
class ImageNew {
    constructor(title, artist, date) {
        this.title = title;
        this.artist = artist;
        this.date = date;
    }
}

// This is the factory function. It creates and returns a new Image instance.
function getImage(title, artist, date) {
    return new Image(title, artist, date);
}

/**
 * Returns a plain object representing an image with the given title, artist, and date.
 * This function acts as a pure factory, creating a new object without using a constructor.
 *
 * Args:
 *   title: The title of the image.
 *   artist: The artist of the image.
 *   date: The date associated with the image.
 *
 * Returns:
 *   An object with properties title, artist, and date.
 */
function getImagePureFactory(title,artist,date)
{
    return{
        title,
        artist,
        date
    };
}

// Create images1 using the class
const images0 = Images.map(image => new ImageNew(image.title, image.artist, image.date));

// Create images1 using the constructor
const images1 = Images.map(image => new Image(image.title, image.artist, image.date));

// Create images2 from images1 using the factory function
const images2 = Images.map(image => getImage(image.title, image.artist, image.date));

//The .map() function is a more declarative and modern approach. 
// It is designed specifically for the task of creating a new array by transforming 
// each element of an existing one. It's more concise and often considered better
// practice because it clearly states the intent (mapping one array to another) 
// without needing to manage an intermediate array manually.
const images3 = Images.map(image => getImagePureFactory(image.title, image.artist, image.date));
console.log("List of famous paintings00:");   
images3.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
});

/*
This code block demonstrates a common but slightly verbose way to create a new array based 
on an existing one. It accomplishes the same goal as the .map() function used elsewhere 
in the file, but does so more manually.
This forEach and push pattern is an imperative way to create a new array. 
You are explicitly telling the program how to build the new array step-by-step.
*/
let images10 = [];
Images.forEach(image => images10.push(new Image(image.title, image.artist, image.date)));
console.log("List of famous paintings01:");   
images10.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
    
});
// Only test purpose
return;

console.log("List of famous paintings0:");   
images0.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
});

console.log("List of famous paintings1:");   
images1.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
});

console.log("List of famous paintings2:");   
console.log("Contents of the 'images2' array:");
images2.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
});












