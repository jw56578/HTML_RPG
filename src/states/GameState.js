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
            this.map = this.game.add.tilemap("world");
            this.map.addTilesetImage("Grasslands_A");
            this.map.addTilesetImage("Grasslands_B");
            
            this.layer = this.map.createLayer("Ground");
            this.layer.scale.set(2);
            this.layer.smoothed = false;
            this.layer.resizeWorld();
            
            this.game.camera.x = 620;
            this.game.camera.y = 620;
            this.game.camera.zoom = 2;

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

