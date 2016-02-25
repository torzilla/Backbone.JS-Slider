// creates an instance of our slideshow, passes in a new collection of slides
var Slideshow = new SlidesView({

    collection: new Slides([
        new Slide({
            id: 1,
            headline: 'Welcome to APP'
        }),
        new Slide({
            id: 2,
            headline: 'Thousands of Products'
        })
    ])
}).render();

