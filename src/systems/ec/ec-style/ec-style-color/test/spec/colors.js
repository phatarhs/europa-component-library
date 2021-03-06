describe('colors', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('ec-style-color');

    browser.pause(500);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'colors',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
