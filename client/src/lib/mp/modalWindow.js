/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

import * as jqueryProxy from 'jquery'

import { EventEmitter } from './eventEmitter';
import { MiscUtils } from './miscUtils';
const jq = (jqueryProxy).default || jqueryProxy;


var ModalWindow = function(constructorFunction, focusID) {
  focusID = focusID ? MiscUtils.normaliseDOMid(focusID) : null;

  var newConstructor = function(opacityLayerID, windowID) {
    this._opacityLayer =  MiscUtils.normaliseDOMid(opacityLayerID);
    this._windowID = MiscUtils.normaliseDOMid(windowID);
    constructorFunction.call(this);
  };


  newConstructor.prototype._toggleDisplay = function() {
    var opacityLayer = jq(this._opacityLayer);
    opacityLayer = opacityLayer.length === 0 ? null : opacityLayer;
    if (opacityLayer === null)
      throw new Error('Node ' + this._opacityLayer + ' not found');

    var modalWindow = jq(this._windowID);
    modalWindow = modalWindow.length === 0 ? null : modalWindow;
    if (modalWindow === null)
      throw new Error('Node ' + this._windowID + ' not found');

    opacityLayer.toggle();
    modalWindow.toggle();

    if (focusID !== null)
      jq(focusID).focus();
    else
      jq(this._windowID + ' input[type=submit]').focus();
  };


  return EventEmitter(newConstructor);
};


export { ModalWindow };
