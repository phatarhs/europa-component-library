describe('fields', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(500);
  });

  describe('field', () => {
    before(() => {
      browser.goToComponent('eu-component-field');
      browser.pause(500);
      browser.injectAxeCore();
    });

    // Normal state
    context('with plain state', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: 'fields',
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-field').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
