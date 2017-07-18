var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log(window.exampleVideoData);
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
