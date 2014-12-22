/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'core/Cursor',
    'core/FPSCounter',
    'game/Player'
], function ( Phaser, Cursor, FPSCounter, Player ){
    'use strict';
    
    function GameState( game ){ 
        this.fpsCounter = null;
    }
    
    GameState.prototype = {
        preload:function(){
            this.player = new Player( this.game );
            this.cursor = new Cursor( this.game );
        },
        create:function(){   
            this.player.create();         
            this.cursor.create();
            
            if( this.game.gameConfig.env ){
                this.fpsCounter = new FPSCounter( this.game );
                this.fpsCounter.preload();
            }
        },
        update: function(){
            this.cursor.update();
            
            this.player.update();
            
            if( this.fpsCounter !== null )
                this.fpsCounter.update();
        }
    };
    
    return GameState;
});

