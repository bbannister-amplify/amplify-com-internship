import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await StartPage.open()

       /* await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!')) */
        await expect($('.icon icon--logo').toBeVisible())
        await browser.pause(5000);
    })
})

