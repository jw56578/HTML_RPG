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
            this.WorldLayer = this.game.add.group();
            this.WorldLayer.name = "World Layer";
            this.WorldLayer.z = 0;
            
            this.UILayer = this.game.add.group();
            this.UILayer.name = "UI Layer";
            this.UILayer.z = 5;
            
            this.player = new Player( this.game, this.WorldLayer );
            this.cursor = new Cursor( this.game, this.UILayer );
        },
        create:function(){ 
            this.createTilemap();
            
            this.cursor.create();
            this.player.create();
            
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
        },
        createTilemap: function(){
            this.map = this.game.add.tilemap("world");
            this.map.addTilesetImage("Grasslands_A");
            
            this.layer = this.map.createLayer("Tile Layer 1");
            this.layer.smoothed = false;
            
            this.WorldLayer.add( this.layer );
        }
    };
    
    return GameState;
});

