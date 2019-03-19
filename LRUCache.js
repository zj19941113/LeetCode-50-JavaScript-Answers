/**
 * @param {number} capacity
 */

/**
1.新加入的数据
            ————> ___ 头 <—————
                  ___          |
                  ___          |2.被访问的数据
                  ___     —————
                  ___
                  ___
            <———— ___ 尾
3.淘汰的数据
*/

var LRUCache = function(capacity) {
    this.size = capacity;
    this.map = {};
    this.list = []; 
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key] != null){
        this.list.splice(this.list.indexOf(key),1);//更新list
        this.list.unshift(key);
        return this.map[key];
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var tmp = this.list.indexOf(key);
    if(tmp != -1){ //key已存在，更新list
        this.list.splice(tmp,1);
    }
    else{ //key不存在
        if(this.list.length == this.size){ //栈满
            var d = this.list.pop();
            this.map[d] = null;
        }   
    }
    this.list.unshift(key);
    this.map[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
