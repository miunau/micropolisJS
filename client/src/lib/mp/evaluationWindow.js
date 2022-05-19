/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */
import * as jqueryProxy from 'jquery'

import { EVAL_WINDOW_CLOSED } from './messages';
import { ModalWindow } from './modalWindow';
import { Text } from './text';
const jq = (jqueryProxy).default || jqueryProxy;


var EvaluationWindow = ModalWindow(function() {
  jq(evaluationFormID).on('submit', submit.bind(this));
});


var evaluationFormID = '#evalButtons';
var evaluationOKID = '#evalOK';


EvaluationWindow.prototype.close = function() {
  this._emitEvent(EVAL_WINDOW_CLOSED);
  this._toggleDisplay();
};


var submit = function(e) {
  e.preventDefault();
  this.close();
};


EvaluationWindow.prototype._populateWindow = function(evaluation) {
  jq('#evalYes').text(evaluation.cityYes);
  jq('#evalNo').text(100 - evaluation.cityYes);
  for (var i = 0; i < 4; i++) {
    var problemNo = evaluation.getProblemNumber(i);
    if (problemNo !== null) {
      var text = Text.problems[problemNo];
      jq('#evalProb' + (i + 1)).text(text);
      jq('#evalProb' + (i + 1)).show();
    } else {
      jq('#evalProb' + (i + 1)).hide();
    }
  }

  jq('#evalPopulation').text(evaluation.cityPop);
  jq('#evalMigration').text(evaluation.cityPopDelta);
  jq('#evalValue').text(evaluation.cityAssessedValue);
  jq('#evalLevel').text(Text.gameLevel[evaluation.gameLevel]);
  jq('#evalClass').text(Text.cityClass[evaluation.cityClass]);
  jq('#evalScore').text(evaluation.cityScore);
  jq('#evalScoreDelta').text(evaluation.cityScoreDelta);
};


EvaluationWindow.prototype.open = function(evaluation) {
  this._populateWindow(evaluation);
  this._toggleDisplay();
};


export { EvaluationWindow };
