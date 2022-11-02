const TrieNode = function(key) {
    this.key = key;
    
    this.parent = null;
    
    this.children = {};
    
    this.end = false;
    
    this.getWord = function() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  };
}
var Trie = function() {
    this.root = new TrieNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let c of word) {
        if (!node.children[c]) {
            node.children[c] = new TrieNode(c);
            node.children[c].parent = node;
        }
        node = node.children[c];
    }
    node.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let c of word) {
        if (!node.children[c]) {
            return false;
        }
        node = node.children[c]
    }
    return node.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let c of prefix) {
        if (!node.children[c]) {
            return false;
        }
        node = node.children[c]
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */