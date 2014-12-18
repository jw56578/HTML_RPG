/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'json'
], function(){
    'use strict';
    
    function BasicGame( game ){};
    BasicGame.prototype = {};
    
    BasicGame.Boot = function( game ){ };
    BasicGame.Boot.prototype = {
        preload: function(){
            this.load.image( 'preloaderBar' , 'assets/preloader/preloader_bar.jpg');
            this.load.text( 'data', 'src/config/preloader.json' );
        },
        create: function(){
            console.log( 'boot created' );
            
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
            
            var self = this;
            var data = JSON.parse( this.cache.getText( "data" ) );
            var baseUrl = data.baseUrl;
            
            $.each( data.assets.images, function( k,v ){
                console.log( v );
                self.load.image( v.id, baseUrl + v.image );
            });
            
            //this.load.image('bar', 'assets/preloader/preloader_bar.jpg');
            //this.load.image('logo', 'assets/demo/phaser.png');
            
            console.log('preloader preloaded');
        },
        create: function(){
            
            console.log('preloader created');
        }
    };
    
    return BasicGame;
});