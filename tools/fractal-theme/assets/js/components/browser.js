/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import storage from '../storage';

export default class Browser {
  constructor(el) {
    const self = this;

    this._el = $(el);
    this._tabs = this._el.find('[data-role="tab"]');
    this._tabPanels = this._el.find('[data-role="tab-panel"]');
    this._fileSwitcher = this._el.find('[data-role="switcher"]');
    this._codeViews = this._el.find('[data-role="code"]');
    this._resourcePreview = this._el.find('[data-role="resource-preview"]');
    this._activeClass = 'is-active';
    this._initTabs();

    $('.FileBrowser-select')
      .select2({ minimumResultsForSearch: Infinity })
      .on('change', function handleChange() {
        $(this)
          .closest('.FileBrowser')
          .find('[data-role="resource-preview"]')
          .removeClass(self._activeClass);
        $(`#${this.value}`).addClass(self._activeClass);
      });

    this._initFileSwitcher();
  }

  _initTabs() {
    const ac = this._activeClass;
    const tabs = this._tabs;
    const selectedIndex = Math.min(
      tabs.length - 1,
      storage.get('browser.selectedTabIndex', 0)
    );
    tabs.on('click', e => {
      const link = $(e.target).closest('a');
      const tab = link.parent();
      tabs.removeClass(ac);
      storage.set('browser.selectedTabIndex', tabs.index(tab));
      tab.addClass(ac);
      this._tabPanels.removeClass(ac);
      this._tabPanels.filter(link.attr('href')).addClass(ac);
      return false;
    });
    tabs.removeClass('is-active');
    tabs
      .eq(selectedIndex)
      .find('a')
      .trigger('click');
  }

  _initFileSwitcher() {} // eslint-disable-line class-methods-use-this
}
