var Slide = Backbone.Model.extend({
    defaults: {
        id: 1,
        headline: 'Default headline'
    },
    initialize: function () {
        alert("model works");
    },
    show: function () {
        this.getEl().show();
    },

    getEl: function () {
        return $('#slide-' + this.id);
    },

    getControl: function () {
        return $('.jump-to').eq(this.id - 1);
    }
});

var Slides = Backbone.Collection.extend({
    model: Slide
});


