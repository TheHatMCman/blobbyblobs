namespace SpriteKind {
    export const bossEnemy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.up.isPressed()) {
        thePlayer.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    sprite.startEffect(effects.bubbles, 500)
    timer.after(2000, function () {
        effects.clearParticles(sprite)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossEnemy, function (sprite, otherSprite) {
    if (playerInvincibility == 1) {
        enemyStatusBar.value += -20
        pause(500)
    }
    if (playerInvincibility == 0) {
        playerStatusBar.value += -20
        sprite.x += randint(-20, 20)
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    game.showLongText("Hold \"UP\" to climb poles!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(21, 16), assets.tile`transparency16`)
})
function stageThree () {
    stageCounter = 3
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffcfffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffcffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfffffffffcfffffcffffffffffcffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffff
        ffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffcffcfffcfffffcfffffffffffffcffcffcffffffffffffffffffffffffffffffffcfffffffcfffffffffffffffcfffcffcfffffffcffffffffcffcffffffffcfffcffffffffcfffcfffffffffffff
        ffffffffffffcffffffcffcfffcfffffffffffcffffcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccffffffcffffcfccffffffffffffffffcfff
        fffffffffffffffffcfffffffcffcfffffcffffffffffcffcfffffffcfffcffffcfcfffffcffffffcfffffcffcfffffcffffffffffcffffcffffffffffffffcffcfcfffffffffffffcfffffcffffffff
        fffcfffcfffcfffffffffffcffffffcffffffffcfffffffffffcffffcfffcfffffffffffffffffffcfcfffffffffffffffffcfffffffffcfffffffcfffffffffffffffcffffffffcffffffffffcfffcf
        ffffffffffffffcffffffffffffffffffffffcffffcffffcffffffffffffffffffcfffcffffcfffffffffffffffffffffffffffffffffffffffffffffffffffcffffcffffcffffffffcfffcffffffcff
        fffffcffcffffcfffcfcffffffcffffffffcfffffffffffcffcffffffffcffcffcfffffffffffffffcfffffcfffcfcffcffcfffcfffcfffcffcfffffcfffcfffffcffffcffffcffcfcfcfffcfffcffff
        ffcfcffcfffcfffcfffffffcfffffcffffffcfffcfffffffffffffcffffffffcfffffcfffcfffcfffffcfcffcfcfffffcfffffcfffffffcfffffcfffcfcfffcfffffffcffffcffffcfffcffffcffcfcf
        cccccccfcccfcccccccccccccccccccfccccfcccfcccccccccccccfccccccccfcccccfccccfcccccccfcccccfcccccccfccccfcccccfcccccfccccfcccccfcccccfccccccfcccfccccfccccfcccfcccc
        ccccfccccccccccccccccfccccccfcccfccccccccccfcccfcccfccccfcccfccfccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccfccccfcccccccccccfccccccc
        ccccccccccccfcccccfccccccccccccccccccfcccccccccfcccccccccccfcccccccccccfcccccccfccccccfcccccfccccfcccccccccccfccccfcccccfcccfcccfccfcccccccccccccfcccfcccccccccc
        ccfccfcccccccccccccccccfcccccfcccccccccccccfccfcccccccfccccccccccccfccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccc
        cccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccfccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccb555b555b555b5bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccb555b555bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cb5555b5555b5555bccccb555b555b555b5bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccb555b555bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(4, 19))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    game.showLongText("If you are heading in one direction, use the opposite direction + \"B\" to slide", DialogLayout.Bottom)
    game.showLongText("Boxes such as the one you just collected give particles", DialogLayout.Bottom)
    game.showLongText("You need at least 50 particles to slide", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(42, 12), assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart0 == 0) {
        gameInitial()
        gameStart0 = 1
    }
    if (jumpCounter == 0) {
        thePlayer.vy = -150
        pause(200)
        thePlayer.vy = -100
        jumpCounter = 1
    }
})
function tutorialStage () {
    stageCounter = 0
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ....................cccc........................................................................................................................................
        .............................................................................cc.................................................................................
        ............................ccc..cc............ccccc.......................ccc..................................................................................
        ..........................c........c................................................cccc........................................................................
        ...........cc..........................................................................................cccccc...................................................
        .......................................................cc.......................................................................................................
        ..........................cc............................cc....................................cccc..............................................................
        ...............c............cc.................................ccc..............................................................................................
        .................cc..........................................................................................cc.................................c...............
        .............................................................................................cc...........................................cc....................
        .........................................ccc....................................cccc.........c...........................................c......................
        .............c.............................cc.................cccccc............................................................................................
        ..............cc.........ccc.......................................................................cc...........................................................
        ...........................c.........................................................................................................c..........................
        .........................................................................................ccc.............cc..........................c..........................
        ...................................................................................cc...................cc.....c.....................c..........................
        ..............................................................................................................cc........................ccccc...................
        ..............................................................................................................c.................................................
        ..................................................................cc....cc.................cc...................................................................
        .........................................................................cc.................c.......................................................c...........
        ................................................................................................................................................................
        ................ccc......................................................................................cc.....................................................
        ..................c...c........c..............................................cc......c.........................................................................
        ......................cc.............c.........c........cc....cc...cccc.........................................................................................
        .........ccc.............cc...........cc.................c............c....................ccc....................ccc...........................................
        .......................................c...........................................................................................c.................c..........
        ................................................................................................................................................................
        ................ccc........c....................................................................................................................................
        ...................c............................................................................................................................................
        ................................c......................................................................cccc.....................................................
        .................................cc................ccc..........................................................................................................
        ..................................................c.............................................................................................................
        ................................................................................................................................................................
        ............................................................................................................................................ccccccccccc.........
        ................................................................................................................................................................
        ..................................................................................................................cccccc........................................
        ................................................................................................................................................................
        .................................................................................c..............................................................................
        ................................................................................c...............................................................................
        ...............ccc...........................................................ccc................................................................................
        ..................cc.............ccc......................................ccc...................................................................................
        ..............................ccc.......................................cc..................................................................ccccc......c........
        ..............................c.......................................................................................ccccc.....................................
        ..................................................................................................................cccc..........................................
        ....................................................................................................cc..........................................................
        ..................................................................................................cc............................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        .................................................................................................................................................cc.............
        ..........................................................cccc.............................................cccccc.....cccccc.......cccccc......ccc...c..........
        ........................................................ccc.............................ccccc..........cccc.....................................................
        ......................................................cc............cccccc......ccccc..............cccc.........................................................
        .........................................................c.........c.........ccc..................c.............................................................
        ..........................................................ccccc...........cccc...cc........cc......................ccc....ccc...ccccc...........ccc.............
        ......................................................................cccc.........cccccccc.....................................................................
        ..................................................................c.........................................ccc.................................................
        .............................................................cc........................................c..................................................c.....
        ...........................................................cc.........................................c.........................................................
        ......................................................................................................ccccccccc......cc...............ccc.......................
        .......................................c..............c..................................................................ccc..............cccccccccc............
        ..............................cc....................ccc.........................................................................................................
        ...................................................cc......................................................c....................................................
        ......................cc........................................................cccccccc........................................................................
        ................cccccc.........................................cccccc.......................................................................................c...
        .........c................................................ccccc................................................................................c............c...
        ..........ccc.............cccccccc....cccccccc..........................................................................ccc..ccccccccccccc.....cccccc.......c...
        .............cc..ccccccccc...........................................................................................ccc....................................c...
        .....................................................................................................................c......................................c...
        .........................................................................................................................cc.................................c...
        .........................cc.........ccccc.......c...............................................cc......................cc...........ccc....................c...
        .............cccc.............................ccc..............................ccccc......cccccc...............................ccc..c......cc.....c.............
        ..................cccc.......ccc....c...................................ccccccc................................................................ccccc............
        ..................ccc...cc.......ccc......cc..........................cc........................................................................................
        .............ccc.....cc..........c.....ccc..............................................................ccccccc...........cccccccc.........................cc...
        .................................................................................................ccccccc........................................................
        .................cc...........c.................................................................................................................................
        .................c.........ccc..............................ccccccc......ccccccccc..............................................................................
        .........cccc.........ccccc......ccccccccc..........cccccccc.........................................................................cc.........................
        .............................cccc.........................................................................................ccccccccccc...........................
        ............ccccc..........cc....................................................................................cc......c......................ccc.............
        ................c.....ccccc.........................................................ccccccc........cccccccccccccc............................ccc.........ccccc..
        ........ccccc...................................................c.............cccccc......................................................ccc...................
        ..............cccc..................................cccccccccccc........cccccc........................................................cccc.........cccc.........
        ................................................c...................................................................................cc..........c.cc............
        ......................cc..c.............cccccccc.................................................................................ccc..........ccc...............
        ...........ccccc..........c.....cccccccc...................cccccccccccccccccccc................................................cc..........ccc.......ccc........
        ................c....ccccc................ccccc...cc.....cc....ccccc...........ccccccccccc..................................ccc...........c.........cc..........
        .......................................ccc......ccc.cc....c..ccc.......cc.................cccccccccc.........cc............................cccc.............cccc
        ......ccc.............................c.....c.ccc.....cccc..........................................c...ccccc........................cc..cc.....cc..............
        .................ccccccccccccc.........ccccc.............................................................................c....cccc...........cc.................
        ...........cccc...............ccccc..ccc................................................................................c...........c....cccc.........ccccc.....
        ....................................cc.............................................................................................cc.........cc................
        ...............................................................c..cc...............ccccccccccccc...................................cc.............cccc..........
        ..............................................................cc.....cccccccccccccc.................................ccc.....ccc.cc.......cccc..c................
        ..........................................................c..........cc...c........cc.....cccc.....ccccc.................c.......ccc............................
        ...............................................cc................cccc......ccccccccc...........................ccccccccc............cccc.cccc...................
        ......................................ccccc.....................................................................................................................
        ................c..................ccc..................cc......................................................................................................
        ..........cccccc...............cccc.............................................................................................................................
        .......ccc...................................................c..................................................................................................
        ...............................................c....ccc.........................................................................................................
        .....................cccc..................cccc.................................................................................................................
        ................................................................................................................................................................
        ...............................ccc.....cc...ccccccccccc............c............................................................................................
        ..............cccc.......ccccccc.......c............................cccc........................................................................................
        .......ccccc.........................c..........................................................................................................................
        ..................................ccc..........................................c................................................................................
        ..............................cccc..............................................ccccccccccc.....................................................................
        ......cccc.....cc........cc..c.............................................................cccccc...............................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(11)
    tiles.setTilemap(tilemap`level12`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(6, 16))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (stageCounter == 1) {
        scene.cameraShake(4, 1000)
        controller.vibrate(900)
        arenaOne()
    }
    if (stageCounter == 2) {
        scene.cameraShake(4, 1000)
        controller.vibrate(900)
        arenaTwo()
    }
    if (stageCounter == 3) {
        scene.cameraShake(6, 1000)
        controller.vibrate(900)
        arenaThree()
    }
})
controller.combos.attachCombo("r+b", function () {
    if (info.score() > 50) {
        playerInvincibility = 1
        controller.moveSprite(thePlayer, 0, 0)
        thePlayer.vx = 300
        animation.runImageAnimation(
        thePlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f f 1 1 1 1 1 f f f . . . 
            . f 1 1 1 1 f f f 1 1 1 f . . . 
            f f 1 f f f f f f f f 1 f f . . 
            f 1 1 f f f f f f f f 1 1 f . . 
            f 1 f f f f 1 f f f f f 1 f . . 
            f 1 f f f f f f f 1 f f 1 f f . 
            f 1 f f 1 1 f f f f f f 1 1 f . 
            f 1 f f f 1 f f f f f f f 1 f . 
            f 1 f f f f 1 1 1 1 f f f 1 f . 
            f 1 1 1 f f f f f f f f f 1 f . 
            f f f 1 1 1 f f f f f 1 1 1 f . 
            . . f f f 1 1 1 1 1 1 1 f f f . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . f f f 1 1 1 1 f 
            . . . . . . . f f 1 1 1 f f 1 f 
            . . . . . . . f 1 f f f f f 1 f 
            . . . . . . f f 1 f f f f f 1 f 
            . . . . . . f 1 1 f f f f f 1 f 
            . . . . . f 1 1 f f f 1 f f 1 f 
            . . . . f f 1 f f f f f f f 1 f 
            . . f f f 1 1 f 1 f f f 1 f 1 f 
            . f f 1 1 1 f f f f f f 1 f 1 f 
            f f 1 1 f f f f 1 1 1 1 1 f 1 f 
            f 1 1 f f f f f f f f f f f 1 f 
            f f 1 f f f f f f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 f f f 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . f f 1 f f 
            . . . . . . . . . . f 1 1 f 1 f 
            . . . . . . . . . . f 1 f f 1 f 
            . . . . . . . . . . f 1 f f 1 f 
            . . . . . . . . . f 1 1 f f 1 f 
            . . . . . . . . . f 1 f 1 f 1 f 
            . . . . . . . . f 1 1 f f f 1 f 
            . . . . . . . f f 1 f f f f 1 f 
            . . . . . f f f 1 1 1 f f 1 1 f 
            . . . f f f 1 1 1 f f f 1 1 1 f 
            . . f 1 1 1 1 f f f 1 1 1 f 1 f 
            . f 1 1 f f f f f f f f f f 1 f 
            . f 1 1 f f f f f f f f f 1 1 f 
            . f f 1 1 1 1 1 1 1 1 1 1 1 f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . f f f 1 1 1 1 f 
            . . . . . . . f f 1 1 1 f f 1 f 
            . . . . . . . f 1 f f f f f 1 f 
            . . . . . . f f 1 f f f f f 1 f 
            . . . . . . f 1 1 f f f f f 1 f 
            . . . . . f 1 1 f f f 1 f f 1 f 
            . . . . f f 1 f f f f f f f 1 f 
            . . f f f 1 1 f 1 f f f 1 f 1 f 
            . f f 1 1 1 f f f f f f 1 f 1 f 
            f f 1 1 f f f f 1 1 1 1 1 f 1 f 
            f 1 1 f f f f f f f f f f f 1 f 
            f f 1 f f f f f f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 f f f 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . f f 1 f f 
            . . . . . . . . . . f 1 1 f 1 f 
            . . . . . . . . . . f 1 f f 1 f 
            . . . . . . . . . . f 1 f f 1 f 
            . . . . . . . . . f 1 1 f f 1 f 
            . . . . . . . . . f 1 f 1 f 1 f 
            . . . . . . . . f 1 1 f f f 1 f 
            . . . . . . . f f 1 f f f f 1 f 
            . . . . . f f f 1 1 1 f f 1 1 f 
            . . . f f f 1 1 1 f f f 1 1 1 f 
            . . f 1 1 1 1 f f f 1 1 1 f 1 f 
            . f 1 1 f f f f f f f f f f 1 f 
            . f 1 1 f f f f f f f f f 1 1 f 
            . f f 1 1 1 1 1 1 1 1 1 1 1 f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . f f f 1 1 1 1 f 
            . . . . . . . f f 1 1 1 f f 1 f 
            . . . . . . . f 1 f f f f f 1 f 
            . . . . . . f f 1 f f f f f 1 f 
            . . . . . . f 1 1 f f f f f 1 f 
            . . . . . f 1 1 f f f 1 f f 1 f 
            . . . . f f 1 f f f f f f f 1 f 
            . . f f f 1 1 f 1 f f f 1 f 1 f 
            . f f 1 1 1 f f f f f f 1 f 1 f 
            f f 1 1 f f f f 1 1 1 1 1 f 1 f 
            f 1 1 f f f f f f f f f f f 1 f 
            f f 1 f f f f f f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 f f f 
            . . f f f f f f f f f f f f . . 
            `],
        66,
        false
        )
        playerStatusBar.value += 5
        timer.after(750, function () {
            thePlayer.vx = 0
            playerInvincibility = 0
            thePlayer.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f f . . . . 
                . . . . . . . f f f 1 1 f . . . 
                . . . . f f f f 1 1 1 1 1 f . . 
                . . f f f 1 1 1 1 f f f 1 f . . 
                . . f 1 1 1 1 f f f f f 1 f f . 
                . f f 1 f f f f f 1 f f 1 1 f . 
                . f 1 1 f f 1 f f f f f f 1 f . 
                . f 1 f f f f f f f f f f 1 1 f 
                . f 1 1 f f f f f f 1 1 f 1 1 f 
                . f f 1 f f 1 1 f 1 1 f f 1 f f 
                . . f 1 1 f f 1 1 f f f 1 1 f . 
                . . . f 1 1 1 1 1 1 1 1 1 f f . 
                . . . . f f f f f f f f f f . . 
                `)
            controller.moveSprite(thePlayer, 100, 0)
        })
        info.changeScoreBy(-50)
    } else {
        thePlayer.say("I need more particles", 500)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (gameStart0 == 1) {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            info.changeScoreBy(1)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart0 == 1) {
        animation.runImageAnimation(
        thePlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f . . . . . . . 
            f 1 1 1 1 1 1 1 1 f f f . . . . 
            f 1 f f f f f f 1 1 1 f f . . . 
            f 1 f f f f 1 f f f f 1 f f . . 
            f 1 f f f f f f f 1 f f 1 f f . 
            f 1 f f f 1 f f f f f f f 1 f . 
            f f 1 f f f 1 1 1 f f f f 1 f . 
            . f 1 f f f f f f f f f 1 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 f f f . 
            . . f f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f . . . . . . . 
            f f 1 1 1 1 1 1 1 f f f . . . . 
            f 1 1 f f f f f 1 1 1 f f . . . 
            f 1 f f f f 1 f f f f 1 f f . . 
            f 1 f f f f f f f 1 f f 1 f f . 
            f 1 f f f 1 f f f f f f f 1 f . 
            f f 1 f f 1 1 1 1 1 f f f 1 f . 
            . f 1 f f f f f f f f f 1 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 f f f . 
            . . f f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . f 1 1 1 1 1 1 f f f . . . . 
            . f 1 f f f f f f 1 1 f f . . . 
            f 1 f f f 1 f f f f f 1 1 f . . 
            f 1 f f f f f f 1 f f f f 1 f . 
            f 1 f f 1 f f f f f f f f f 1 f 
            f 1 f f 1 1 1 1 f f f f f f 1 f 
            . f 1 f f f f f f f f f 1 1 1 f 
            . f f 1 1 1 1 1 1 1 1 1 1 f f f 
            . . f f f f f f f f f f f f . . 
            `],
        120,
        true
        )
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            info.changeScoreBy(1)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    timer.after(150, function () {
        deathSequence()
    })
})
function deathSequence () {
    info.setLife(1)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level11`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(10, 5))
    playerStatusBar.destroy()
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, thePlayer)
    pause(200)
    animation.runImageAnimation(
    thePlayer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . f f f 1 1 1 1 1 1 f f . . . 
        . f f 1 1 1 f f f f 1 1 f f . . 
        . f 1 f f f f f f f f 1 1 f f . 
        . f 1 f f 1 1 1 f 1 1 1 1 1 f . 
        . f 1 f f 1 f 1 f 1 f 1 f 1 f f 
        . f 1 f f 1 1 1 f 1 1 1 f 1 1 f 
        . f 1 1 f f f f f f f f f 1 1 f 
        . f f 1 f f f f 1 f f f f 1 f . 
        . . f 1 1 1 f f f f f 1 1 1 f . 
        . . f f f 1 1 1 1 1 1 1 f f . . 
        . . . . f f f f 1 f f f f . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . f f f 1 1 1 1 1 1 f f . . . . 
        f f 1 1 1 f f f f 1 1 f f . . . 
        f 1 f f f f f f f f 1 1 f f . . 
        f 1 f f 1 1 1 f 1 1 1 1 1 f . . 
        f 1 f f 1 f 1 f 1 f 1 f 1 f f . 
        f 1 f f 1 1 1 f 1 1 1 f 1 1 f . 
        f 1 1 f f f f f f f f f 1 1 f . 
        f f 1 f f f f 1 f f f f 1 f . . 
        . f 1 1 1 f f f f f 1 1 1 f . . 
        . f f f 1 1 1 1 1 1 1 f f . . . 
        . . . f f f f 1 f f f f . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . f f f 1 1 1 1 1 1 f f . . . 
        . f f 1 1 1 f f f f 1 1 f f . . 
        . f 1 f f f f f f f f 1 1 f f . 
        . f 1 f f 1 1 1 f 1 1 1 1 1 f . 
        . f 1 f f 1 f 1 f 1 f 1 f 1 f f 
        . f 1 f f 1 1 1 f 1 1 1 f 1 1 f 
        . f 1 1 f f f f f f f f f 1 1 f 
        . f f 1 f f f f 1 f f f f 1 f . 
        . . f 1 1 1 f f f f f 1 1 1 f . 
        . . f f f 1 1 1 1 1 1 1 f f . . 
        . . . . f f f f 1 f f f f . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . f f f 1 1 1 1 1 1 f f . . . 
        . f f 1 1 1 f f f f 1 1 f f . . 
        . f 1 f f f f f f f f 1 1 f f . 
        . f 1 f f 1 1 1 f 1 1 1 1 1 f . 
        . f 1 f f 1 f 1 f 1 f 1 f 1 f f 
        . f 1 f f 1 1 1 f 1 1 1 f 1 1 f 
        . f 1 1 f f f f f f f f f 1 1 f 
        . f f 1 f f f f 1 f f f f 1 f . 
        . . f 1 1 1 f f f f f 1 1 1 f . 
        . . f f f 1 1 1 1 1 1 1 f f . . 
        . . . . f f f f 1 f f f f . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . f f f f 1 1 1 1 f f . . . 
        . . . f 1 1 1 1 f f 1 1 f . . . 
        . . . f 1 f f f f 1 f 1 f . . . 
        . . . f 1 f f 1 f f f 1 f . . . 
        . . . f f 1 1 f f f 1 1 f . . . 
        . . . . f f f 1 1 1 f f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . 1 . . . 
        . . . . . . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . 1 . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . 1 . . . . . . . . . . . . . . 
        . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 
        . 1 . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    66,
    false
    )
    controller.vibrate(500)
    pause(1000)
    game.showLongText("He was unable to withstand such damage", DialogLayout.Bottom)
    info.setLife(0)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (gameStart0 == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, thePlayer)
        animation.runImageAnimation(
        thePlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f f f 
            . . . . f f f 1 1 1 1 1 1 1 1 f 
            . . . f f 1 1 1 f f f f f f 1 f 
            . . f f 1 f f f 1 f f f f f 1 f 
            . f f 1 f f f f f f f 1 f f 1 f 
            . f 1 f f f f 1 f f f f f f 1 f 
            . f 1 f f f f 1 1 1 1 f f 1 f f 
            . f 1 1 f f f f f f f f f 1 f . 
            . f f f 1 1 1 1 1 1 1 1 1 f f . 
            . . . f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f f . 
            . . . . f f f 1 1 1 1 1 1 1 f f 
            . . . f f 1 1 1 f f f f f 1 1 f 
            . . f f 1 f f f 1 f f f f f 1 f 
            . f f 1 f f f f f f f 1 f f 1 f 
            . f 1 f f f f 1 f f f f f f 1 f 
            . f 1 f f f f 1 1 1 1 f f 1 f f 
            . f 1 1 f f f f f f f f f 1 f . 
            . f f f 1 1 1 1 1 1 1 1 1 f f . 
            . . . f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . f f f 1 1 1 1 1 1 f . . 
            . . . f f 1 1 f f f f f f 1 f . 
            . . f 1 1 f f 1 f f f f f f 1 f 
            . f 1 f f f f f f f 1 f f f 1 f 
            f 1 f f f f 1 f f f f f f f 1 f 
            f 1 f f f f 1 1 1 1 f f f f 1 f 
            f 1 1 1 f f f f f f f f f 1 f . 
            f f f 1 1 1 1 1 1 1 1 1 1 f f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 1 1 1 1 1 1 f f . . . 
            . f f 1 1 f f f f f f 1 1 f . . 
            . f 1 f f f f f f f f f f 1 f . 
            f 1 f f f f 1 f f 1 f f f f 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 f f f 1 f f f f f f f f 1 f 
            f 1 f f f f 1 1 1 f f f f f 1 f 
            f f 1 f f f f f f f f f f 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 1 f f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 1 1 f . . . 
            . . . . f f f 1 1 1 f f 1 f . . 
            . . f f f 1 1 f f f f f 1 f . . 
            . . f 1 1 f f f f f f f 1 f f . 
            . . f 1 f f f f f 1 f f f 1 f . 
            . f f 1 f f 1 f f f f f f 1 f . 
            . f 1 f f f f f f f f f f f 1 f 
            . f 1 f f f f f f f 1 1 f f 1 f 
            . f f 1 f f 1 1 f 1 1 f f 1 f f 
            . . f 1 f f f 1 1 f f f f 1 f . 
            . . . f 1 1 1 1 1 1 1 1 1 f f . 
            . . . . f f f f f f f f f . . . 
            `],
        66,
        false
        )
        thePlayer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 1 1 f . . . 
            . . . . f f f f 1 1 1 1 1 f . . 
            . . f f f 1 1 1 1 f f f 1 f . . 
            . . f 1 1 1 1 f f f f f 1 f f . 
            . f f 1 f f f f f 1 f f 1 1 f . 
            . f 1 1 f f 1 f f f f f f 1 f . 
            . f 1 f f f f f f f f f f 1 1 f 
            . f 1 1 f f f f f f 1 1 f 1 1 f 
            . f f 1 f f 1 1 f 1 1 f f 1 f f 
            . . f 1 1 f f 1 1 f f f 1 1 f . 
            . . . f 1 1 1 1 1 1 1 1 1 f f . 
            . . . . f f f f f f f f f f . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (gameStart0 == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, thePlayer)
        animation.runImageAnimation(
        thePlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f . . . . . . . 
            f 1 1 1 1 1 1 1 1 f f f . . . . 
            f 1 f f f f f f 1 1 1 f f . . . 
            f 1 f f f f 1 f f f f 1 f f . . 
            f 1 f f f f f f f 1 f f 1 f f . 
            f 1 f f f 1 f f f f f f f 1 f . 
            f f 1 f f 1 1 1 1 f f f f 1 f . 
            . f 1 f f f f f f f f f 1 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 f f f . 
            . . f f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f . . . . . . . 
            f f 1 1 1 1 1 1 1 f f f . . . . 
            f 1 1 f f f f f 1 1 1 f f . . . 
            f 1 f f f f 1 f f f f 1 f f . . 
            f 1 f f f f f f f 1 f f 1 f f . 
            f 1 f f f 1 f f f f f f f 1 f . 
            f f 1 f f 1 1 1 1 f f f f 1 f . 
            . f 1 f f f f f f f f f 1 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 f f f . 
            . . f f f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . f 1 1 1 1 1 1 f f f . . . . 
            . f 1 f f f f f f 1 1 f f . . . 
            f 1 f f f f f 1 f f f 1 1 f . . 
            f 1 f f f f f f f f 1 f f 1 f . 
            f 1 f f f f 1 f f f f f f f 1 f 
            f 1 f f f f 1 1 1 f f f f f 1 f 
            . f 1 f f f f f f f f f 1 1 1 f 
            . f f 1 1 1 1 1 1 1 1 1 1 f f f 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f 1 1 1 1 1 1 f f . . . 
            . f f 1 1 f f f f f f 1 1 f . . 
            . f 1 f f f f f f f f f f 1 f . 
            f 1 f f f f 1 f f 1 f f f f 1 f 
            f 1 f f f f f f f f f f f f 1 f 
            f 1 f f f 1 f f f f f f f f 1 f 
            f 1 f f f f 1 1 1 f f f f f 1 f 
            f f 1 f f f f f f f f f f 1 f . 
            . f f 1 1 1 1 1 1 1 1 1 1 f f . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 1 1 f . . . 
            . . . . f f f 1 1 1 f f 1 f . . 
            . . f f f 1 1 f f f f f 1 f . . 
            . . f 1 1 f f f f f f f 1 f f . 
            . . f 1 f f f f f 1 f f f 1 f . 
            . f f 1 f f 1 f f f f f f 1 f . 
            . f 1 f f f f f f f f f f f 1 f 
            . f 1 f f f f f f f 1 1 f f 1 f 
            . f f 1 f f 1 1 f 1 1 f f 1 f f 
            . . f 1 f f f 1 1 f f f f 1 f . 
            . . . f 1 1 1 1 1 1 1 1 1 f f . 
            . . . . f f f f f f f f f . . . 
            `],
        66,
        false
        )
    }
})
function arenaTwo () {
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbccccccbcccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcbbbbcbbbbcbbcbbbbbbccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccbccccccccccbcccccccbcccccbbbbbbbccbbbcbccbbcbbbbbbbcbbbbbbbcbbbcbcccccccccccbcbccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcbbcbcbbbcbbbbcbbbcbcbbcbbbbbbbbcbbbbbbbcbbbbbbbccccccccccccbccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccbcbcccccbccccccccbbcbbcbbcbbccbbbcbbbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbcbbbbbbbbcccccccccccbcccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccbccccccccccccccbcbbcbbcbbcbcbbbbbcbbbcbbbbcbbbbbbbbbbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbccccccbcccccccbcccccccccccccccccccccccccccccc
        ccccccbcccccccccccccccbbcbcbbcbbbbcbbcbcbbbbbbcbbbbbcbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcbbcbbbbbbbbccbcccccccbcbcbccccccccccccccccccccccc
        ccbcccbcccccccbcbbcbbbbcbcbbbcbbcbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccccccccccccccccccccccccccc
        cccccbbbbcbcbccbccbbccbbcbcbbcbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbbbbbcbbbcbbbccccccccccccbcbcccbccccc
        bbbbcbcbcbcbcbcbcbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbcbbbbcbbbbbbccbccccccccccccccb
        bbccbbcbbcbcbbbbbbcbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbccbcccccccc
        cbbbbcbbcbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbccbbbbbbbbbcbbbbbbbbbbbbcccc
        bcbbcbbbbbcbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbcbbb
        bbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbcbbbbbbbbbbccbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcbbbcbbbbcbcb
        bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbb
        bbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbcbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbb
        bbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setTilemap(tilemap`level7`)
    bossTwo = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ...............1111111............................
        .............111.1111111..........................
        ............1111111111111.........................
        ............111111111111111.......................
        ...........1111111111111111.......................
        ..........111111111111111.11......................
        .........1111111111111111111......................
        .........11111111111111111111.....................
        ........111111111111111111111.....................
        ........11111111111fff1111111.....................
        ........1111fff111ffff11111111....................
        ........111ffff111fffff11111111...................
        ........111ffff1111ffff11111111...................
        ........111fffff111ffff111111111..................
        ........111fffff111fffff11111111..................
        ........111ffffff11fffff111111111.................
        .........111fffff111ffff111111111.................
        .........111fffff111ffff1111111111................
        .........111fffff1111ff1111111.1111...............
        ..........111ffff111111111111111111...............
        ..........11111111111111111111111111..............
        ..........111111111111111111111111111.............
        ..........d11111111111111111111111111.............
        ...........111111111111111111111111111............
        ...........1d111111d1111d11111111111111...........
        ...........d1111111111111111d11111111111..........
        ............1111111111.11d1111111111111.11........
        ............1d1111111d11111d111dd1111111111.......
        ............b11d111111dd111dd111dd1111.1.1.1......
        .............bdd1d11111dd111111111111111111111....
        .............bb.d1111111111111.11111.111111..11...
        ..............bbd11d11111111111111111111..1111..d.
        ...............b.d111111111.11.11111111.111.d.ddd.
        ...............bbd11d111.11111111111..111.........
        ................bbd111111111.111.11111.1.1........
        .................bdd1d1d111111.dd.1.1111..1.......
        .................b.d.11111.1.1...dd11.1.11.1......
        ..................b..11.1d11.......dddd1..1.......
        ...................bbd.11...111.......d.1.1.11....
        ....................b.d.d1.d1..1.........d.dd1....
        .....................b..d.1..11.11................
        ......................bb.d.1d..1..1...............
        .........................bbb.d1..1................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.bossEnemy)
    enemyStatusBar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
    enemyStatusBar.value = 200
    enemyStatusBar.setColor(10, 2, 7)
    enemyStatusBar.attachToSprite(bossTwo)
    tiles.placeOnTile(bossTwo, tiles.getTileLocation(28, 10))
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    bossBattle = 0
    if (stageCounter == 1) {
        bossOne.vy = -400
        timer.after(500, function () {
            bossOne.vx = 0
            scene.cameraFollowSprite(bossOne)
            tiles.placeOnTile(bossOne, tiles.getTileLocation(49, 20))
            bossOne.setVelocity(0, 45)
            tiles.setTilemap(tilemap`level13`)
        })
        timer.after(1900, function () {
            bossOne.destroy(effects.ashes, 500)
        })
        timer.after(1900, function () {
            scene.cameraFollowSprite(thePlayer)
            tiles.setWallAt(tiles.getTileLocation(47, 29), false)
            tiles.setWallAt(tiles.getTileLocation(48, 29), false)
            tiles.setWallAt(tiles.getTileLocation(50, 29), false)
            tiles.setWallAt(tiles.getTileLocation(49, 29), false)
            tiles.setWallAt(tiles.getTileLocation(51, 29), false)
        })
    }
    if (stageCounter == 2) {
        bossTwo.destroy(effects.ashes, 500)
        timer.after(500, function () {
            stageThree()
        })
    }
    if (stageCounter == 3) {
        bossTwo.destroy(effects.halo, 500)
        timer.after(100, function () {
            game.splash("Congradulations, you deafeated", "your inner darkness")
            game.over(true, effects.confetti)
        })
    }
    playerStatusBar.value += 20
})
controller.combos.attachCombo("u+b", function () {
    playerInvincibility = 1
    animation.runImageAnimation(
    thePlayer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f f . . 
        . . f f 1 1 1 1 1 1 1 1 1 f f . 
        f f f 1 1 f f f f f f f 1 1 f f 
        f 1 1 1 f f f f f 1 f f f 1 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 f f f f f f f f 1 1 f f 1 f 
        f 1 1 f f f f f f 1 1 f f 1 1 f 
        f f 1 1 f f 1 1 1 1 f f 1 1 f f 
        . f f 1 1 f f f f f 1 1 1 f f . 
        . . f f 1 1 1 1 1 1 1 f f f . . 
        . . . f f f f f f f f . . . . . 
        `,img`
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . . 4 5 . . . . . . . 
        . . . . . . 4 f 5 . . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f f f f f . . 
        f f f . . f f f f f 1 1 1 f f f 
        f 1 f f f 1 1 1 1 1 f f 1 1 1 f 
        f 1 1 1 1 f f f f f f f f f 1 f 
        f 1 f f f f f f f 1 f 1 f f 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 1 f f f f f f f 1 f f f 1 f 
        f f 1 1 f f f 1 1 1 f f 1 1 1 f 
        . f f 1 1 1 f f f 1 1 1 1 f f . 
        . . f f f 1 1 1 1 1 f f f f . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 4 5 5 . . . . . . . 
        . . . . . . 4 4 5 5 . . . . . . 
        . . . . . . 4 1 1 5 . . . . . . 
        . . . . . . f 1 1 f f f f f . . 
        f f f . . f f f f f 1 1 1 f f f 
        f 1 f f f 1 1 1 1 1 f f 1 1 1 f 
        f 1 1 1 1 f f f f f f f f f 1 f 
        f 1 f f f f f f f 1 f 1 f f 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 1 f f f f f f f 1 f f f 1 f 
        f f 1 1 f f f 1 1 1 f f 1 1 1 f 
        . f f 1 1 1 f f f 1 1 1 1 f f . 
        . . f f f 1 1 1 1 1 f f f f . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . . 4 5 5 5 . . . . . . 
        . . . . . . 4 4 4 5 f f f f . . 
        f f f . . f f f f f 1 1 1 f f f 
        f 1 f f f 1 1 1 1 1 f f 1 1 1 f 
        f 1 1 1 1 f f f f f f f f f 1 f 
        f 1 f f f f f f f 1 f 1 f f 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 1 f f f f f f f 1 f f f 1 f 
        f f 1 1 f f f 1 1 1 f f 1 1 1 f 
        . f f 1 1 1 f f f 1 1 1 1 f f . 
        . . f f f 1 1 1 1 1 f f f f . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . 4 5 5 f f f f f . . 
        f f f . . f f f f f 1 1 1 f f f 
        f 1 f f f 1 1 1 1 1 f f 1 1 1 f 
        f 1 1 1 1 f f f f f f f f f 1 f 
        f 1 f f f f f f f 1 f 1 f f 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 1 f f f f f f f 1 f f f 1 f 
        f f 1 1 f f f 1 1 1 f f 1 1 1 f 
        . f f 1 1 1 f f f 1 1 1 1 f f . 
        . . f f f 1 1 1 1 1 f f f f . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 1 f f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f f f f f . . 
        f f f . . f f f f f 1 1 1 f f f 
        f 1 f f f 1 1 1 1 1 f f 1 1 1 f 
        f 1 1 1 1 f f f f f f f f f 1 f 
        f 1 f f f f f f f 1 f 1 f f 1 f 
        f 1 f f f 1 f f f f f 1 f f 1 f 
        f 1 1 f f f f f f f 1 f f f 1 f 
        f f 1 1 f f f 1 1 1 f f 1 1 1 f 
        . f f 1 1 1 f f f 1 1 1 1 f f . 
        . . f f f 1 1 1 1 1 f f f f . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    false
    )
    timer.after(750, function () {
        playerInvincibility = 0
        thePlayer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . f f f 1 1 f . . . 
            . . . . f f f f 1 1 1 1 1 f . . 
            . . f f f 1 1 1 1 f f f 1 f . . 
            . . f 1 1 1 1 f f f f f 1 f f . 
            . f f 1 f f f f f 1 f f 1 1 f . 
            . f 1 1 f f 1 f f f f f f 1 f . 
            . f 1 f f f f f f f f f f 1 1 f 
            . f 1 1 f f f f f f 1 1 f 1 1 f 
            . f f 1 f f 1 1 f 1 1 f f 1 f f 
            . . f 1 1 f f 1 1 f f f 1 1 f . 
            . . . f 1 1 1 1 1 1 1 1 1 f f . 
            . . . . f f f f f f f f f f . . 
            `)
    })
    info.changeScoreBy(-10)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    deathSequence()
})
function stageOne () {
    stageCounter = 1
    bossBattle = 0
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55bccb55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55bccb55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55bccb55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55bccb55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55bccb55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55bccb55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55bccb55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55bccb55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bbccbb55b55bccb55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bccb55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bccb55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bccb55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bccb55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bccb55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55bccb55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55bccb55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55bccb55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55bccb55b55b55b5bb555555bb555555bb555555bb555555bbccccccbb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55bccb55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55bccb55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55bccb55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
        b55b55b55b55b55b55bccb5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
        b55b55b55b55b55b55bccb5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
        b55b55b55b55b55b55bccb5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
        b55b55b55b55b55b55bccb5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55bccb5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55b
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55b
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55b
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55bccb55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccb
        b55b55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccb
        b55b55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccb
        b55b55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccb
        b55b55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55b
        `)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(2, 28))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    timer.after(750, function () {
        deathSequence()
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart0 == 1) {
        animation.runImageAnimation(
        thePlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f f f 
            . . . . f f f 1 1 1 1 1 1 1 1 f 
            . . . f f 1 1 1 f f f f f f 1 f 
            . . f f 1 f f f 1 f f f f f 1 f 
            . f f 1 f f f f f f f 1 f f 1 f 
            . f 1 f f f f 1 f f f f f f 1 f 
            . f 1 f f f f 1 1 1 1 f f 1 f f 
            . f 1 1 f f f f f f f f f 1 f . 
            . f f f 1 1 1 1 1 1 1 1 1 f f . 
            . . . f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f f . 
            . . . . f f f 1 1 1 1 1 1 1 f f 
            . . . f f 1 1 1 f f f f f 1 1 f 
            . . f f 1 f f f 1 f f f f f 1 f 
            . f f 1 f f f f f f f 1 f f 1 f 
            . f 1 f f f f 1 f f f f f f 1 f 
            . f 1 f f f f 1 1 1 1 f f 1 f f 
            . f 1 1 f f f f f f f f f 1 f . 
            . f f f 1 1 1 1 1 1 1 1 1 f f . 
            . . . f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . f f f 1 1 1 1 1 1 f . . 
            . . . f f 1 1 f f f f f f 1 f . 
            . . f 1 1 f f 1 f f f f f f 1 f 
            . f 1 f f f f f f f 1 f f f 1 f 
            f 1 f f f f 1 f f f f f f f 1 f 
            f 1 f f f f 1 1 1 1 f f f f 1 f 
            f 1 1 1 f f f f f f f f f 1 f . 
            f f f 1 1 1 1 1 1 1 1 1 1 f f . 
            . . f f f f f f f f f f f f . . 
            `],
        120,
        true
        )
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            info.changeScoreBy(1)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    game.showLongText("You can wall jump too!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(33, 25), assets.tile`transparency16`)
})
function stageTwo () {
    stageCounter = 2
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(14, 0))
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbccccccccccccccbccccbbbbcccccbbbbccccccccbccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccbccccccccccbccccccccccccbcccccccccbbbcbcccccccbbbcccccccccccccccccccccccbcccccccccbbcbbbcccccbccccccccccccccbbcccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccbbbbccccccccccccccbbccccccccbcccccbbbccbccccccbbcccbcccbbbbccbbccbbcbcccccccccccccccbccccccbbccccbbbccccccbbbbccccccccbbbbccccccccccccc
        ccccccccccccccbccbcccccccccccccccbcbbcbbcbcbccccbcccbcccbcccbbbbbcccccbbbcbccbcccbccccccccccbbbbcbbcbbcccccbbcccccccbcbcccccccccccccccccccbbbccccccccccccccccccc
        ccbbbbcbbbbcbbbbbbbbcbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbcbcbbbcbbbbccbbbcbbbcbbbbbbccbccccbbcbbbbcbbcbbbcccbbcccbcccbbbbbbbccbbccccbccbbbbbbbcccccc
        cccccccccccccccbbccbbbbcbbbbccccbbbcbbbbbcccbbbbbbbcccccccbbbbbbccccbbbbbbccccbbbbccccccccccccbbbbcccccccccccccccccccccccccccccccccccccbcccbbbbbcccccccccccccccc
        cccccccccccccccccccccbcbccccccccbccccccccccccccccbbbbcccccccccccccbbbcbbccccccbbbbccccbbcccbbbbbbbbbbbbbbbcccccbbbbbbbbbbbccbbbcccbccbbccccccccccccccccccccccccc
        cccccccccccccccccccbbccbbbbbcccccbcbbcccccccbccccccccccccccbbbbccccbccccccbbccccccbcccccccccccccccccccccccbbbbcccccccccccccccccbbbcccccccccccccccccccccccccccccc
        cccccccccccccccccbbcccccccccccccccccbccccbbcccccccccccccccccccccccbcccccccccbccbbbccccbcccccccccccccccccbcccccbccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccbbcccccbcccccccccbbcccccccbbbcccccccccccbbbccccccccbbbbbbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    tiles.setTilemap(tilemap`level4`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (stageCounter == 1) {
        scene.cameraFollowSprite(bossOne)
        bossOne.ay = 300
        tiles.setTileAt(tiles.getTileLocation(65, 20), assets.tile`transparency16`)
        bossBattle = 1
        timer.after(2000, function () {
            scene.cameraFollowSprite(thePlayer)
        })
    }
    if (stageCounter == 2) {
        scene.cameraFollowSprite(bossTwo)
        tiles.setTileAt(tiles.getTileLocation(33, 21), assets.tile`transparency16`)
        bossTwo.ay = 300
        bossTwo.follow(thePlayer, 100)
        bossBattle = 1
        timer.after(1500, function () {
            scene.cameraFollowSprite(thePlayer)
        })
    }
    if (stageCounter == 3) {
        scene.cameraFollowSprite(bossThree)
        tiles.setTileAt(tiles.getTileLocation(66, 12), assets.tile`transparency16`)
        controller.moveSprite(thePlayer, 0, 0)
        bossThree.ay = 400
        bossBattle = 1
        timer.after(2000, function () {
            scene.cameraFollowSprite(thePlayer)
        })
        timer.after(10, function () {
            controller.moveSprite(thePlayer, 100, 0)
        })
        timer.after(200, function () {
            bossThree.follow(thePlayer, 50)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    timer.after(150, function () {
        deathSequence()
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile57`, function (sprite, location) {
    timer.after(150, function () {
        stageTwo()
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    game.showLongText("Use \"Up\" + \"B\" to attack enemies from below", DialogLayout.Bottom)
    game.showLongText("You need at least 10 particles to attack", DialogLayout.Bottom)
    game.showLongText("Good luck on defeating your inner darkness!", DialogLayout.Bottom)
    stageOne()
})
function arenaThree () {
    tiles.setTilemap(tilemap`level10`)
    bossThree = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 . . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 f f f f 1 1 . . . 
        . . . . 1 1 f f 1 1 f f 1 1 . . 
        . . . 1 1 f f 1 1 1 1 f f 1 1 . 
        . . . 1 f f 1 1 1 f 1 1 f f 1 . 
        . . 1 1 f 1 1 1 1 1 1 1 1 f 1 1 
        . . 1 f f 1 f 1 1 1 1 1 1 f f 1 
        . 1 f f 1 1 1 1 1 1 f 1 1 1 f 1 
        1 1 f 1 1 1 1 1 f f 1 f 1 f f 1 
        1 f f 1 1 1 1 f 1 1 1 1 f f 1 1 
        . 1 f f f 1 1 1 1 f f f f 1 1 . 
        . 1 1 1 f f f f f f 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        `, SpriteKind.bossEnemy)
    animation.runImageAnimation(
    bossThree,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 1 . . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 f f f f 1 1 . . . 
        . . . . 1 1 f f 1 1 f f 1 1 . . 
        . . . 1 1 f f 1 1 1 1 f f 1 1 . 
        . . . 1 f f 1 1 1 f 1 1 f f 1 . 
        . . 1 1 f 1 1 1 1 1 1 1 1 f 1 1 
        . . 1 f f 1 f 1 1 1 1 1 1 f f 1 
        . 1 f f 1 1 1 1 1 1 f 1 1 1 f 1 
        1 1 f 1 1 1 1 1 f f 1 f 1 f f 1 
        1 f f 1 1 1 1 f 1 1 1 1 f f 1 1 
        . 1 f f f 1 1 1 1 f f f f 1 1 . 
        . 1 1 1 f f f f f f 1 1 1 1 . 1 
        . 1 . 1 1 1 1 1 1 1 . . 1 . 1 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 f f f f f 1 1 . . . . 
        . . . 1 f 1 1 1 1 1 f f 1 1 . . 
        . . 1 f 1 1 1 1 1 1 1 1 f 1 . . 
        . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 . 
        . 1 f 1 1 1 1 1 1 f 1 1 1 1 f 1 
        1 f 1 1 1 1 f 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 f f f f 1 1 1 f 1 
        1 f 1 1 1 1 1 f 1 1 1 1 1 1 f 1 
        . 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 1 1 f f f 1 1 1 1 1 1 f f 1 1 
        . . . 1 1 1 f f f f f f 1 1 1 . 
        1 . 1 . 1 . 1 1 1 1 1 1 . 1 . 1 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 f f f 1 1 1 1 . . . 
        . . . . 1 f 1 1 1 f f f f 1 . . 
        . . . 1 f 1 1 1 1 1 1 1 1 f 1 . 
        . . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 
        . . 1 f 1 1 1 1 1 f 1 1 1 1 f 1 
        . 1 f 1 1 1 f 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 f f f f f 1 1 f 1 
        1 f 1 1 1 1 f f 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 1 f f 1 1 1 1 1 1 1 1 f f f 1 
        . . 1 1 f f f f f f f f 1 1 1 1 
        1 . 1 . 1 1 1 1 1 1 1 1 . 1 . 1 
        . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 
        `],
    100,
    true
    )
    enemyStatusBar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
    enemyStatusBar.value = 200
    enemyStatusBar.setColor(10, 2, 7)
    enemyStatusBar.attachToSprite(bossThree)
    tiles.placeOnTile(bossThree, tiles.getTileLocation(45, 4))
}
controller.combos.attachCombo("l+b", function () {
    if (gameStart0 == 1) {
        if (info.score() > 50) {
            playerInvincibility = 1
            controller.moveSprite(thePlayer, 0, 0)
            thePlayer.vx = -300
            animation.runImageAnimation(
            thePlayer,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f f 1 1 1 1 1 f f f . . . 
                . f 1 1 1 1 f f f 1 1 1 f . . . 
                f f 1 f f f f f f f f 1 f f . . 
                f 1 1 f f f f f f f f 1 1 f . . 
                f 1 f f f f 1 f f f f f 1 f . . 
                f 1 f f f f f f f 1 f f 1 f f . 
                f 1 f f 1 1 f f f f f f 1 1 f . 
                f 1 f f f 1 f f f f f f f 1 f . 
                f 1 f f f f 1 1 1 1 f f f 1 f . 
                f 1 1 1 f f f f f f f f f 1 f . 
                f f f 1 1 1 f f f f f 1 1 1 f . 
                . . f f f 1 1 1 1 1 1 1 f f f . 
                . . . . f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . f f f f f . . . . . . . . . . 
                f 1 1 1 1 f f f . . . . . . . . 
                f 1 f f 1 1 1 f f . . . . . . . 
                f 1 f f f f f 1 f . . . . . . . 
                f 1 f f f f f 1 f f . . . . . . 
                f 1 f f f f f 1 1 f . . . . . . 
                f 1 f f 1 f f f 1 1 f . . . . . 
                f 1 f f f f f f f 1 f f . . . . 
                f 1 f 1 f f f 1 f 1 1 f f f . . 
                f 1 f 1 f f f f f f 1 1 1 f f . 
                f 1 f 1 1 1 1 1 f f f f 1 1 f f 
                f 1 f f f f f f f f f f f 1 1 f 
                f 1 1 1 f f f f f f f f f 1 f f 
                f f f 1 1 1 1 1 1 1 1 1 1 1 f . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . f f f . . . . . . . . . . . . 
                f f 1 f f . . . . . . . . . . . 
                f 1 f 1 1 f . . . . . . . . . . 
                f 1 f f 1 f . . . . . . . . . . 
                f 1 f f 1 f . . . . . . . . . . 
                f 1 f f 1 1 f . . . . . . . . . 
                f 1 f 1 f 1 f . . . . . . . . . 
                f 1 f f f 1 1 f . . . . . . . . 
                f 1 f f f f 1 f f . . . . . . . 
                f 1 1 f f 1 1 1 f f f . . . . . 
                f 1 1 1 f f f 1 1 1 f f f . . . 
                f 1 f 1 1 1 f f f 1 1 1 1 f . . 
                f 1 f f f f f f f f f f 1 1 f . 
                f 1 1 f f f f f f f f f 1 1 f . 
                f f 1 1 1 1 1 1 1 1 1 1 1 f f . 
                . f f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . f f f f f . . . . . . . . . . 
                f 1 1 1 1 f f f . . . . . . . . 
                f 1 f f 1 1 1 f f . . . . . . . 
                f 1 f f f f f 1 f . . . . . . . 
                f 1 f f f f f 1 f f . . . . . . 
                f 1 f f f f f 1 1 f . . . . . . 
                f 1 f f 1 f f f 1 1 f . . . . . 
                f 1 f f f f f f f 1 f f . . . . 
                f 1 f 1 f f f 1 f 1 1 f f f . . 
                f 1 f 1 f f f f f f 1 1 1 f f . 
                f 1 f 1 1 1 1 1 f f f f 1 1 f f 
                f 1 f f f f f f f f f f f 1 1 f 
                f 1 1 1 f f f f f f f f f 1 f f 
                f f f 1 1 1 1 1 1 1 1 1 1 1 f . 
                . . f f f f f f f f f f f f . . 
                `,img`
                . f f f . . . . . . . . . . . . 
                f f 1 f f . . . . . . . . . . . 
                f 1 f 1 1 f . . . . . . . . . . 
                f 1 f f 1 f . . . . . . . . . . 
                f 1 f f 1 f . . . . . . . . . . 
                f 1 f f 1 1 f . . . . . . . . . 
                f 1 f 1 f 1 f . . . . . . . . . 
                f 1 f f f 1 1 f . . . . . . . . 
                f 1 f f f f 1 f f . . . . . . . 
                f 1 1 f f 1 1 1 f f f . . . . . 
                f 1 1 1 f f f 1 1 1 f f f . . . 
                f 1 f 1 1 1 f f f 1 1 1 1 f . . 
                f 1 f f f f f f f f f f 1 1 f . 
                f 1 1 f f f f f f f f f 1 1 f . 
                f f 1 1 1 1 1 1 1 1 1 1 1 f f . 
                . f f f f f f f f f f f f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . f f f f f . . . . . . . . . . 
                f 1 1 1 1 f f f . . . . . . . . 
                f 1 f f 1 1 1 f f . . . . . . . 
                f 1 f f f f f 1 f . . . . . . . 
                f 1 f f f f f 1 f f . . . . . . 
                f 1 f f f f f 1 1 f . . . . . . 
                f 1 f f 1 f f f 1 1 f . . . . . 
                f 1 f f f f f f f 1 f f . . . . 
                f 1 f 1 f f f 1 f 1 1 f f f . . 
                f 1 f 1 f f f f f f 1 1 1 f f . 
                f 1 f 1 1 1 1 1 f f f f 1 1 f f 
                f 1 f f f f f f f f f f f 1 1 f 
                f 1 1 1 f f f f f f f f f 1 f f 
                f f f 1 1 1 1 1 1 1 1 1 1 1 f . 
                . . f f f f f f f f f f f f . . 
                `],
            66,
            false
            )
            playerStatusBar.value += 5
            timer.after(750, function () {
                thePlayer.vx = 0
                playerInvincibility = 0
                thePlayer.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . f f f 1 1 f . . . 
                    . . . . f f f f 1 1 1 1 1 f . . 
                    . . f f f 1 1 1 1 f f f 1 f . . 
                    . . f 1 1 1 1 f f f f f 1 f f . 
                    . f f 1 f f f f f 1 f f 1 1 f . 
                    . f 1 1 f f 1 f f f f f f 1 f . 
                    . f 1 f f f f f f f f f f 1 1 f 
                    . f 1 1 f f f f f f 1 1 f 1 1 f 
                    . f f 1 f f 1 1 f 1 1 f f 1 f f 
                    . . f 1 1 f f 1 1 f f f 1 1 f . 
                    . . . f 1 1 1 1 1 1 1 1 1 f f . 
                    . . . . f f f f f f f f f f . . 
                    `)
                controller.moveSprite(thePlayer, 100, 0)
            })
            info.changeScoreBy(-50)
        } else {
            thePlayer.say("I need more particles", 500)
        }
    }
})
function gameInitial () {
    game.showLongText("Welcome to Blobby Battles", DialogLayout.Bottom)
    info.setScore(1)
    thePlayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . f f f 1 1 f . . . 
        . . . . f f f f 1 1 1 1 1 f . . 
        . . f f f 1 1 1 1 . . . 1 f . . 
        . . f 1 1 1 1 . . . . . 1 f f . 
        . f f 1 . . . . . 1 . . 1 1 f . 
        . f 1 1 . . 1 . . . . . . 1 f . 
        . f 1 . . . . . . . . . . 1 1 f 
        . f 1 1 . . . . . . 1 1 . 1 1 f 
        . f f 1 . . 1 1 . 1 1 . . 1 f f 
        . . f 1 1 . . 1 1 . . . 1 1 f . 
        . . . f 1 1 1 1 1 1 1 1 1 f f . 
        . . . . f f f f f f f f f f . . 
        `, SpriteKind.Player)
    thePlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . f f f 1 1 f . . . 
        . . . . f f f f 1 1 1 1 1 f . . 
        . . f f f 1 1 1 1 f f f 1 f . . 
        . . f 1 1 1 1 f f f f f 1 f f . 
        . f f 1 f f f f f 1 f f 1 1 f . 
        . f 1 1 f f 1 f f f f f f 1 f . 
        . f 1 f f f f f f f f f f 1 1 f 
        . f 1 1 f f f f f f 1 1 f 1 1 f 
        . f f 1 f f 1 1 f 1 1 f f 1 f f 
        . . f 1 1 f f 1 1 f f f 1 1 f . 
        . . . f 1 1 1 1 1 1 1 1 1 f f . 
        . . . . f f f f f f f f f f . . 
        `)
    playerStatusBar = statusbars.create(20, 4, StatusBarKind.Health)
    playerStatusBar.value = 100
    playerStatusBar.max = 100
    playerStatusBar.setColor(7, 2, 10)
    playerStatusBar.attachToSprite(thePlayer)
    playerStatusBar.positionDirection(CollisionDirection.Bottom)
    controller.moveSprite(thePlayer, 100, 0)
    scene.cameraFollowSprite(thePlayer)
    tutorialStage()
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 40, function (status) {
    if (stageCounter == 3 && bossBattle == 1) {
        bossThree.follow(thePlayer, 100)
        timer.after(500, function () {
            enemyStatusBar.value += 1
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    info.changeScoreBy(100)
    if (stageCounter == 0) {
        tiles.setTileAt(tiles.getTileLocation(41, 12), assets.tile`transparency16`)
    }
    if (stageCounter == 1) {
        tiles.setTileAt(tiles.getTileLocation(91, 28), assets.tile`transparency16`)
    }
    if (stageCounter == 2) {
        tiles.setTileAt(tiles.getTileLocation(88, 5), assets.tile`transparency16`)
    }
    if (stageCounter == 3) {
        tiles.setTileAt(tiles.getTileLocation(39, 15), assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    game.showLongText("You'll have to jump over gaps like these with the \"A\" button!", DialogLayout.Bottom)
    tiles.setTileAt(tiles.getTileLocation(11, 16), assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    if (controller.up.isPressed()) {
        thePlayer.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    timer.after(150, function () {
        stageTwo()
    })
})
function arenaOne () {
    tiles.setTilemap(tilemap`level1`)
    bossOne = sprites.create(img`
        ........................................
        ........................................
        ...............fff......................
        ..............ff2fff....................
        ............fff22222ff..................
        ..........fff2222.222fff................
        .........ff222.2.2.22222ff..............
        ........f22.2.2.2.2.2.2.22f.............
        .......f22.2.2.2.2.2.2.2.22ff...........
        ......ff2.2.2.2.2.2.2.2.2.222f..........
        ......f2.2.2.2.2.2.2.2.2.2.22ff.........
        .....f222.2.2.2.2.2.2.2.2.2.22ff........
        ....f222.2.2.2.2.2.2.2.2.2.2.22ff.......
        ....f22.2.2.2.2.2.2.2.2.2.2.2.22f.......
        ...ff2.2.2.2.2.2.2.2.2.2.2.2.2.22f......
        ...f2.2.2.2.2.2.2.2.2.2.2.2.2.2.2f......
        ..f2.2.2.2.2.2.2.2.2.2.2.2.2.2.222f.....
        .f222.2.2.2.2.2.2.2.2.2.2.2.2.2.22f.....
        .f22.2.2.2.2.2.2...2...2.2.2.2.2.22f....
        .f2.2.2.2.2.2...2.2...2...2.2.2.2.2f....
        .f22.2.2.2.2.2...........2.2.2.2.22f....
        .f2.2.2.2.....2.........2...2.2.2.22f...
        .f22.2.2.2.2.2.2.........2.2.2.2.2.2f...
        .f2.2.2.2.2...2f2.........2.2.2.2.22f...
        .f22.2.2.2.2...2.......2f2...2.2.2.2f...
        .f222.2.2...2.2.2.......2.2.2.2.2.22f...
        ..f2.2.2.2.2.2...2.2.....2.2.2.2.2.2f...
        ..f22.2.2.2.........2.......2.2.2.22f...
        ..f222.2.2.2...2.2fff..2.2.2.2.2.222f...
        ...f222.2.2.2.2fff2.2fff2.2.2.2.2.2f....
        ...f2222.2.2.2.2.2...2..ff.2.2.2.22f....
        ...ff2222.2.2.2.2.2.2.2.2.2.2.2.22ff....
        .....f2222.2.2.2.2.2.2.2.2.2.2.222f.....
        ......f222222.2.2.2.2.2.2.2.22222ff.....
        ......f2222222222222222222222222ff......
        .......f22222222222222222222222ff.......
        ........ff22222222222222222222ff........
        ..........ff2222222222222222ff..........
        ............fff2222222222fff............
        ...............ffffffffff...............
        `, SpriteKind.bossEnemy)
    enemyStatusBar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
    enemyStatusBar.value = 200
    enemyStatusBar.setColor(10, 2, 7)
    enemyStatusBar.attachToSprite(bossOne)
    tiles.placeOnTile(bossOne, tiles.getTileLocation(56, 5))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    timer.after(150, function () {
        stageTwo()
    })
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (gameStart0 == 1) {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            info.changeScoreBy(1)
        }
    }
})
let rightEnemy = 0
let leftEnemy = 0
let jumpEnemy = 0
let wallJump = 0
let bossThree: Sprite = null
let bossOne: Sprite = null
let bossBattle = 0
let bossTwo: Sprite = null
let jumpCounter = 0
let stageCounter = 0
let playerStatusBar: StatusBarSprite = null
let enemyStatusBar: StatusBarSprite = null
let playerInvincibility = 0
let thePlayer: Sprite = null
let gameStart0 = 0
gameStart0 = 0
let titleLogo1 = sprites.create(img`
    ...........ffff.................
    ffff......fffffff...............
    f11f....fff111111fff............
    ffff...ff11111111111f...........
    ..ff..ff111ffffff1111ff.........
    .....f111fff1ff1ffff11fff.......
    ....f111ffffffffff1fff11ff......
    ....f11ffffffffffffff1f11ff.....
    ...f11fffffffffffff1ff1f111f....
    ...f1fffffffffffffffffff1111f...
    ..f11ffffffffff11fffffffff11ff..
    ..f1ffffff11fff11fffffff1ff11f..
    .fffffffff11fff111fffffffff11f..
    .f1fffffff11fff111fffffffff111f.
    .f1fffffff111ff111fffffffff111f.
    f1fffffffff11fff11fffffffff111f.
    f1fffffffff11ffffffffffffff111f.
    f1fffffffffffffffffffffffff111f.
    f1fffffffffffffffffffffffff111f.
    f1ffffffff1fffffffffffffff111f..
    f1fffffff1f11ffffffffffff1111f..
    f1ffffff11ff111111fffffff111f...
    .f1fffff1fffff11111fffff111ff...
    .f1ffffff1fffff11ffffff111ff....
    .f1ffffff11ffff11ffff11111f.....
    .f1fffffff111111ffff1111ff......
    c.f11fffffffffffff11111ff.......
    .c.ff111ffffff1111111fff........
    c.c.fff111111111111fff..........
    .c.c..fffffffffffff.............
    ........c...c...c...............
    c.c..c.....c..c.c...............
    `, SpriteKind.Player)
let startLogo = sprites.create(img`
    ....fffffffffffffffffff........fffff....ffffffff..fffffffffff...
    ...ff11111111ff1111111ffffff.fff111fff.ff111111ff.f1111111111fff
    ..ff111111111ff111111111111fff1111111fff111111111ff111111111111f
    ..f11111fff11fff11111111111ff111111111ff111111111ff111111111111f
    ..f11111f.ffff.fffff111111fff1111f1111ff11ffff111ffff111111111ff
    ..f11111ff.........f111ffff.f111fff111ff11f..f111f..ffff111fffff
    ..f111111ff........f11ff....f111f.f111ff11f.ff11ff.....f111f....
    ..ff111111ff.......f11f.....f111f.f111ff11fff11ff......f111f....
    ...fff11111f.......f11f.....f111f.f111ff111111ff.......f111f....
    .....ff1111f.......f11f.....f111fff111ff111111f........f111f....
    ......f1111f......f111f.....f111111111ff111111fff......f111f....
    .ffff.f1111f......f111f.....f111fff111ff111ff111ff.....f111f....
    ff11fff1111f......f111f.....f111f.f111ff111fff111f.....f111f....
    f111111111ff.....ff111f.....f111f.f111ff111f.f111f.....f111f....
    ff11111111f......f111ff.....f111f.f111ffff1f.ff11f.....f111f....
    .ffffffffff......fffff......fffff.fffff.ffff..ffff.....fffff....
    `, SpriteKind.Player)
animation.runImageAnimation(
titleLogo1,
assets.animation`myAnim`,
100,
true
)
animation.runImageAnimation(
startLogo,
[img`
    ....fffffffffffffffffff........fffff....ffffffff..fffffffffff...
    ...ff11111111ff1111111ffffff.fff111fff.ff111111ff.f1111111111fff
    ..ff111111111ff111111111111fff1111111fff111111111ff111111111111f
    ..f11111fff11fff11111111111ff111111111ff111111111ff111111111111f
    ..f11111f.ffff.fffff111111fff1111f1111ff11ffff111ffff111111111ff
    ..f11111ff.........f111ffff.f111fff111ff11f..f111f..ffff111fffff
    ..f111111ff........f11ff....f111f.f111ff11f.ff11ff.....f111f....
    ..ff111111ff.......f11f.....f111f.f111ff11fff11ff......f111f....
    ...fff11111f.......f11f.....f111f.f111ff111111ff.......f111f....
    .....ff1111f.......f11f.....f111fff111ff111111f........f111f....
    ......f1111f......f111f.....f111111111ff111111fff......f111f....
    .ffff.f1111f......f111f.....f111fff111ff111ff111ff.....f111f....
    ff11fff1111f......f111f.....f111f.f111ff111fff111f.....f111f....
    f111111111ff.....ff111f.....f111f.f111ff111f.f111f.....f111f....
    ff11111111f......f111ff.....f111f.f111ffff1f.ff11f.....f111f....
    .ffffffffff......fffff......fffff.fffff.ffff..ffff.....fffff....
    `,img`
    ....eefffffffffffffffff........fffff....ffffffff..fffffffffff...
    ...ee51111111ff1111111ffffff.fff111fff.ff111111ff.f1111111111fff
    ..ee551111111ff111111111111fff1111111fff111111111ff111111111111f
    ..e55111fff11fff11111111111ff111111111ff111111111ff111111111111f
    ..e55111f.ffff.fffff111111fff1111f1111ff11ffff111ffff111111111ff
    ..e55111ff.........f111ffff.f111fff111ff11f..f111f..ffff111fffff
    ..e511111ff........f11ff....f111f.f111ff11f.ff11ff.....f111f....
    ..ee111111ff.......f11f.....f111f.f111ff11fff11ff......f111f....
    ...eff11111f.......f11f.....f111f.f111ff111111ff.......f111f....
    .....ff1111f.......f11f.....f111fff111ff111111f........f111f....
    ......f1111f......f111f.....f111111111ff111111fff......f111f....
    .eeff.f1111f......f111f.....f111fff111ff111ff111ff.....f111f....
    ee51fff1111f......f111f.....f111f.f111ff111fff111f.....f111f....
    e551111111ff.....ff111f.....f111f.f111ff111f.f111f.....f111f....
    ee51111111f......f111ff.....f111f.f111ffff1f.ff11f.....f111f....
    .eeffffffff......fffff......fffff.fffff.ffff..ffff.....fffff....
    `,img`
    ....eeeeeefffffffffffff........fffff....ffffffff..fffffffffff...
    ...ee55551111ff1111111ffffff.fff111fff.ff111111ff.f1111111111fff
    ..ee555551111ff111111111111fff1111111fff111111111ff111111111111f
    ..e55555fff11fff11111111111ff111111111ff111111111ff111111111111f
    ..e55551f.ffff.fffff111111fff1111f1111ff11ffff111ffff111111111ff
    ..e55551ff.........f111ffff.f111fff111ff11f..f111f..ffff111fffff
    ..e555511ff........f11ff....f111f.f111ff11f.ff11ff.....f111f....
    ..ee555111ff.......f11f.....f111f.f111ff11fff11ff......f111f....
    ...eee55111f.......f11f.....f111f.f111ff111111ff.......f111f....
    .....ee5111f.......f11f.....f111fff111ff111111f........f111f....
    ......e5111f......f111f.....f111111111ff111111fff......f111f....
    .eeee.e5111f......f111f.....f111fff111ff111ff111ff.....f111f....
    ee55eee5111f......f111f.....f111f.f111ff111fff111f.....f111f....
    e555555511ff.....ff111f.....f111f.f111ff111f.f111f.....f111f....
    ee55555111f......f111ff.....f111f.f111ffff1f.ff11f.....f111f....
    .eeeeeeffff......fffff......fffff.fffff.ffff..ffff.....fffff....
    `,img`
    ....fffffffeeeeeeeeeeef........fffff....ffffffff..fffffffffff...
    ...ff11111555ee5555551ffffff.fff111fff.ff111111ff.f1111111111fff
    ..ff111111555ee555551111111fff1111111fff111111111ff111111111111f
    ..f11111ffe55eee55551111111ff111111111ff111111111ff111111111111f
    ..f11111f.eeee.eeeee111111fff1111f1111ff11ffff111ffff111111111ff
    ..f11111ff.........e111ffff.f111fff111ff11f..f111f..ffff111fffff
    ..f111111fe........e11ff....f111f.f111ff11f.ff11ff.....f111f....
    ..ff111111ee.......e11f.....f111f.f111ff11fff11ff......f111f....
    ...fff11115e.......e11f.....f111f.f111ff111111ff.......f111f....
    .....ff1115e.......e11f.....f111fff111ff111111f........f111f....
    ......f1115e......e511f.....f111111111ff111111fff......f111f....
    .ffff.f1115e......e511f.....f111fff111ff111ff111ff.....f111f....
    ff11fff1155e......e511f.....f111f.f111ff111fff111f.....f111f....
    f111111115ee.....ee511f.....f111f.f111ff111f.f111f.....f111f....
    ff11111115e......e551ff.....f111f.f111ffff1f.ff11f.....f111f....
    .ffffffffee......eeeff......fffff.fffff.ffff..ffff.....fffff....
    `],
50,
true
)
titleLogo1.setPosition(28, 32)
startLogo.setPosition(scene.screenWidth() / 2, 90)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbcc555555bb555555cccccccccc555555bb555555bbccccccbb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbb555bb55bb555555ccccccc555555555555555bbccccccbb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbcc555555bb555555ccccccccc5555555b5555555bbccccccbb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbb555bb55bb555555cccccc5c55555555555555bbccccccbb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbcc555555bb555555cccccccc55555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbb555bb55bb555555ccccccc555555555555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbcc555555bb555555cccccccc55555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbb555bb55bb555555cccccc5c55555555555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbcc555555bb555555cccccccc55555555bb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbb555bb55bb555555cccccccc55555555555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cbbbbcbbbbbcbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    ccc5555ccc555555555cc555b555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccc55ccc555555555cccc5bb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55b55b55b55b55b55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    ccc5555ccc555555555cc555b555555bb555555bb555555bbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccc55ccc555555555cccc5bb555555bb555555bb555555bbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    ccc5555ccc555555555cc555b555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55bccbccbccbccb55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55bccbccbccbccb55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55bccbccbccbccb55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55bccb55bccb55bccb5bb555555bb555555bb555555bbccccccbb555555bbccccccbb55bb55bccbccbccbccb55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55bccb55bccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccbccbccbccb55b55bcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55bccb55bccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55bccb55bccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55bccb55bccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55b55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55b55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55b55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccbccbccb55b55bccb55bcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55b55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccbccbccb55b55bccb55bcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55b55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccbccbccb55b55bccb55bcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccbccbccb55b55bccb55bcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccbccbccb55b55bccb55bcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55bccbccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55bccbccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55bccbccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccb55b55bccbccbccbcbbccccccbbccccccbb555555bbccccccbb555555bbccccccbb55bb55bccb55b55b55bccbccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccb55b55bccbccbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55b55b55bccbccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccb55b55bccbccbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccb55b55bccbccbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccb55b55bccbccbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55b55bccb55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55bccb55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55b55bccb55b55bccb5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55bccb55bccbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55b55bccb55b55bccb5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55b55bccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55b55bccb55b55bccb5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55b55bccb55b55bccb5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bccb55b55bccb55b55bccb5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccbccb55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccbccb55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bbccccccbb55bb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccbccb55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55b55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    b55bccbccb55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b55bccbccb55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccbccb55b55b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccbccb55b55b
    bccb55bccb55bccbccb55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55b55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccbccb55b55b
    bccb55bccb55bccbccb55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55b55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccbccb55b55b
    bccb55bccb55bccbccb55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55b55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccbccb55b55b
    bccb55bccb55bccbccb55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bccb55bccb55bccbccb55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55bccb55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55bccb
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55bccb55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55bccb
    bccbccb55bccb55b55b55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55bccb55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55bccb
    bccbccb55bccb55b55b55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55bccb55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55bccb
    bccbccb55bccb55b55b55bcbb555555bb555555bbccccccbbccccccbb555555bbccccccbb55bb55bccb55b55b55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55b55bccb
    bccbccb55bccb55b55b55bcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bccbccb55bccb55b55b55bcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccbccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccbccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55bccb55b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccbccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55bccb55b
    b55bccbccbccbccb55b55bcbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bb55b55bccbccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55bccb55b
    b55bccbccbccbccb55b55bcbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bb55b55bccbccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55bccb55b
    b55bccbccbccbccb55b55bcbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55bccb55b55bccb55b
    b55bccbccbccbccb55b55bcbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b55bccbccbccbccb55b55bcbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbccb55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbccb55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55bccb55bccb55b55b
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbccb55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55bccb55bccb55b55b
    bccb55bccbccbccb55bccb5bbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbccb55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55bccb55bccb55b55b
    bccb55bccbccbccb55bccb5bbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbccb55bccbccbccb55bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55bccb55bccb55b55b
    bccb55bccbccbccb55bccb5bbccccccbb555555bbccccccbb555555bbccccccbbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55bccb55bccb55b55b
    bccb55bccbccbccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bccb55bccbccbccb55bccb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55bccb55b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55bccb55bccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55bccb55b
    b55bccbccb55bccb55bccb5bb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bb55bccb55bccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55bccb55b
    b55bccbccb55bccb55bccb5bb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bb55bccb55bccb55bccb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55bccb55b
    b55bccbccb55bccb55bccb5bb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55b55b55bccb55bccb55b
    b55bccbccb55bccb55bccb5bb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b55bccbccb55bccb55bccb5bb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb555555bbccccccbbccccccbbccccccbb555555bbccccccbb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccb55b55b55b55b55b55b
    `)
game.onUpdate(function () {
    if (gameStart0 == 1) {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            jumpCounter = 0
            wallJump = 0
        }
        if (wallJump == 1) {
            controller.moveSprite(thePlayer, 0, 0)
            pause(200)
            wallJump = 0
        } else {
            controller.moveSprite(thePlayer, 100, 0)
        }
        console.log(playerInvincibility)
    }
})
forever(function () {
    if (gameStart0 == 1) {
        thePlayer.ay = 200
        if (thePlayer.tileKindAt(TileDirection.Left, assets.tile`myTile29`) || thePlayer.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
            thePlayer.ay = 0
            thePlayer.vy = 40
            if (controller.A.isPressed()) {
                thePlayer.vy = -200
                thePlayer.vx = 100
                wallJump = 1
            }
        }
        if (thePlayer.tileKindAt(TileDirection.Right, assets.tile`myTile26`) || thePlayer.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
            thePlayer.ay = 0
            thePlayer.vy = 40
            if (controller.A.isPressed()) {
                thePlayer.vy = -200
                thePlayer.vx = -100
                wallJump = 1
            }
        }
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            wallJump = 0
        }
        if (true) {
        	
        }
    }
})
game.onUpdateInterval(200, function () {
    if (gameStart0 == 1) {
        if (bossBattle == 1) {
            timer.after(2000, function () {
                bossOne.ay = 300
                jumpEnemy = randint(0, 20)
                leftEnemy = 0
                rightEnemy = randint(0, 10)
                bossOne.vx = randint(-100, 100)
                if (jumpEnemy >= 19) {
                    bossOne.vy = -100
                }
            })
        }
        if (info.score() <= 0) {
            info.setScore(0)
            timer.after(100, function () {
                playerStatusBar.value += -10
            })
        }
    }
})
