/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
   'phaser' 
], function( Phaser ){
    
    function Cursor(game){
        this.game = game;
    }
    
    Cursor.prototype = {
        create: function(){
            this.sprite = this.game.add.image(this.game.input.mousePointer.x, this.game.input.mousePointer.y,"cursor");
            this.sprite.scale.set(2);
            this.sprite.smoothed = false;
        },
        update: function(){
            this.sprite.x = this.game.camera.x + this.game.input.mousePointer.x;
            this.sprite.y = this.game.camera.y + this.game.input.mousePointer.y;
        },
        changeCursor: function( state ){
            switch( state ){
                case 'normal':
                    this.sprite.loadTexture('cursor');
                    break;
                
                case 'hover':
                    this.sprite.loadTexture('weapon_01');
                    break;
                    
                default:
                    this.sprite.loadTexture('cursor');
            }
        }
    };
    
    return Cursor;
});
