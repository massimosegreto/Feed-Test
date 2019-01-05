/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).toBeGreaterThan(0);
    });
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    function allFeedsURL(i) {
      var int = 1 + i;
      it('feed ' + int + 'url', function() {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      });
    }
    for (var i = 0; i < allFeeds.length; i++) {
      allFeedsURL(i);
    }

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    function allFeedsName(i) {
      var int = 1 + i;
      it('feed ' + int + 'name', function() {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe();
      });
    }
    for (var i = 0; i < allFeeds.length; i++) {
      allFeedsName(i);
    }
  });



  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', () => {


    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('Menu Hidden', function() {
      expect($('body').hasClass('menu-hidden')).toEqual(true);
    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('does the menu display when clicked and does it hide when cliked again', function() {
      // Calls the class of 'menu-icon-link'
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', () => {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the uses of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach((done) => {
      loadFeed(0, () => {
        done();
      });
    });

    it('entrie withing the .feed container', function() {
      expect($('.feed').has('.entry').length).not.toBe(0);
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', () => {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    var initFeedSelection;
    beforeEach((done) => {
      loadFeed(0, () => {
        initFeedSelection = document.querySelector(".feed").innerHtml;
        loadFeed(1, () => {
          done();
        });
      });
    });

    it("the content changes by loadFeed()", ((done) => {
      var newFeedSelection = document.querySelector(".feed").innerHtml;
      expect(initFeedSelection).not.toBe("NewFeedSelection");
      done();
    }));
  })
}());
