/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'json',
    'core/preloader'
], function(Phaser, JSON, Preloader){
    'use strict';
    
    var preloader;
    
    function BasicGame( game ){};
    BasicGame.prototype = {};
    
    BasicGame.Boot = function( game ){ 
        this.game = game;
    };
    BasicGame.Boot.prototype = {
        preload: function(){
            this.load.image( 'preloaderBar' , 'assets/preloader/preloader_bar.jpg');
            
            preloader = new Preloader( this.game );
            preloader.setConfig( 'src/config/preloader.json' );
        },
        create: function(){
            this.state.start( 'Preloader' );
        }
    };
    
    BasicGame.Preloader = function ( game ){
        this.preloaderBar = null;
        this.game = game;
    };
    BasicGame.Preloader.prototype = {
        preload: function(){
            this.preloaderBar = this.add.sprite( this.world.centerX, this.world.centerY, 'preloaderBar' );
            this.preloaderBar.anchor.setTo(0.0,0.5);
            this.preloaderBar.scale.setTo(1,1);
            this.preloaderBar.x = this.world.centerX - ( this.preloaderBar.width / 2 );

            this.load.setPreloadSprite( this.preloaderBar );        
            
            preloader.loadAssets();
        },
        create: function(){ 
        }
    };
    
    return BasicGame;
});