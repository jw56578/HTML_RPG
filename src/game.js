/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function( Phaser ){
    'use strict';
    
    function Game(){ }
    
    Game.prototype = {
        constructor : Game,
        start: function(){
            this.game = new Phaser.Game(800,600, Phaser.AUTO, '',{
                preload: this.preload,
                create: this.create
            });
        },
        preload: function(){
            this.game.load.image('logo','assets/demo/phaser.png');
        },
        create:function(){
            var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
            logo.anchor.setTo(0.5,0.5);
        }
    };
    
    return Game;
});