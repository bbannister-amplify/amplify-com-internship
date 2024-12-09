import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CKLAPage extends Page {

    open () {
        return super.open('programs/amplify-core-knowledge-language-arts/');
    }
}

export default new CKLAPage();
