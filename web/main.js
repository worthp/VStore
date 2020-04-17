window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    BABYLON.SceneLoader.Load("", "ABANDONED_BAR.babylon", engine, function (scene) {
        // Wait for textures and shaders to be ready
        scene.executeWhenReady(function () {
           // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
           var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

           // target the camera to scene origin
           camera.setTarget(BABYLON.Vector3.Zero());

           // attach the camera to the canvas
           camera.attachControl(canvas, false);

           // create a basic light, aiming 0,1,0 - meaning, to the sky
           var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

            // Once the scene is loaded, just register a render loop to render it
            engine.runRenderLoop(function() {
                scene.render();
            });
        });
    }, function (progress) {
        // To do: give progress feedback to user
    });
});