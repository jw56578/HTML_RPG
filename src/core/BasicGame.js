/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function(){
    'use strict';
    
    function BasicGame( game ){};
    BasicGame.prototype = {};
    
    BasicGame.Boot = function( game ){};
    BasicGame.Boot.prototype = {
        preload: function(){
            console.log( 'boot preloaded' );
        },
        create: function(){
            console.log( 'boot created' );
            
            this.state.start( 'Preloader' );
        }
    };
    
    BasicGame.Preloader = function ( game ){};
    BasicGame.Preloader.prototype = {
        preload: function(){
            console.log('preloader preloaded');
        },
        create: function(){
            console.log('preloader created');
        }
    };
    
    return BasicGame;
});