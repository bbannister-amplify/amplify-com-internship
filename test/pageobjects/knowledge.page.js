import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KnowledgePage extends Page {

    open () {
        return super.open('https://amplify.com/science-of-reading/knowledge-building/');
    }
}

export default new KnowledgePage();