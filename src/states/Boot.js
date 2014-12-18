/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'phaser'
], function () {
    function Boot( game ){
        this.game = game;
    }
    
    Boot.prototype = {
        preload: function(){
            this.game.preloader.setConfig( 'config/preloader.json' );
            this.game.load.image( 'preloaderBar' , 'assets/preloader/preloader_bar.jpg');
        },
        create: function(){
            this.game.state.start('Preload');
        }
    };
    
    return Boot;
});