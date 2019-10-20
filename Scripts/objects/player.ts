module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead: boolean;
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }
        // Methods
        public Start(): void {
            // Set the initial position
            this.y = 700;
            this.x = 320;

            this.isDead = false;
            //this.scaleX = 0.25;
            //this.scaleY = 0.25;
        }
        public Update(): void {

            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { }
        public Move(): void {
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
        }
        public CheckBound(): void {
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
        }


        public setRotation(): void {
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
        }
    }
}