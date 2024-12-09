import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {

        await StartPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
        await expect($('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').toBeVisible());
        await $('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').click();
        await browser.url('https://amplify.com/resources/')
        const buttonOne = await $('#m-programs').getText()
        await expect(buttonOne).toContain('Programs')
        const buttonTwo = await $('#m-services').getText()
        await expect(buttonTwo).toContain('Services')
        const buttonThree = await $('#m-resources').getText()
        await expect(buttonThree).toContain('Resources')
        const buttonFour = await $('#m-community').getText()
        await expect(buttonFour).toContain('Community')
        const buttonFive = await $('#m-support').getText()
        await expect(buttonFive).toContain('Support')
        // await browser.pause(5000);
    })
})
