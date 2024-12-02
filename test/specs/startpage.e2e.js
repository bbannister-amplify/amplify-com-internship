import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await StartPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
        expect($('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').toBeVisible())
        await $('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').click();
        await browser.pause(5000);
    })
})

