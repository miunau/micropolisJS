/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */
import * as jqueryProxy from 'jquery'

import { DISASTER_WINDOW_CLOSED } from './messages';
import { MiscUtils } from './miscUtils';
import { ModalWindow } from './modalWindow';
const jq = (jqueryProxy).default || jqueryProxy;


var disasterSelectID = '#disasterSelect';
var disasterCancelID = '#disasterCancel';
var disasterOKID = '#disasterOK';
var disasterFormID = '#disasterForm';


var DisasterWindow = ModalWindow(function() {
  jq(disasterFormID).on('submit', submit.bind(this));
  jq(disasterCancelID).on('click', cancel.bind(this));
}, disasterSelectID);


DisasterWindow.prototype.close = function(disaster) {
  disaster = disaster || DisasterWindow.DISASTER_NONE;
  this._toggleDisplay();
  this._emitEvent(DISASTER_WINDOW_CLOSED, disaster);
};


var cancel = function(e) {
  e.preventDefault();
  this.close();
};


var submit = function(e) {
  e.preventDefault();

  // Get element values
  var requestedDisaster = jq(disasterSelectID)[0].value;
  this.close(requestedDisaster);
};


DisasterWindow.prototype.open = function() {
  var i;

  // Ensure options have right values
  jq('#disasterNone').attr('value', DisasterWindow.DISASTER_NONE);
  jq('#disasterMonster').attr('value', DisasterWindow.DISASTER_MONSTER);
  jq('#disasterFire').attr('value', DisasterWindow.DISASTER_FIRE);
  jq('#disasterFlood').attr('value', DisasterWindow.DISASTER_FLOOD);
  jq('#disasterCrash').attr('value', DisasterWindow.DISASTER_CRASH);
  jq('#disasterMeltdown').attr('value', DisasterWindow.DISASTER_MELTDOWN);
  jq('#disasterTornado').attr('value', DisasterWindow.DISASTER_TORNADO);

  this._toggleDisplay();
};


Object.defineProperties(DisasterWindow,
  {DISASTER_NONE: MiscUtils.makeConstantDescriptor('None'),
   DISASTER_MONSTER: MiscUtils.makeConstantDescriptor('Monster'),
   DISASTER_FIRE: MiscUtils.makeConstantDescriptor('Fire'),
   DISASTER_FLOOD: MiscUtils.makeConstantDescriptor('Flood'),
   DISASTER_CRASH: MiscUtils.makeConstantDescriptor('Crash'),
   DISASTER_MELTDOWN: MiscUtils.makeConstantDescriptor('Meltdown'),
   DISASTER_TORNADO: MiscUtils.makeConstantDescriptor('Tornado')});


export { DisasterWindow };
