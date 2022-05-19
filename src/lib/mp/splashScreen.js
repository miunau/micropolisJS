/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */
import * as jqueryProxy from 'jquery'

import { Config } from './config';
import { Game } from './game';
import { MapGenerator } from './mapGenerator';
import { Simulation } from './simulation';
import { SplashCanvas } from './splashCanvas';
import { Storage } from './storage';
const jq = (jqueryProxy).default || jqueryProxy;


/*
 *
 * The SplashScreen is the first screen the player will see on launch. It is responsible for map generation,
 * placing UI on screen to allow the player to select a map or load a game, and finally launching the game.
 * This should not be called until the tiles and sprites have been loaded.
 *
 */

var onresize = null;


// If the window is initially too small, try and relaunch if it gets bigger
var makeResizeListener = function(tileSet, spriteSheet) {
  return function(tileSet, spriteSheet, e) {
    jq(window).off('resize');
    var s = new SplashScreen(tileSet, spriteSheet);
  }.bind(null, tileSet, spriteSheet);
};


function SplashScreen(tileSet, snowTileSet, spriteSheet) {
  // We don't launch the game if the screen is too small, however, we should retain the right to do so
  // should the situation change...
  if (jq('#tooSmall').is(':visible')) {
    onresize = makeResizeListener(tileSet, spriteSheet);
    jq(window).on('resize', onresize);
    return;
  }

  this.tileSet = tileSet;
  this.snowTileSet = snowTileSet;
  this.spriteSheet = spriteSheet;
  this.map = MapGenerator();

  // Set up listeners on buttons. When play is clicked, we will move on to get the player's desired
  // difficulty level and city name before launching the game properly
  jq('#splashGenerate').click(regenerateMap.bind(this));
  jq('#splashPlay').click(acquireNameAndDifficulty.bind(this));
  jq('#splashLoad').click(handleLoad.bind(this));

  // Conditionally enable load/save buttons
  jq('#saveRequest').prop('disabled', !Storage.canStore);
  jq('#splashLoad').prop('disabled', !(Storage.canStore && Storage.getSavedGame() !== null));

  // Paint the minimap
  this.splashCanvas = new SplashCanvas('splashContainer', tileSet);
  this.splashCanvas.paint(this.map);

  // Let's get some bits on screen!
  jq('.awaitGeneration').toggle();
  jq('#splashPlay').focus();
}


// Generate a new map at the user's request, and paint it
var regenerateMap = function(e) {
  e.preventDefault();

  this.map = MapGenerator();
  this.splashCanvas.paint(this.map);
};


// Fetches game data from the storage manager, and launches the game. We won't return from here
var handleLoad = function(e) {
  e.preventDefault();

  var savedGame = Storage.getSavedGame();

  if (savedGame === null)
    return;

  // Remove installed event listeners
  jq('#splashLoad').off('click');
  jq('#splashGenerate').off('click');
  jq('#splashPlay').off('click');

  // Hide the splashscreen UI
  jq('#splash').toggle();

  // Launch
  var g = new Game(savedGame, this.tileSet, this.snowTileSet, this.spriteSheet, Simulation.LEVEL_EASY, name);
};


// After a map has been selected, call this function to display a form asking the user for
// a city name and difficulty level.
var acquireNameAndDifficulty = function(e) {
  e.preventDefault();

  // Remove the initial event listeners
  jq('#splashLoad').off('click');
  jq('#splashGenerate').off('click');
  jq('#splashPlay').off('click');

  // Get rid of the initial splash screen
  jq('#splash').toggle();

  // As a convenience, the city name is not mandatory in debug mode
  if (Config.debug)
    jq('#nameForm').removeAttr('required');

  // When the form is submitted, we'll be ready to launch the game
  jq('#playForm').submit(play.bind(this));

  // Display the name and difficulty form
  jq('#start').toggle();
  jq('#nameForm').focus();
};


// This function should be called after the name/difficulty form has been submitted. The game will now be launched
// with the map selected earlier.
var play = function(e) {
  e.preventDefault();

  // As usual, uninstall event listeners, and hide the UI
  jq('#playForm').off('submit');
  jq('#start').toggle();

  // What values did the player specify?
  var difficulty = jq('.difficulty:checked').val() - 0;
  var name = jq('#nameForm').val();

  // Launch a new game
  var g = new Game(this.map, this.tileSet, this.snowTileSet, this.spriteSheet, difficulty, name);
};


export { SplashScreen };
