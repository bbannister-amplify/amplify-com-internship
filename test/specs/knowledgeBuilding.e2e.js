import { expect } from '@wdio/globals'
import KnowledgePage from '../pageobjects/knowledge.page.js'

describe('Amplify.com', () => {
    it('should go to the knowledge building page', async () => {
        await KnowledgePage.open();

        await expect($('.icon.icon--logo').toBeVisible());

        await expect($('.m-salesButton__main').toBeVisible());
        const expertButton = await $('.m-salesButton__main').getText();
        await expect(expertButton).toContain('Connect with a product expert');
    })
})

