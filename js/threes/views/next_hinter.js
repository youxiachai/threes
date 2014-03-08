define([
  'jquery'
, 'underscore'
, 'backbone'
, 'threes/app'
], function($, _, Backbone, app) {

  var nextHinterView = Backbone.View.extend({
    className: 'next-hinter'
  , initialize: function(options) {
      this.number = options.number || 1
    }
  , render: function() {
      this.$el.empty()
      this.tile = $('<div class="tile"><div class="number"></div></div>')
                    .appendTo(this.$el)

      this.tile.addClass('num-' + this.number)
      this.$el.append('<div class="word">next</div>')

      return this
    }
  , changeNumber: function(number) {
      this.number = number
      this.render()
    }
  })

  return nextHinterView
})