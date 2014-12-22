/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function(){
    'use strict';
    
    function FPSCounter( game ){
        this.game = game;
        this.preloadProgressText = null;
    }
    
    FPSCounter.prototype = {
        preload: function(){
            this.preloaderProgressText = this.game.add.text( 10, 10,"", {
                font: "bold 10px Arial",
                fill: "#FFFFFF",
                align:"left"
            });
            this.preloaderProgressText.anchor.set(0,0);
            
            this.game.time.advancedTiming = true;
            
            this.create();
        },
        create: function(){
            console.log( 'fpscounter');
        },
        update: function(){
            this.preloaderProgressText.text = "FPS: " + this.game.time.fps;
            this.preloaderProgressText.text += "\nRefresh Rate: " + this.game.time.elapsedMS;
            this.preloaderProgressText.text += "\nEvents: " + this.game.time.events.events.length;
        }
    };
    
    return FPSCounter;
});
