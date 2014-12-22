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
        this.x = 632;
        this.y = 354;
        this.sprite = null;
    }
    
    Player.prototype = {
        create: function(){
            this.sprite = this.game.add.sprite(this.x, this.y,'warrior');
            this.sprite.anchor.set(0.5,0.5);
        },
        update: function(){
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
    };
    
    return Player;
});