module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private nameLabel: objects.Label;
        private startButton: objects.Button;

        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start(): void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label(
                "Maze Runner", "80px", "Consolas", "#FFFFFF", 320, 240, true);


            this.nameLabel = new objects.Label(
                "by Raj Patel", "40px", "Consolas", "#FFFFFF", 320, 300, true);

            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 350);

            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.Main();

        }

        public Update(): void {
            // this.background.Update();

        }
        private startButtonClick(): void {
            // Change our game state from START to GAME
            objects.Game.currentScene = config.Scene.GAME;
        }

        public Main(): void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.nameLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}