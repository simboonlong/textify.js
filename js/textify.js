/*!
textify.js - http://simboonlong.com
Licensed under the MIT license

Copyright (c) 2016 Sim Boon Long

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


function SplitText( el ) {
    this.el = el;
    this.str = el.html();
}

SplitText.prototype = {
    animate : function( options ) {
        var letter = this.el.find('.letter');
        TweenMax.staggerFrom( letter, options.duration, {
            delay: options.delay,
            x: options.x,
            y: options.y,
            rotationX: options.rotationX,
            rotationY: options.rotationY,
            rotationZ: options.rotationZ,
            opacity: options.opacity,
            ease: options.easeType
        }, options.staggerDuration );
    },
    letterify : function( word ) {
        for (var i = word.length - 1; i >= 0; i--) {
            var el = $(word[i]),
                str = el.html();
                letterArray = str.split('');

            el.html('');
            for (var k = letterArray.length - 1; k >= 0; k--) {
                var letter = '<div class="letter">'+letterArray[k]+'</div> ';
                el.prepend( letter );
            }
        }
    },
    wordify : function( str ) {
        var textArray = str.split(' ');
        this.el.html('');
        for (var i = textArray.length - 1; i >= 0; i--) {
            var word = '<div class="word">'+textArray[i]+'</div>',
                wordSpacing = '<div class="word-spacing">&nbsp;</div>';

            this.el.prepend( word );
            if ( i !== 0 ) {
                this.el.prepend( wordSpacing );
            }
        }
    },
    trim : function( str, chars ) {
        var pattern = chars ? new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'g') : /^\s+|\s+$/g;
        return str.replace(pattern, '');
    },
    init : function() {
        this.str = this.trim( this.str );
        this.wordify( this.str );
        this.letterify( this.el.find('.word') );
        return this;
    }
};





