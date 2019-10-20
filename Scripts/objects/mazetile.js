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
    var Mazetile = /** @class */ (function (_super) {
        __extends(Mazetile, _super);
        // Variables
        // Constructor
        function Mazetile(x, y, assetManager) {
            var _this = _super.call(this, assetManager, "mazetile") || this;
            _this.x = x;
            _this.y = y;
            _this.Start();
            return _this;
        }
        // Methods
        Mazetile.prototype.Start = function () {
            //this.Reset();
        };
        Mazetile.prototype.Update = function () {
            //this.Move();
            //  this.CheckBounds();
        };
        Mazetile.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        };
        Mazetile.prototype.CheckBounds = function () {
            if (this.y >= objects.Game.canvasHeight + this.halfH + 5) {
                this.Reset();
            }
        };
        return Mazetile;
    }(objects.GameObject));
    objects.Mazetile = Mazetile;
})(objects || (objects = {}));
//# sourceMappingURL=mazetile.js.map