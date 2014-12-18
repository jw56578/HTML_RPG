/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function (Phaser){
    function World( game ){ this.game = game; }
    
    World.prototype = {
        preload:function(){
            
        },
        create:function(){
            console.log( 'World' );
        }
    };
    
    return World;
});

