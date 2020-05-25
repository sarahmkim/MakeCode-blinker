/**
 * Blink blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="blink at x $x y $y with an interval of $int ms"
    export function blink(x: number, y: number, int: number): void {
        let sprite = game.createSprite(x,y)
        sprite.setBlink(int)
        sprite.blink()

    }

}
