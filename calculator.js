
const Calculate = (function (initN) {

    let Calculate = function(initN)
    {        
        this._CALLBACKS = {
            add: null,
            result: null,
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

            if ( this._CALLBACKS.result != null) {
                this._CALLBACKS.result();                
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
                 
                result: function (callbackFn) {
                    _this.result = callbackFn;           
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
    .add(10)
    .result();
