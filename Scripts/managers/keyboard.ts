module managers {
    export class Keyboard {
        // Variables
        public moveUp: boolean;
        public moveDown: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public shoot: boolean;
        public enabled: boolean;    // Enable / disable my whole keyboard
        public pause: boolean;
        public isAnyKeyDown: boolean;
        // Constructor
        constructor() {
            this.enabled = true;
            this.isAnyKeyDown = false;
            // Listen for keyup and keydown events through the DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        // Methods 
        public onKeyDown(event: KeyboardEvent): void {
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
        }
        public onKeyUp(event: KeyboardEvent): void {

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
        }
    }
}