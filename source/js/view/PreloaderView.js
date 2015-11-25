/**
 *
 * @returns {PreloaderView}
 * @constructor
 */
function PreloaderView(){
	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var that = this;
	var /** @type {Model} */ _model;
	var /** @type {string} */ _domID;

	var /** @type {PIXI.Container} */ _stage;
	var /** @type {PIXI.WebGLRenderer|PIXI.CanvasRenderer} */ _renderer;


	var _active = true;
	/*-------------------------------------------------
	 *
	 *    public methods
	 *
	 -------------------------------------------------*/
	/**
	 *
	 * @returns {PIXI.Container}
	 */
	that.getStage = function() {
		return _stage;
	}

	that.init = function( model ) {
		_model = model;
		_domID = model.getDomId();

		console.log("PreloaderView.init", _domID, that, _model);

		var size = _model.getScreenSize();
		_stage = new PIXI.Container();
		_renderer = PIXI.autoDetectRenderer(size[0],size[1]);

		$(document ).find("#"+_domID).append(_renderer.view);


		var style = {
			font:            '16px ' + _model.getFont(),
			fill:            0x12ffff,
			stroke:          0x000000,
			strokeThickness: 4
		};

		var loadingLabel = new PIXI.Text("Loading...", style);
			loadingLabel.anchor.set(0.5);
			loadingLabel.position.x = size[0] / 2;
			loadingLabel.position.y = size[1] / 2;

		_stage.addChild(loadingLabel);

		requestAnimationFrame(_animate);
	}

	that.destroy = function(){
		$(document ).find("#"+_domID).empty();
		_active = false;

	}
	/*-------------------------------------------------
	 *
	 *            Private Methods
	 *
	 ------------------------------------------------*/

	var _animate = function() {
		if(!_active) return;
		_renderer.render( that.getStage() );
		requestAnimationFrame( _animate );
	};
	/*-------------------------------------------------
	 *            CONSTRUCTOR
	 ------------------------------------------------*/
	/*-------------------------------------------------
	 *            Return
	 ------------------------------------------------*/
	return that;

}