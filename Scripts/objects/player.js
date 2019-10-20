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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            // Set the initial position
            this.y = 700;
            this.x = 320;
            this.isDead = false;
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // We reference the stage objct and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This is evetually replaced with keyboard input
            // When I use "objects.Game.keyboardManager" it is a reference 
            // to the global keyboardmanager object
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
                this.rotation = 270;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 7.5;
                this.rotation = 90;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.y -= 7.5;
                this.rotation = 0;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += 7.5;
                this.rotation = 180;
            }
            // Maybe xbox controller...
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= objects.Game.canvasWidth - this.halfH) {
                this.x = objects.Game.canvasWidth - this.halfH;
            }
            // Left boundary
            if (this.x <= this.halfH) {
                this.x = this.halfH;
            }
            // Bottom boundry
            if (this.y >= objects.Game.canvasHeight - this.halfH) {
                this.y = objects.Game.canvasHeight - this.halfH;
            }
            //Top boundry
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
            //Set the rotation for the player
            this.setRotation();
        };
        Player.prototype.setRotation = function () {
            if (objects.Game.keyboardManager.moveLeft) {
                this.rotation = 270;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.rotation = 90;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.rotation = 0;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.rotation = 180;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map