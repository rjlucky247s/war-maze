module objects {
    export class Mazetile extends objects.GameObject {
        // Variables
        // Constructor
        constructor(x: number, y: number, assetManager: createjs.LoadQueue) {
            super(assetManager, "mazetile");
            this.x = x;
            this.y = y;
            this.Start();
        }
        // Methods
        public Start(): void {
            //this.Reset();
        }
        public Update(): void {
            //this.Move();
            //  this.CheckBounds();
        }
        public Reset(): void {
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        }
        public CheckBounds(): void {
            if (this.y >= objects.Game.canvasHeight + this.halfH + 5) {
                this.Reset();
            }
        }
    }
}