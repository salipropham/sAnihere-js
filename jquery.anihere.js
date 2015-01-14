/*!
sAnihere.css - https://github.com/salipropham/sAnihere-js
MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2014 SaliproPham
*/
!(function(){
        "use strict";
        function AniHere( elem, options) {
            var me = this;
            var defaults = {
                useImageloaded: false,
                useDetector: true,
                offset: '90%'    
            }
            
            this.options = $.extend( {}, defaults, options );
            
            //check whether browser is support css animation or not 
            this.options.useDetector && _detector();
            
            //use imagesLoaded plugin 
            if(this.options.useImageloaded){
                $().imagesLoaded && $("body").imagesLoaded(function () {
                    _init(me);
                });
            }else{
                _init(me);    
            };
             
            return this;   
        }

        function _detector(){
            var animation = false,
            animationstring = 'animation',
            keyframeprefix = '',
            domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
            pfx  = '',
            elm = document.getElementsByTagName('body')[0];

            if( elm.style.animationName !== undefined ) { animation = true; }    
            if( animation === false ) {
                for( var i = 0; i < domPrefixes.length; i++ ) {
                    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                        pfx = domPrefixes[ i ];
                        animationstring = pfx + 'Animation';
                        keyframeprefix = '-' + pfx.toLowerCase() + '-';
                        animation = true;
                        break;
                    }
                }
            }
            if(animation){ document.documentElement.className=document.documentElement.className+" cssanimations"}    
        }
        
        function _init(obj){
            $().waypoint && $('.anihere').waypoint(function(direction) {
                var aniName = $(this.element).data('anihere'); 
                $(this.element).toggleClass(aniName + ' animated');
                },{offset: obj.options.offset}
            );
        }

        window.jQuery && (jQuery.fn.anihere = function(options) {return new AniHere( this, options)});


    })();
