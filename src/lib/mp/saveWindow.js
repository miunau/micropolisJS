/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

import * as jq from 'jquery';

import { ModalWindow } from './modalWindow';
import { SAVE_WINDOW_CLOSED } from './messages';

var SaveWindow = ModalWindow(function() {
  jq(saveFormID).on('submit', submit.bind(this));
});


var saveFormID = '#saveForm';
var saveOKID = '#saveOK';


var submit = function(e) {
  e.preventDefault();
  this.close();
};


SaveWindow.prototype.close = function() {
  this._toggleDisplay();
  this._emitEvent(SAVE_WINDOW_CLOSED);
};


SaveWindow.prototype.open = function() {
  this._toggleDisplay();
  jq(saveOKID).focus();
};


export { SaveWindow };
