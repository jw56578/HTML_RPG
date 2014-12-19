/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
   'phaser' 
], function (){
    function Preload( game ){
        this.game = game;
    }
    
    Preload.prototype = {
        preload:function(){
            this.preloaderBar = this.add.sprite( this.world.centerX, this.world.centerY, 'preloaderBar' );
            this.preloaderBar.anchor.setTo(0.0,0.5);
            this.preloaderBar.x = this.world.centerX - ( this.preloaderBar.width / 2 );
            
            this.preloaderProgressText = this.add.text( this.world.centerX, this.world.centerY,"0%", {
                font: "bold 10px Arial",
                fill: "#FFFFFF",
                align:"left"
            });
            this.preloaderProgressText.anchor.set(0.5,0.5);
            
            this.preloaderInfoText = this.add.text( this.world.centerX, this.world.centerY + 20,"", {
                font: "bold 10px Arial",
                fill: "#FFFFFF",
                align:"left"
            });
            this.preloaderInfoText.anchor.set(0.5,0.5);
            
            this.game.preloader.setProgressText( this.preloaderProgressText );
            this.game.preloader.setInfoText( this.preloaderInfoText );
            this.game.load.setPreloadSprite( this.preloaderBar );
            
            this.game.preloader.loadGameConfig();
            this.game.preloader.loadAssets();
        },
        create:function(){
            var self = this;
            setTimeout( function(){
                self.game.state.start('GameState');
            },300);
        }
    };
    
    return Preload;
});