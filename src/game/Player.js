/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function(  Phaser ){
    'use strict';
    
    function Player( game ){
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.sprite = null;
    }
    
    Player.prototype = {
        create: function(){
            this.sprite = this.game.add.sprite(this.x, this.y, 'logo');
        },
        update: function(){
            this.sprite.x = this.x;
            this.sprite.y = this.y;

            this.x = ( this.x < this.game.world.bounds.width ) ? this.x + 2 : 0;
        }
    };
    
    return Player;
});