var SlidesView = Backbone.View.extend({

    el: '#slideshow',
    slides: '#slideshow .slides',
    controls: '#slideshow .controls',

    events: {
        'click .toggler': 'toggleVisibility',
        'click .jump-to': 'jumpTo'
    },
    
    delay: 10000,
    currentIndex: 0,

    slideTemplate: _.template('<li id="slide-{{ id }}" class="slide">{{ headline }}</li>'),
    controlTemplate: _.template('<li class="slide-control jump-to" data-index="{{ index }}">{{ human_readable_index }}</li>'),

    initialize: function() {
        _.bindAll(this, 'render');
    },

    render: function() {
        var self = this;
        this.collection.each(function(slide, i) {
            $(self.slides).append(self.slideTemplate(slide.toJSON()));
            $(self.controls).append(self.controlTemplate({
                index: i,
                human_readable_index: ++i
            }));
        });
        this.initialPlay();
        return this;
    },

    transition: function(from, to) {
        var current = this.collection.at(from);
        var next = this.collection.at(to);
        current.getEl().fadeOut('slow', function() {
            next.getEl().fadeIn('slow');
        });
        current.getControl().toggleClass('current');
        next.getControl().toggleClass('current');
        this.currentIndex = to;
    },

    jumpTo: function(e) {
        var next = $(e.currentTarget).data('index');
        this.transition(this.currentIndex, next);
    },

    initialPlay: function() {
        this.collection.at(0).show();
        this.collection.at(0).getControl().toggleClass('current');
    }
});