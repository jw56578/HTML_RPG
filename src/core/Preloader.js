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
    };
    
    Preloader.prototype = {
        setConfig: function( file ){
            this.game.load.text( 'preloader_config', file );
        },
        getConfig: function(){
            if( this.game.cache.checkTextKey( 'preloader_config') === false ) return;
            return JSON.parse( this.game.cache.getText( 'preloader_config') );
        },
        loadAssets: function(){
            this.game.load.onFileComplete.add(this.onFileComplete, this );
            this.game.load.onLoadComplete.add(this.onLoadComplete, this );
            this.game.load.onFileStart.add( this.onFileStart, this );
            
            var data = this.getConfig();
            if( !data ) return;
            
            var game = this.game;
            var baseUrl = data.baseUrl;
           
            $.each( data.assets.images, function(k,v){
                game.load.image( v.id, baseUrl + v.image );
            });
        },
        setInfoText: function( text ){
            this.textInfo = text;
        },
        setProgressText: function( text ){
            this.textProgress = text;
        },
        onFileStart: function( progress, id, file ) {
            if( this.textInfo !== null )
                this.textInfo.setText( file );
        },
        onFileComplete: function(){
            if( this.textProgress !== null )
                this.textProgress.setText( this.game.load.progress +"%" );
        },
        onLoadComplete: function(){
            if( this.textProgress !== null )
                this.textProgress.setText( this.game.load.progress +"%" );
            
            if( this.textInfo !== null )
                this.textInfo.setText( "" );
            
            this.game.load.removeAll();
        }
    };
    
    return Preloader;
});