/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'core/FPSCounter'
], function ( Phaser, FPSCounter ){
    'use strict';
    
    function GameState( game ){ 
        this.fpsCounter = null;
    }
    
    GameState.prototype = {
        preload:function(){
            
        },
        create:function(){               
            if( this.game.gameConfig.env ){
                console.log( "Development Mode" );
                this.fpsCounter = new FPSCounter( this.game );
                this.fpsCounter.preload();
            }
        },
        update: function(){
            if( this.fpsCounter !== null )
                this.fpsCounter.update();
        }
    };
    
    return GameState;
});

