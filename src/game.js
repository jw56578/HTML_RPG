/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
], function( Phaser ){
    'use strict';
    
    function Game(){ }
    
    Game.prototype = {
        constructor : Game,
        start: function(screenWidth, screenHeight){            
            this.game = new Phaser.Game(screenWidth,screenHeight, Phaser.AUTO, '',{
                preload: this.preload,
                create: this.create
            });
        },
        preload: function(){
            this.game.load.image('logo','assets/demo/phaser.png');
        },
        create:function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            
            var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
            logo.anchor.setTo(0.5,0.5);
        }
    };
    
    return Game;
});