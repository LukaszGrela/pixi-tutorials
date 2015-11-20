/**
 * Created by lukasz on 2015-11-19.
 */
(function(){
	var /** @type {App} */ application;

	$( window ).on( { "load": preload, "unload": destroy } );

	function onError(){
		console.error( "Init", "onError", arguments );
	}

	function onFileLoaded(){
		console.info( "Init", "onFileLoaded", arguments );
	}

	function onProgress(){
		console.info( "Init", "onProgress", arguments );
	}

	function loadComplete(){
		console.log( "Init", "loadHandler", arguments );
		init();
	}

	function preload(){
		var loader = PIXI.loader;

		loader.add( [ { "name": "atlas", "url": "source/resources/treasureHunter.json" } ] );
		loader.on( 'progress', onProgress ); // called once per loaded/errored file

		loader.on( 'error', onError ); // called once per errored file
		loader.on( 'load', onFileLoaded ); // called once per loaded file
		loader.on( 'complete', loadComplete ); // called once when the queued resources all load.

		loader.load();
	}

	/**
	 *
	 */
	function init(){
		application = new App();
		application.init();
	}

	/**
	 *
	 */
	function destroy(){
		application.destroy();
		application = undefined;
	}
})();