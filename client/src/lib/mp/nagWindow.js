/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

import * as jqueryProxy from 'jquery'

import { ModalWindow } from './modalWindow';
import { NAG_WINDOW_CLOSED } from './messages';
const jq = (jqueryProxy).default || jqueryProxy;


var NagWindow = ModalWindow(function() {
  jq(nagFormID).on('submit', submit.bind(this));
});


var nagFormID = '#nagForm';
var nagOKID = '#nagOK';


var submit = function(e) {
  e.preventDefault();
  this.close();
};


NagWindow.prototype.close = function() {
  this._toggleDisplay();
  this._emitEvent(NAG_WINDOW_CLOSED);
};


NagWindow.prototype.open = function() {
  this._toggleDisplay();
  jq(nagOKID).focus();
};


export { NagWindow };
