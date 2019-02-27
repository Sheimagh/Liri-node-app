// This is required, from the HW brief
require("dotenv").config();

// These Variables are going to be used to pull info/values later
var axios = require("axios");
var keys = require("./keys.js");
console.log(keys.spotify.secret);
var moment = require ("moment");
var fs = require ("fs");
var Spotify = require('node-spotify-api'); 

//I took this method from our 10.2- 15-BankJS- the below line are 2 arguments
var action = process.argv[2];
var value = process.argv[3];

// I took this method from our 10.2- 15-BankJS-The switch-case will direct which function gets run
switch (action) {

case "conecrt-this":
  concert();
break;

case "this-song":
  song();
  break;

case "movie-this":
  movie();
  break;

case "do-what-says":
  doit();
  break;
}

//------Concert starts here-----
// Similar to our class assignment-10.2- 15-BankJS-This is a function for concert
function concert() {
//This will search the Bands in Town Artist Events API-part of HW instructions
axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then (function (response) {
console.log(response.data);

});
}

//------Spotify starts here-----
// Another function for Spotify
function song(){

//key information for spotify from HW brief
var spotify = new Spotify (keys.spotify);

spotify.search({ type: 'track', query: value }, function (err, data) {
  if (err) {
  return console.log(err);	}
console.log(data.tracks.items[0].album);

});
}
//Print the artist,songname,....
var spotifyInfo = data.tracks.items;
console.log("Artist: " + spotifyInfo[0].artists[0].name);
console.log("Song Name: " + spotifyInfo[0].name);
console.log("Song Link: " + spotifyInfo[0].preview_url);
console.log("Song Album: " + spotifyInfo[0].album.name);

//------Movie starts here-----

function movie() {

//Part of HW instructions

axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
      .then(function (response) {

//Print the value for Title, Year,.....10.2- 15-BankJS-and part of HW instructions
console.log("Title: " + response.data.Title);
console.log("Year: " + response.data.Year);
console.log("Rating: " + response.data.Rating);
console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
console.log("Country Produced: " + response.data.Country);
console.log("Language: " + response.data.Language);
console.log("Plot: " + response.data.Plot);
console.log("Actors: " + response.data.Actors + "\n");

});
}
//------Do-What-it-Says starts here-----
//Do what it says function
function doit() {
// Reads the random file- Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands-12-ReadFile (class assignments)
  fs.readFile("random.txt", "utf8", function(err) {
  // If there's an error reading the file, log it and return immediately
    if (err) {
      return console.log(err);
		} 
		
  });

};