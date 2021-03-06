describe('margin', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 800,
    });

    browser.pause(500);
    browser.goToComponent('eu-utility-margin');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'margin',
    });
    expect(screenshots).to.matchReference();
  });
});
