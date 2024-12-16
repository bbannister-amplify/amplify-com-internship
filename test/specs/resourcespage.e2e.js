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

        await expect($('a[href*="/the-importance-of-reading-fluency"]').toBeVisible());
        await $('a[href*="/the-importance-of-reading-fluency"]').click();
        await browser.back()

        // button tests
        const scienceReadBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[0].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[0].click();
        await browser.back()
        const materialBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[1].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[1].click()
        await browser.back()
        const literaryBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[2].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[2].click();
        await browser.back()
        const mathBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[3].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[3].click()
        await browser.back()
        const scienceBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[4].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[4].click();
        await browser.back()
        const researchBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[5].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[5].click()
        await browser.back()
        const blogBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[6].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[6].click();
        await browser.back()
        const libraryBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[7].toBeVisible())
        await $$('.a-btn.a-btn--shortcode.a-btn--primary')[7].click()
        await browser.back()
        // const mediaBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[8].toBeVisible())
        // await $$('.a-btn.a-btn--shortcode.a-btn--primary')[8].click();
        // await browser.back()
        // const eventsBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[9].toBeVisible())
        // await $$('.a-btn.a-btn--shortcode.a-btn--primary')[9].click()
        // await browser.back()
        // const contactBtn = await expect($$('.a-btn.a-btn--shortcode.a-btn--primary')[10].toBeVisible())
        // await $$('.a-btn.a-btn--shortcode.a-btn--primary')[10].click();
        // await browser.back()

// link tests





    })
})
