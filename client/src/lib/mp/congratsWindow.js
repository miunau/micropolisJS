/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

import * as jqueryProxy from 'jquery'

import { CONGRATS_WINDOW_CLOSED } from './messages';
import { ModalWindow } from './modalWindow';
const jq = (jqueryProxy).default || jqueryProxy;


var CongratsWindow = ModalWindow(function() {
  jq(congratsFormID).on('submit', submit.bind(this));
});


var congratsFormID = '#congratsForm';
var congratsMessageID = '#congratsMessage';
var congratsOKID = '#congratsOK';


var submit = function(e) {
  e.preventDefault();
  this.close();
};


CongratsWindow.prototype.close = function() {
  this._toggleDisplay();
  this._emitEvent(CONGRATS_WINDOW_CLOSED);
};


CongratsWindow.prototype.open = function(message) {
  this._toggleDisplay();
  jq(congratsMessageID).text(message);
  jq(congratsOKID).focus();
};


export { CongratsWindow };
