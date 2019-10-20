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
            // this.addChild(this.enemy);s
            // this.enemies.forEach(e => {
            //     this.addChild(e);
            // });
            this.addChild(this.scoreBoard);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map