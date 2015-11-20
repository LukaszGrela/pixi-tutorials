/**
 * Created by lukasz on 2015-11-19.
 */
function App(){
	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var /** @type {App} */ that = this;


	var /** @type {Model} */ model = new Model();
	var /** @type {View} */ view = new View();
	var /** @type {Controller} */ controller = new Controller(that);


	/*-------------------------------------------------
	 *
	 *    public methods
	 *
	 -------------------------------------------------*/

	that.init = function(){

		model.init(that);
		view.init(that, model.getDomId());
		controller.init(that);

	};

	that.destroy = function(){
	};
	/**
	 *
	 * @returns {Model}
	 */
	that.getModel = function(){
		return model;
	}
	/**
	 *
	 * @returns {View}
	 */
	that.getView = function(){
		return view;
	}
	/**
	 *
	 * @returns {Controller}
	 */
	that.getController = function(){
		return controller;
	}
	/*-------------------------------------------------
	 *            Private methods
	 ------------------------------------------------*/

	/*-------------------------------------------------
	 *            Return
	 ------------------------------------------------*/

	return that;
}