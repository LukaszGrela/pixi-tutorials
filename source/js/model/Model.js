/**
 * Created by lukasz on 2015-11-19.
 */
/**
 *
 * @param {App} app
 * @constructor
 */
function Model(){
	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var that = this;

	var /** @type {App} */ _app;
	var /** @type {string} */ _domId = "GAME-CONTAINER";

	var /** @type {number} */ _screenWidth = 568;
	var /** @type {number} */ _screenHeight = 320;
	var /** @type {Array.<number>} */ _screenSize = [_screenWidth,_screenHeight];

	/*-------------------------------------------------
	 *
	 *    public methods
	 *
	 -------------------------------------------------*/
	that.init = function( app ){
		_app = app;
	}
	/**
	 * Returns size of the screen [width, height]
	 * @returns {Array.<number>}
	 */
	that.getScreenSize = function(){
		return _screenSize.slice();
	}
	/**
	 * The DOM id for the game container
	 * @returns {string}
	 */
	that.getDomId = function() {
		return _domId;
	}

	that.getFont = function(){
		return "Arial";
	}
	/*-------------------------------------------------
	 *            Return
	 ------------------------------------------------*/

	return that;
}