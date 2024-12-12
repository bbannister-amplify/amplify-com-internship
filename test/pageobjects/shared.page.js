import { $ } from '@wdio/globals'

/**
 * Class for Shared page elements
 */
class SharedPage {
  constructor(browser) {
    this.browser = browser;
  }

  async checkLogo() {
    await expect($('.icon.icon--logo').toBeVisible())
    return true;
  }
}

export default new SharedPage();
