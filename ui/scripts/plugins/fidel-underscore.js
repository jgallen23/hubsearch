Fidel.onPreInit(function() {
  if (this.template) {
    var tmpl = $(this.template).html();
    this.template = _.template(tmpl);
  }
});
Fidel.prototype.render = function(data) {
  var target = (this.templateTarget) ? this.find(this.templateTarget) : this.el;
  target.html(this.template(data));

};
