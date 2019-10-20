var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            // Initialize background
            this.background = new objects.Background(this.assetManager);
            // Initialize player
            this.player = new objects.Player(this.assetManager);
            //Initialize the maze design 
            this.mazeTiles = new Array();
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
        };
        PlayScene.prototype.Update = function () {
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
        };
        PlayScene.prototype.Main = function () {
            // Order matters when adding game objects.
            this.addChild(this.background);
            this.addChild(this.player);
            this.SetupMaze();
            // this.addChild(this.enemy);s
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // });
            this.addChild(this.scoreBoard);
        };
        PlayScene.prototype.SetupMaze = function () {
            for (var i = 1; i < 19; i++) {
                var mazetile1 = new objects.Mazetile(60 * i, 60, this.assetManager);
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }
            var mazetile2 = new objects.Mazetile(300, 120, this.assetManager);
            this.addChild(mazetile2);
            var mazetile3 = new objects.Mazetile(480, 120, this.assetManager);
            this.addChild(mazetile3);
            var mazetile4 = new objects.Mazetile(660, 120, this.assetManager);
            this.addChild(mazetile4);
            var mazetile5 = new objects.Mazetile(900, 120, this.assetManager);
            this.addChild(mazetile5);
            var mazetile6 = new objects.Mazetile(1020, 120, this.assetManager);
            this.addChild(mazetile6);
            var mazetile7 = new objects.Mazetile(180, 180, this.assetManager);
            this.addChild(mazetile7);
            var mazetile8 = new objects.Mazetile(600, 180, this.assetManager);
            this.addChild(mazetile8);
            var mazetile9 = new objects.Mazetile(780, 180, this.assetManager);
            this.addChild(mazetile9);
            for (var i = 0; i < 8; i++) {
                var mazetile10 = new objects.Mazetile(180 + i * 60, 240, this.assetManager);
                this.addChild(mazetile10);
            }
            var mazetile11 = new objects.Mazetile(720, 240, this.assetManager);
            this.addChild(mazetile11);
            var mazetile12 = new objects.Mazetile(780, 240, this.assetManager);
            this.addChild(mazetile12);
            var mazetile13 = new objects.Mazetile(960, 240, this.assetManager);
            this.addChild(mazetile13);
            var mazetile14 = new objects.Mazetile(600, 300, this.assetManager);
            this.addChild(mazetile14);
            var mazetile15 = new objects.Mazetile(780, 300, this.assetManager);
            this.addChild(mazetile15);
            var mazetile16 = new objects.Mazetile(840, 300, this.assetManager);
            this.addChild(mazetile16);
            var mazetile17 = new objects.Mazetile(900, 300, this.assetManager);
            this.addChild(mazetile17);
            //5th row
            for (var i = 0; i < 6; i++) {
                var mazetile18 = new objects.Mazetile(120 + i * 60, 360, this.assetManager);
                this.addChild(mazetile18);
            }
            for (var i = 0; i < 3; i++) {
                var mazetile19 = new objects.Mazetile(540 + i * 60, 360, this.assetManager);
                this.addChild(mazetile19);
            }
            var mazetile20 = new objects.Mazetile(780, 360, this.assetManager);
            this.addChild(mazetile20);
            var mazetile21 = new objects.Mazetile(900, 360, this.assetManager);
            this.addChild(mazetile21);
            var mazetile22 = new objects.Mazetile(1020, 360, this.assetManager);
            this.addChild(mazetile22);
            //6th row
            var mazetile23 = new objects.Mazetile(420, 420, this.assetManager);
            this.addChild(mazetile23);
            var mazetile24 = new objects.Mazetile(780, 420, this.assetManager);
            this.addChild(mazetile24);
            var mazetile25 = new objects.Mazetile(900, 420, this.assetManager);
            this.addChild(mazetile25);
            var mazetile26 = new objects.Mazetile(1020, 420, this.assetManager);
            this.addChild(mazetile26);
            //7th row
            for (var i = 0; i < 3; i++) {
                var mazetile27 = new objects.Mazetile(180 + 60 * i, 480, this.assetManager);
                this.addChild(mazetile27);
            }
            var mazetile28 = new objects.Mazetile(420, 480, this.assetManager);
            this.addChild(mazetile28);
            for (var i = 0; i < 5; i++) {
                var mazetile27 = new objects.Mazetile(540 + 60 * i, 480, this.assetManager);
                this.addChild(mazetile27);
            }
            var mazetile29 = new objects.Mazetile(900, 480, this.assetManager);
            this.addChild(mazetile29);
            var mazetile30 = new objects.Mazetile(1020, 480, this.assetManager);
            this.addChild(mazetile30);
            //8th row
            var mazetile31 = new objects.Mazetile(300, 540, this.assetManager);
            this.addChild(mazetile31);
            var mazetile32 = new objects.Mazetile(420, 540, this.assetManager);
            this.addChild(mazetile32);
            var mazetile33 = new objects.Mazetile(900, 540, this.assetManager);
            this.addChild(mazetile33);
            //9th row
            var mazetile34 = new objects.Mazetile(180, 600, this.assetManager);
            this.addChild(mazetile34);
            var mazetile35 = new objects.Mazetile(300, 600, this.assetManager);
            this.addChild(mazetile35);
            for (var i = 0; i < 8; i++) {
                var mazetile36 = new objects.Mazetile(420 + 60 * i, 600, this.assetManager);
                this.addChild(mazetile36);
            }
            // let mazetile37 = new objects.Mazetile(1020, 600, this.assetManager)
            // this.addChild(mazetile37);
            //10th row
            var mazetile38 = new objects.Mazetile(180, 660, this.assetManager);
            this.addChild(mazetile38);
            var mazetile39 = new objects.Mazetile(240, 660, this.assetManager);
            this.addChild(mazetile39);
            var mazetile40 = new objects.Mazetile(960, 660, this.assetManager);
            this.addChild(mazetile40);
            //11th row
            var mazetile41 = new objects.Mazetile(180, 720, this.assetManager);
            this.addChild(mazetile41);
            for (var i = 0; i < 9; i++) {
                var mazetile42 = new objects.Mazetile(300 + 60 * i, 720, this.assetManager);
                this.addChild(mazetile42);
            }
            var mazetile43 = new objects.Mazetile(900, 720, this.assetManager);
            this.addChild(mazetile43);
            var mazetile44 = new objects.Mazetile(960, 720, this.assetManager);
            this.addChild(mazetile44);
            //12the row
            var mazetile46 = new objects.Mazetile(840, 780, this.assetManager);
            this.addChild(mazetile46);
            for (var i = 2; i < 14; i++) {
                var mazetile1 = new objects.Mazetile(1080, 60 * i, this.assetManager);
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }
            for (var i = 1; i < 19; i++) {
                var mazetile1 = new objects.Mazetile(60 * i, 840, this.assetManager);
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }
            for (var i = 2; i < 14; i++) {
                var mazetile1 = new objects.Mazetile(60, 60 * i, this.assetManager);
                this.addChild(mazetile1);
                console.log("mTh>>" + mazetile1.height);
                console.log("mTw>>" + mazetile1.width);
            }
            console.log("ph>>" + this.player.height);
            console.log("pw>>" + this.player.width);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map