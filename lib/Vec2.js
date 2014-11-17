
(function(factory){
  if(typeof exports !== 'undefined'){
    module.exports = factory();
  }else {
    window['Vec2'] = factory();
  }
})(function() {

  var Vec2 = function(x, y){
    if(y !== undefined){
      this.x = x;
      this.y = y;
    }else{
      this.x = x;
      this.y = x;
    }
    return this;
  };

  Vec2.prototype.angle = function(vec){
    if(typeof vec === 'undefined'){
      vec = new Vec2(1,0);
    }
    var scalar = this.scalarProduct(vec);
    var cos = scalar/(this.length() * vec.length());
    return Math.acos(cos);
  };

  Vec2.prototype.bounce = function(axis) {
    var angle = this.angle(axis);
    angle *= 2;
    this.rotate(angle);
    return this;
  };

  Vec2.prototype.clear = function() {
    this.x = 0;
    this.y = 0;
    return this;
  };

  Vec2.prototype.clone = function() {
    return new Vec2(this.x, this.y);
  };

  Vec2.prototype.distance = function(vec) {
    var tmp = new Vec2(vec.x - this.x, vec.y - this.y);
    return (tmp.length());
  };

  Vec2.prototype.equals = function(vec) {
    return (this.x === vec.x && this.y === vec.y);
  };

  Vec2.prototype.fromPolar = function(r, a) {
    this.x = r * Math.cos(a);
    this.y = r * Math.sin(a);
    return this;
  };

  Vec2.prototype.length = function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  };

  Vec2.prototype.less = function(vec, y) {
    if(y === undefined){
      this.x -= vec.x;
      this.y -= vec.y;
    }else{
      this.x -= vec;
      this.y -= y;
    }
    return this;
  };

  Vec2.prototype.normalize = function(val) {
    var tmp = Math.sqrt((this.x * this.x) + (this.y * this.y));
    this.x /= tmp;
    this.y /= tmp;
    if(typeof val !== 'undefined'){
      this.x *= val;
      this.y *= val;
    }
    return this;
  };

  Vec2.prototype.opposite = function() {
    return new Vec2(-this.x, -this.y);
  };

  Vec2.prototype.perp = function(spin) {
    var x = this.x;
    if(typeof spin === 'undefined' || spin === null || spin === true || spin === -1){
      this.x = -this.y;
      this.y = x;
    }else{
      this.x = this.y;
      this.y = -x;
    }
    return this;
  };

  Vec2.prototype.plus = function(vec, y) {
    if(y === undefined){
      this.x += vec.x;
      this.y += vec.y;
    }else{
      this.x += vec;
      this.y += y;
    }
    return this;
  };

  Vec2.prototype.print = function() {
    console.log('[' + this.x.toFixed(3) + ', ' + this.y.toFixed(3) + ']');
    return this;
  };

  Vec2.prototype.rotate = function(rad) {
    //el giro natural es en contra de las agujas del reloj
    var tmp = Math.sqrt((this.x * this.x) + (this.y * this.y));
    var a = Math.atan2(this.y, this.x);

    a += rad;
    
    this.x = Math.cos(a) * tmp;
    this.y = Math.sin(a) * tmp;
    return this;
  };

  Vec2.prototype.scalarProduct = function(vec) {
    return (this.x * vec.x + this.y * vec.y);
  };

  Vec2.prototype.scale = function(vec) {
    this.x *= vec.x;
    this.y *= vec.y;
    return this;
  };

  Vec2.prototype.set = function(vec, y) {
    if(y === undefined){
      this.x = vec.x;
      this.y = vec.y;
    }else{
      this.x = vec;
      this.y = y;
    }
    return this;
  };

  Vec2.prototype.symmetric = function(axis) {
    this.bounce(axis).set(this.opposite());
    return this;
  };

  Vec2.prototype.simplify = function() {
    return {
      x: this.x,
      y: this.y
    };
  };

  return Vec2;

});