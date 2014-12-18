/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    'use strict';
    
    require.config({
        baseUrl: '/src/',        
        paths:{
            jquery: "/js/vendor/jquery/dist/jquery",
            phaser: "/js/vendor/phaser/build/phaser",
            json:'/js/vendor/json2/json2'
        },
        shim:{
            'phaser':{
                exports:'Phaser'
            },
            'json':{
                exports:'JSON'
            }
        }
    });

    require([ 'jquery', 'phaser', 'game', 'json' ], function( $, Phaser, Game, JSON ){  
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        
        var game = new Game();
        game.start(screenWidth,screenHeight);
    });

}());

