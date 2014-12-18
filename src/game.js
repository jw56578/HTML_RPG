/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'core/BasicGame'
], function( Phaser, BasicGame ){
    'use strict';
    
    function Game(){ }
    
    Game.prototype = {
        constructor : Game,
        start: function(screenWidth, screenHeight){            
            this.game = new Phaser.Game(screenWidth,screenHeight, Phaser.AUTO, '');
            
            this.game.state.add('Boot', BasicGame.Boot );
            this.game.state.add('Preloader', BasicGame.Preloader );
            
            this.game.state.start('Boot');
        }
    };
    
    return Game;
});