// pushed local file to github

var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food) {
  this.ate = true;
  return 'I am eating';
};