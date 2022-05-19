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
import { MiscUtils } from './miscUtils';
import { ModalWindow } from './modalWindow';
import { QUERY_WINDOW_CLOSED } from './messages';
const jq = (jqueryProxy).default || jqueryProxy;


var QueryWindow = ModalWindow(function() {
  this._debugToggled = false;
  jq(queryFormID).on('submit', submit.bind(this));
});


var queryFormID = '#queryForm';
var queryOKID = '#queryOK';


var submit = function(e) {
  e.preventDefault();
  this.close();
};


QueryWindow.prototype.close = function() {
  this._toggleDisplay();
  this._emitEvent(QUERY_WINDOW_CLOSED);
};


QueryWindow.prototype.open = function() {
  if ((Config.debug || Config.queryDebug) && !this._debugToggled) {
    this._debugToggled = true;
    jq('.queryDebug').removeClass('hidden');
  }

  this._toggleDisplay();
  jq(queryOKID).focus();
};


export { QueryWindow };
