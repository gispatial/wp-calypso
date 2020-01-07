/**
 * External dependencies
 */

import { get } from 'lodash';

/**
 * Return an object of timezones.
 * Each element is has the shape `[ value ]: label`.
 * The `value` is the timezone-value used to data processing,
 * and the `label` is the value used for the UI.
 *
 * @param  {object} state - Global state tree
 * @return {object} An object of timezones labels
 */
export default function getTimezonesLabels( state ) {
	return get( state, 'timezones.labels', {} );
}
