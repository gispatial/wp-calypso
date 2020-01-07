/**
 * Returns the recommended sites paging offset
 *
 *
 * @param {number} seed the elasticsearch seed for which to grab recs
 * @return {number} the paging offset
 */

export default ( state, seed ) => state.reader.recommendedSites.pagingOffset[ seed ];
