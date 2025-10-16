/*
You have started to organize the paintings you keep at home, and have decided to make an inventory
of some of the most important ones. Declare an array of objects that will correspond to the
following images: 
Mona Lisa (Leonardo da Vinci, 1503), 
The Last Supper (Leonardo da Vinci, 1495),
Starry Night (Vincent van Gogh, 1889), 
The Scream (Edvard Munch, 1893), 
Guernica (Pablo Picasso, 1937),
The Kiss (Gustav Klimt, 1907), 
Girl With a Pearl Earring (Johannes Vermeer, 1665), 
The Birth of Venus (Sandro Botticelli, 1485), 
Las Meninas (Diego Velázquez, 1656), 
The Creation of Adam (Michelangelo, 1512).
Display all the images in the list in the console (full information: title, artist and date of creation).
*/

class Taulut{
    /**
     * Initializes a new painting object with a title, artist, and date.
     * This constructor is used to create instances representing individual paintings.
     *
     * Args:
     *   title: The title of the painting.
     *   artist: The artist who created the painting.
     *   date: The year the painting was created.
     */
    constructor(title, artist, date)
    {
        this.title = title;
        this.artist = artist;
        this.date = date;
    }
}

const paintings = [
    new Taulut('Mona Lisa', 'Leonardo da Vinci', 1503),
    new Taulut('The Last Supper', 'Leonardo da Vinci', 1495),
    new Taulut('Starry Night', 'Vincent van Gogh', 1889),
    new Taulut('The Scream', 'Edvard Munch', 1893),
    new Taulut('Guernica', 'Pablo Picasso', 1937),
    new Taulut('The Kiss', 'Gustav Klimt', 1907),
    new Taulut('Girl With a Pearl Earring', 'Johannes Vermeer', 1665),
    new Taulut('The Birth of Venus', 'Sandro Botticelli', 1485),
    new Taulut('Las Meninas', 'Diego Velázquez', 1656),
    new Taulut('The Creation of Adam', 'Michelangelo', 1512)
];

// Display all paintings in the console
console.log("List of famous paintings:");
paintings.forEach(painting => {
    console.log(`- Title: ${painting.title}, Artist: ${painting.artist}, Date: ${painting.date}`);
});
