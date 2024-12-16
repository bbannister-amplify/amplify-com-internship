import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ElaPage extends Page {

    open () {
        return super.open('programs/amplify-english-language-arts');
    }
}

export default new ElaPage();
