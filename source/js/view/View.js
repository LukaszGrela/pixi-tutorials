/**
 * Created by lukasz on 2015-11-19.
 */
function View(){
	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var that = this;
	var /** @type {App} */ _app;
	var /** @type {string} */ _domID;

	var /** @type {PIXI.Container} */ _stage;
	var /** @type {PIXI.WebGLRenderer|PIXI.CanvasRenderer} */ _renderer;

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

	that.init = function( app, domID ){
		_app = app;
		_domID = domID;

		console.log("View.init", _app, _domID, that, _app.getModel().getScreenSize());

		var size = _app.getModel().getScreenSize();
		_stage = new PIXI.Container();
		_renderer = PIXI.autoDetectRenderer(size[0],size[1]);

		$(document ).find("#"+_domID).append(_renderer.view);


		//1. Access the `TextureCache` directly
		var dungeonTexture = PIXI.utils.TextureCache["dungeon.png"];
		var dungeon = new PIXI.Sprite(dungeonTexture);
		_stage.addChild(dungeon);

		//2. Access the texture using through the loader's `resources`:
		var explorer = new PIXI.Sprite(
			PIXI.loader.resources["atlas"].textures["explorer.png"]
		);
		explorer.x = 68;
		//Center the explorer vertically
		explorer.y = _stage.height / 2 - explorer.height / 2;
		_stage.addChild(explorer);

		//3. Create an optional alias called `id` for all the texture atlas
		//frame id textures.
		var id = PIXI.loader.resources["atlas"].textures;

		//Make the treasure box using the alias
		var treasure = new PIXI.Sprite(id["treasure.png"]);
		_stage.addChild(treasure);

		//Position the treasure next to the right edge of the canvas
		treasure.x = _stage.width - treasure.width - 48;
		treasure.y = _stage.height / 2 - treasure.height / 2;
		_stage.addChild(treasure);



		requestAnimationFrame(_animate);
	}
	/*---
	----------------------------------------------
	 *
	 *            Private Methods
	 *
	 ------------------------------------------------*/

	var _animate = function() {
		_renderer.render( that.getStage() );
		requestAnimationFrame( _animate );
	};
	/*-------------------------------------------------
	 *            Return
	 ------------------------------------------------*/
	return that;

}