import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResourcesPage extends Page {

    open () {
        return super.open('resources');
    }
}

export default new ResourcesPage();
