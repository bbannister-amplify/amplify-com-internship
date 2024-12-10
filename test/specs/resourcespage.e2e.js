import { expect } from '@wdio/globals'
import ResourcesPage from '../pageobjects/resources.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await ResourcesPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
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
        const title = await $('.m-dashtitle > h1').getText()
        await expect(title).toContain('Welcome to the Resources Hub.')
        const scienceBtn = await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
        await $('.a-btn.a-btn--shortcode.a-btn--primary').click();
        const materialBtn = await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
        await $('.a-btn.a-btn--shortcode.a-btn--primary').click()
    })
})
