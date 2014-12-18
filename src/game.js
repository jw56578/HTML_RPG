/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'states/Boot',
    'states/Preload',
    'states/World',
    'core/Preloader'
], function( Phaser, Boot, Preload, World, Preloader ){
    'use strict';
    
    function Game(){ }
    
    Game.prototype = {
        constructor : Game,
        start: function(screenWidth, screenHeight){            
            this.game = new Phaser.Game(screenWidth,screenHeight, Phaser.AUTO, '');
            
            this.game.preloader = new Preloader( this.game );
            
            this.game.state.add('Boot', Boot );
            this.game.state.add('Preload', Preload );
            this.game.state.add('World', World );
            
            this.game.state.start('Boot');
        }
    };
    
    return Game;
});