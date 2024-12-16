import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await StartPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
        await browser.url('https://amplify.com/programs/amplify-core-knowledge-language-arts/')
        const mClass = await $$('.m-card__content')[2].getText()
          await expect($('.m-card__content').toBeVisible())
          await expect(mClass).toContain("mCLASS")
          const seeResearch = await $$('.a-btn.a-btn--shortcode.a-btn--primary')[5].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(seeResearch).toContain("See Research Unit trade books")
          const viewEmbedded = await $$('.a-btn.a-btn--shortcode.a-btn--primary')[6].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(viewEmbedded).toContain("View embedded support")
        await browser.pause(5000);
    })
})
