/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser',
    'json'
], function( Phaser, JSON){
    'use strict';
    
    function Preloader( game ){
        this.game = game;
        this.textInfo = null;
        this.textProgress = null;
        this.gotError = false;
    };
    
    Preloader.prototype = {
        setConfig: function( file ){
            this.game.load.onLoadComplete.add( this.onConfigLoaded, this );
            this.game.load.text( 'preloader_config', file );
        },
        setGameConfig: function( file ){
            this.game.load.text( 'game_config', file );
        },
        getConfig: function(){
            if( this.game.cache.checkTextKey( 'preloader_config' ) === false ) return;
            return JSON.parse( this.game.cache.getText( 'preloader_config' ) );
        },
        loadGameConfig: function(){
            if( this.game.cache.checkTextKey('game_config') === false) return;
            var gameConfig = JSON.parse( this.game.cache.getText('game_config' ) );
            this.game.gameConfig = gameConfig;
            
            console.log( this.game.gameConfig );
        },
        loadAssets: function(){
            this.game.load.onFileComplete.add(this.onFileComplete, this );
            this.game.load.onLoadComplete.add(this.onLoadComplete, this );
            this.game.load.onFileStart.add( this.onFileStart, this );
            this.game.load.onFileError.add( this.onFileError, this );
            
            var data = this.getConfig();
            if( !data ) return;
            
            var game = this.game;
            var baseUrl = data.baseUrl;
            var images = data.assets.images;
            var sounds = data.assets.sounds;
           
            $.each( images, function(k,v){
                game.load.image( v.id, baseUrl + v.image );
            });
            
            $.each( sounds, function(k,v){
                game.load.audio( v.id, [ baseUrl+ v.mp3, baseUrl + v.ogg ] );
            });
        },
        setInfoText: function( text ){
            this.textInfo = text;
        },
        setProgressText: function( text ){
            this.textProgress = text;
        },
        onFileStart: function( progress, id, file ) {
            if( this.gotError === false ){
                if( this.textInfo !== null )
                    this.textInfo.setText( file );
            }
        },
        onFileComplete: function(){
            if( this.gotError === false ){
                if( this.textProgress !== null )
                    this.textProgress.setText( this.game.load.progress +"%" );
            }
        },
        onLoadComplete: function(){
            if( this.gotError === false ){
                if( this.textProgress !== null )
                    this.textProgress.setText( this.game.load.progress +"%" );

                if( this.textInfo !== null )
                    this.textInfo.setText( "" );
            }
            
            this.game.load.removeAll();
        },
        onFileError: function(e, obj){
            this.gotError = true;
            
            if( this.textProgress !== null ){
                this.textProgress.setText("Error");
                this.textProgress.fill = "#FF0000";
            }
            
            if( this.textInfo !== null ){
                this.textInfo.setText( "Error loading file: " + obj.url ); 
                this.textInfo.clearColors();
                this.textInfo.fill = "#FF0000";
            }
            
            this.game.load.removeAll();
        },
        onConfigLoaded: function(){
            this.game.load.removeAll();
        }
    };
    
    return Preloader;
});