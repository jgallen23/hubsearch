/*!
  * Fidel - A javascript view controller
  * v2.0.0
  * https://github.com/jgallen23/fidel
  * copyright JGA 2012
  * MIT License
  */

(function(w, $) {

var View = function(el, obj, options) {
  $.extend(this, obj);
  this.el = el;
  this.els = {};
  obj.defaults = obj.defaults || {};
  this.options = $.extend({}, obj.defaults, options);
  $('body').trigger('FidelPreInit', this);
  this.getElements();
  this.delegateEvents();
  this.delegateActions();
  if (this.init) {
    this.init();
  }
  $('body').trigger('FidelPostInit', this);
};
View.prototype.eventSplitter = /^(\w+)\s*(.*)$/;
View.prototype.find = function(selector) {
  return this.el.find(selector);
};
View.prototype.proxy = function(func) {
  return $.proxy(func, this);
};

View.prototype.getElements = function() {
  if (!this.elements)
    return;

  for (var selector in this.elements) {
    var elemName = this.elements[selector];
    this.els[elemName] = this.find(selector);
  }
};

View.prototype.delegateEvents = function() {
  var self = this;
  if (!this.events)
    return;
  for (var key in this.events) {
    var methodName = this.events[key];
    var match = key.match(this.eventSplitter);
    var eventName = match[1], selector = match[2];

    var method = this.proxy(this[methodName]);

    if (selector === '') {
      this.el.on(eventName, method);
    } else {
      if (this.els[selector]) {
        this.els[selector].on(eventName, method);
      } else {
        this.el.on(eventName, selector, method);
      }
    }
  }
};

View.prototype.delegateActions = function() {
  var self = this;
  self.el.on('click', '[data-action]', function(e) {
    var el = $(this);
    var action = el.attr('data-action');
    if (self[action]) {
      self[action](e, el);
    }
  });
};

View.prototype.on = function(eventName, cb) {
  this.el.on(eventName, cb);
};

View.prototype.emit = function(eventName, data) {
  this.el.trigger(eventName, data);
};
View.prototype.hide = function() {
  if (this.views) {
    for (var key in this.views) {
      this.views[key].hide();
    }
  }
  this.el.hide();
};
View.prototype.show = function() {
  if (this.views) {
    for (var key in this.views) {
      this.views[key].show();
    }
  }
  this.el.show();
};

//for plugins
View.onPreInit = function(fn) {
  $('body').on('FidelPreInit', function(e, obj) {
    fn.call(obj);
  });
};
View.onPostInit = function(fn) {
  $('body').on('FidelPostInit', function(e, obj) {
    fn.call(obj);
  });
};

$.fidel = function(name, obj) {

  $.fn[name] = function() {
    var args = Array.prototype.slice.call(arguments);
    var options = args.shift();

    return this.each(function() {
      var $this = $(this);

      var data = $this.data(name);

      if (!data) {
        data = new View($this, obj, options);
        $this.data(name, data); 
      }
      if (typeof options === 'string') {
        data[options].apply(data, args);
      }
    });
  };

  $.fn[name].defaults = obj.defaults || {};

};

$.fidel.View = View;

w.Fidel = View;
})(window, window.jQuery || window.Zepto);
