/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */
import * as jq from 'jquery';

import { MiscUtils } from './miscUtils';
import { ModalWindow } from './modalWindow';
import { SETTINGS_WINDOW_CLOSED } from './messages';
import { Simulation } from './simulation';

var SettingsWindow = ModalWindow(function() {
  jq(settingsCancelID).on('click', cancel.bind(this));
  jq(settingsFormID).on('submit', submit.bind(this));
});


var settingsCancelID = '#settingsCancel';
var settingsFormID = '#settingsForm';
var settingsOKID = '#settingsOK';
var autoBudgetYesID = '#autoBudgetYes';
var autoBudgetNoID = '#autoBudgetNo';
var autoBulldozeYesID = '#autoBulldozeYes';
var autoBulldozeNoID = '#autoBulldozeNo';
var speedSlowID = '#speedSlow';
var speedMedID = '#speedMed';
var speedFastID = '#speedFast';
var disastersYesID = '#disastersYes';
var disastersNoID = '#disastersNo';


SettingsWindow.prototype.close = function(actions) {
  actions = actions || [];
  this._emitEvent(SETTINGS_WINDOW_CLOSED, actions);
  this._toggleDisplay();
};


var cancel = function(e) {
  e.preventDefault();
  this.close([]);
};


var submit = function(e) {
  e.preventDefault();

  var actions = [];

  var shouldAutoBudget = jq('.autoBudgetSetting:checked').val();
  if (shouldAutoBudget === 'true')
    shouldAutoBudget = true;
  else
    shouldAutoBudget = false;
  actions.push({action: SettingsWindow.AUTOBUDGET, data: shouldAutoBudget});

  var shouldAutoBulldoze = jq('.autoBulldozeSetting:checked').val();
  if (shouldAutoBulldoze === 'true')
    shouldAutoBulldoze = true;
  else
    shouldAutoBulldoze = false;
  actions.push({action: SettingsWindow.AUTOBULLDOZE, data: shouldAutoBulldoze});

  var speed = jq('.speedSetting:checked').val() - 0;
  actions.push({action: SettingsWindow.SPEED, data: speed});

  var shouldEnableDisasters = jq('.enableDisastersSetting:checked').val();
  if (shouldEnableDisasters === 'true')
    shouldEnableDisasters = true;
  else
    shouldEnableDisasters = false;
  actions.push({action: SettingsWindow.DISASTERS_CHANGED, data: shouldEnableDisasters});

  this.close(actions);
};


SettingsWindow.prototype.open = function(settingsData) {
  if (settingsData.autoBudget)
    jq(autoBudgetYesID).prop('checked', true);
  else
    jq(autoBudgetNoID).prop('checked', true);

  if (settingsData.autoBulldoze)
    jq(autoBulldozeYesID).prop('checked', true);
  else
    jq(autoBulldozeNoID).prop('checked', true);

  if (settingsData.speed === Simulation.SPEED_SLOW)
    jq(speedSlowID).prop('checked', true);
  else if (settingsData.speed === Simulation.SPEED_MED)
    jq(speedMedID).prop('checked', true);
  else
    jq(speedFastID).prop('checked', true);

  if (settingsData.disasters)
    jq(disastersYesID).prop('checked', true);
  else
    jq(disastersNoID).prop('checked', true);

  this._toggleDisplay();
};


var defineAction = (function() {
  var uid = 0;

  return function(name) {
    Object.defineProperty(SettingsWindow, name, MiscUtils.makeConstantDescriptor(uid));
    uid += 1;
  };
})();


defineAction('AUTOBUDGET');
defineAction('AUTOBULLDOZE');
defineAction('SPEED');
defineAction('DISASTERS_CHANGED');


export { SettingsWindow };
