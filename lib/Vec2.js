Vec2 = function(x, y){
  if(y != null){
    this.x = x;
    this.y = y;
  }else{
    this.x = x;
    this.y = x;
  }
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
  if(y == null){
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
  if(val != null){
    this.x *= val;
    this.y *= val;
  }
  return this;
};

Vec2.prototype.opposite = function() {
  return new Vec2(-this.x, -this.y);
};

Vec2.prototype.perp = function() {
  var x = this.x;
  this.x = -this.y;
  this.y = x;
  return this;
};

Vec2.prototype.plus = function(vec, y) {
  if(y == null){
    this.x += vec.x;
    this.y += vec.y;
  }else{
    this.x += vec;
    this.y += y;
  }
  return this;
};

Vec2.prototype.print = function() {
  console.log('[' + this.x + ', ' + this.y + ']');
  return this;
};

Vec2.prototype.rotate = function(rad, anti) {
  //Si anti es igual a true, el giro es en sentido levogiro
  var tmp = Math.sqrt((this.x * this.x) + (this.y * this.y));
  var a = Math.atan2(this.y, this.x);
  if(anti == false || anti == null) a -= rad;
  else a += rad;
  
  this.x = Math.cos(a) * tmp;
  this.y = Math.sin(a) * tmp;
  this.x.toFixed(3);
  this.y.toFixed(3);
  return this;
};

Vec2.prototype.scale = function(vec) {
  this.x *= vec.x;
  this.y *= vec.y;
  return this;
};

Vec2.prototype.set = function(vec, y) {
  if(y == null){
    this.x = vec.x;
    this.y = vec.y;
  }else{
    this.x = vec;
    this.y = y;
  }
  return this;
};

function plusVec2(vec1, vec2){
  return new Vec2(vec1.x + vec2.x, vec1.y + vec2.y);
}

function lessVec2(vec1, vec2){
  return new Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
}

function escalarVec2(vec1, vec2){
  return new Vec2(vec1.x * vec2.x, vec1.y * vec2.y);
}