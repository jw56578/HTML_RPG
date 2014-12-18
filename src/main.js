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
            phaser: "/js/vendor/phaser/build/phaser"
        },
        shim:{
            'phaser':{
                exports:'Phaser'
            }
        }
    });

    require([ 'phaser', 'game' ], function( Phaser, Game ){    
        var game = new Game();
        game.start();
    });

}());

