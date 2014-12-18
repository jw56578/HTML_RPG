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
            var data = this.getConfig();
            if( !data ) return;
            
            var game = this.game;
            var baseUrl = data.baseUrl;
           
            $.each( data.assets.images, function(k,v){
                game.load.image( v.id, baseUrl + v.image );
            });
        }
    };
    
    return Preloader;
});