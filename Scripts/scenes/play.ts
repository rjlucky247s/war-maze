module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player: objects.Player;
        private mazeTiles: objects.Mazetile[];
        // private enemies:objects.Enemy[];
        // private enemyNum:number;
        private scoreBoard: managers.Scoreboard;

        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            // Initialize background
            this.background = new objects.Background(this.assetManager);

            // Initialize player
            this.player = new objects.Player(this.assetManager);

            //Initialize the maze design 
            this.mazeTiles = new Array<objects.Mazetile>();
            // Initialize enemies
            // this.enemies = new Array<objects.Enemy>();
            // this.enemyNum = 5;
            // for (let i = 0; i < this.enemyNum; i++) {
            //     this.enemies[i] = new objects.Enemy(this.assetManager);
            // }

            // Initialize my scoreboard
            this.scoreBoard = new managers.Scoreboard;
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;

            // Initialize Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;

            this.Main();
        }

        public Update(): void {
            // Update the background here
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();

            //     this.enemies.forEach(e => {
            //         e.Update();
            //         this.player.isDead = managers.Collision.Check(this.player, e);

            //         if (this.player.isDead) {
            //             // Disable music
            //             this.backgroundMusic.stop();
            //             objects.Game.currentScene = config.Scene.OVER;
            //         }
            //     });
        }

        public Main(): void {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.player);
            this.SetupMaze();
            // this.addChild(this.enemy);s
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // });

            this.addChild(this.scoreBoard);
        }

        public SetupMaze(): void {

            for (let i = 1; i < 19; i++) {
                let mazetile1 = new objects.Mazetile(60 * i, 60, this.assetManager)
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }

            let mazetile2 = new objects.Mazetile(300, 120, this.assetManager)
            this.addChild(mazetile2);

            let mazetile3 = new objects.Mazetile(480, 120, this.assetManager)
            this.addChild(mazetile3);

            let mazetile4 = new objects.Mazetile(660, 120, this.assetManager)
            this.addChild(mazetile4);

            let mazetile5 = new objects.Mazetile(900, 120, this.assetManager)
            this.addChild(mazetile5);

            let mazetile6 = new objects.Mazetile(1020, 120, this.assetManager)
            this.addChild(mazetile6);

            let mazetile7 = new objects.Mazetile(180, 180, this.assetManager)
            this.addChild(mazetile7);

            let mazetile8 = new objects.Mazetile(600, 180, this.assetManager)
            this.addChild(mazetile8);

            let mazetile9 = new objects.Mazetile(780, 180, this.assetManager)
            this.addChild(mazetile9);

            for (let i = 0; i < 8; i++) {
                let mazetile10 = new objects.Mazetile(180 + i * 60, 240, this.assetManager)
                this.addChild(mazetile10);
            }

            let mazetile11 = new objects.Mazetile(720, 240, this.assetManager)
            this.addChild(mazetile11);

            let mazetile12 = new objects.Mazetile(780, 240, this.assetManager)
            this.addChild(mazetile12);

            let mazetile13 = new objects.Mazetile(960, 240, this.assetManager)
            this.addChild(mazetile13);

            let mazetile14 = new objects.Mazetile(600, 300, this.assetManager)
            this.addChild(mazetile14);

            let mazetile15 = new objects.Mazetile(780, 300, this.assetManager)
            this.addChild(mazetile15);

            let mazetile16 = new objects.Mazetile(840, 300, this.assetManager)
            this.addChild(mazetile16);

            let mazetile17 = new objects.Mazetile(900, 300, this.assetManager)
            this.addChild(mazetile17);

            //5th row
            for (let i = 0; i < 6; i++) {
                let mazetile18 = new objects.Mazetile(120 + i * 60, 360, this.assetManager)
                this.addChild(mazetile18);
            }

            for (let i = 0; i < 3; i++) {
                let mazetile19 = new objects.Mazetile(540 + i * 60, 360, this.assetManager)
                this.addChild(mazetile19);
            }

            let mazetile20 = new objects.Mazetile(780, 360, this.assetManager)
            this.addChild(mazetile20);

            let mazetile21 = new objects.Mazetile(900, 360, this.assetManager)
            this.addChild(mazetile21);

            let mazetile22 = new objects.Mazetile(1020, 360, this.assetManager)
            this.addChild(mazetile22);

            //6th row
            let mazetile23 = new objects.Mazetile(420, 420, this.assetManager)
            this.addChild(mazetile23);


            let mazetile24 = new objects.Mazetile(780, 420, this.assetManager)
            this.addChild(mazetile24);


            let mazetile25 = new objects.Mazetile(900, 420, this.assetManager)
            this.addChild(mazetile25);


            let mazetile26 = new objects.Mazetile(1020, 420, this.assetManager)
            this.addChild(mazetile26);

            //7th row
            for (let i = 0; i < 3; i++) {
                let mazetile27 = new objects.Mazetile(180 + 60 * i, 480, this.assetManager)
                this.addChild(mazetile27);
            }

            let mazetile28 = new objects.Mazetile(420, 480, this.assetManager)
            this.addChild(mazetile28);

            for (let i = 0; i < 5; i++) {
                let mazetile27 = new objects.Mazetile(540 + 60 * i, 480, this.assetManager)
                this.addChild(mazetile27);
            }

            let mazetile29 = new objects.Mazetile(900, 480, this.assetManager)
            this.addChild(mazetile29);

            let mazetile30 = new objects.Mazetile(1020, 480, this.assetManager)
            this.addChild(mazetile30);

            //8th row
            let mazetile31 = new objects.Mazetile(300, 540, this.assetManager)
            this.addChild(mazetile31);

            let mazetile32 = new objects.Mazetile(420, 540, this.assetManager)
            this.addChild(mazetile32);

            let mazetile33 = new objects.Mazetile(900, 540, this.assetManager)
            this.addChild(mazetile33);

            //9th row
            let mazetile34 = new objects.Mazetile(180, 600, this.assetManager)
            this.addChild(mazetile34);

            let mazetile35 = new objects.Mazetile(300, 600, this.assetManager)
            this.addChild(mazetile35);

            for (let i = 0; i < 8; i++) {
                let mazetile36 = new objects.Mazetile(420 + 60 * i, 600, this.assetManager)
                this.addChild(mazetile36);
            }

            // let mazetile37 = new objects.Mazetile(1020, 600, this.assetManager)
            // this.addChild(mazetile37);

            //10th row
            let mazetile38 = new objects.Mazetile(180, 660, this.assetManager)
            this.addChild(mazetile38);

            let mazetile39 = new objects.Mazetile(240, 660, this.assetManager)
            this.addChild(mazetile39);

            let mazetile40 = new objects.Mazetile(960, 660, this.assetManager)
            this.addChild(mazetile40);


            //11th row
            let mazetile41 = new objects.Mazetile(180, 720, this.assetManager)
            this.addChild(mazetile41);

            for (let i = 0; i < 9; i++) {
                let mazetile42 = new objects.Mazetile(300 + 60 * i, 720, this.assetManager)
                this.addChild(mazetile42);
            }

            let mazetile43 = new objects.Mazetile(900, 720, this.assetManager)
            this.addChild(mazetile43);

            let mazetile44 = new objects.Mazetile(960, 720, this.assetManager)
            this.addChild(mazetile44);

            //12the row

            let mazetile46 = new objects.Mazetile(840, 780, this.assetManager)
            this.addChild(mazetile46);

            for (let i = 2; i < 14; i++) {
                let mazetile1 = new objects.Mazetile(1080, 60 * i, this.assetManager)
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }

            for (let i = 1; i < 19; i++) {
                let mazetile1 = new objects.Mazetile(60 * i, 840, this.assetManager)
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }

            for (let i = 2; i < 14; i++) {
                let mazetile1 = new objects.Mazetile(60, 60 * i, this.assetManager)
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }




            console.log("ph>>" + this.player.height);
            console.log("pw>>" + this.player.width);
        }

    }
}