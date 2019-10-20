var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        // Constructor
        function Keyboard() {
            this.enabled = true;
            this.isAnyKeyDown = false;
            // Listen for keyup and keydown events through the DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods 
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    if (!this.isAnyKeyDown) {
                        this.moveUp = true;
                        this.isAnyKeyDown = true;
                    }
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    if (!this.isAnyKeyDown) {
                        this.moveLeft = true;
                        this.isAnyKeyDown = true;
                    }
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    if (!this.isAnyKeyDown) {
                        this.moveDown = true;
                        this.isAnyKeyDown = true;
                    }
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    if (!this.isAnyKeyDown) {
                        this.moveRight = true;
                        this.isAnyKeyDown = true;
                    }
                    break;
                case config.Keys.SPACE:
                    console.log("pew pew");
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    this.isAnyKeyDown = false;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    this.isAnyKeyDown = false;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    this.isAnyKeyDown = false;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    this.isAnyKeyDown = false;
                    break;
                case config.Keys.SPACE:
                    console.log("pew pew off");
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map