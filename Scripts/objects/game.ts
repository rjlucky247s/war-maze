// GLOBAL GAME VARIABLES
module objects {
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static currentSceneObject: objects.Scene;
        public static keyboardManager: managers.Keyboard;
        public static canvasHeight: number = 900;
        public static canvasWidth: number = 1100;
    }
}