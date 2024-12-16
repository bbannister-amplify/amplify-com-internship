import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BoostPage extends Page {

    open () {
        return super.open('boost-reading/');
    }
}

export default new BoostPage();
