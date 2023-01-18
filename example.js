
const Calculate = (function(initN) {
    
    let Calculate = function(initN)
    {        

        this._CALLBACKS = {
            add: null,
            show: null,
        };
        this.num = initN;
    }

    let display = function(x) {
        console.log ( x );
    }
    
    Calculate.prototype = 
    {        
        _init: function () {

            if ( this._CALLBACKS.add != null) {
                this._CALLBACKS.add();
            }

            if ( this._CALLBACKS.show != null) {
                this._CALLBACKS.show();                
            }

            
        },

        publicFn: function() {
            const _this = this;
            return {

                add: function (callbackFn) {
                    _this.add = callbackFn;      
                    _this.num += callbackFn;
                    return this;
                },
                 
                show: function (callbackFn) {
                    _this.show = callbackFn;           
                    display(_this.num);
                    return this;
                },
                
            }
        }        

    } 

    return function(initN) {
        const _c = new Calculate(initN);
        _c._init();
        return _c.publicFn();
    }   

})();    


Calculate(20)
    .show()
    .add(10)
    .show();
