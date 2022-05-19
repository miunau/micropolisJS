/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

import * as Messages from './messages';
import * as jq from 'jquery';

import { MiscUtils } from './miscUtils';
import { Text } from './text';

// TODO L20N

var InfoBar = function(classification, population, score, funds, date, name) {
  var classificationSelector = MiscUtils.normaliseDOMid(classification);
  var populationSelector = MiscUtils.normaliseDOMid(population);
  var scoreSelector = MiscUtils.normaliseDOMid(score);
  var fundsSelector = MiscUtils.normaliseDOMid(funds);
  var dateSelector = MiscUtils.normaliseDOMid(date);
  var nameSelector = MiscUtils.normaliseDOMid(name);

  return function(dataSource, initialValues) {
    jq(classificationSelector).text(initialValues.classification);
    jq(populationSelector).text(initialValues.population);
    jq(scoreSelector).text(initialValues.score);
    jq(fundsSelector).text(initialValues.funds);
    jq(dateSelector).text([Text.months[initialValues.date.month], initialValues.date.year].join(' '));
    jq(nameSelector).text(initialValues.name);

    // Add the various listeners
    dataSource.addEventListener(Messages.CLASSIFICATION_UPDATED, function(classification) {
      jq(classificationSelector).text(classification);
    });

    dataSource.addEventListener(Messages.POPULATION_UPDATED, function(population) {
      jq(populationSelector).text(population);
    });

    dataSource.addEventListener(Messages.SCORE_UPDATED, function(score) {
      jq(scoreSelector).text(score);
    });

    dataSource.addEventListener(Messages.FUNDS_CHANGED, function(funds) {
      jq(fundsSelector).text(funds);
    });

    dataSource.addEventListener(Messages.DATE_UPDATED, function(date) {
      jq(dateSelector).text([Text.months[date.month], date.year].join(' '));
    });
  };
};


export { InfoBar };
