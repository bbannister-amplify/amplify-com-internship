import { expect } from '@wdio/globals'
import CKLAPage from '../pageobjects/ckla.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await CKLAPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
        //await browser.url('https://amplify.com/programs/amplify-core-knowledge-language-arts/')
        const mClass = await $$('.m-card__content')[2].getText()
          await expect($('.m-card__content').toBeVisible())
          await expect(mClass).toContain("mCLASS")
          const viewEmbedded = await $$('.a-btn.a-btn--shortcode.a-btn--primary')[6].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(viewEmbedded).toContain("View embedded support")
          const simpleView = await $$(".a-btn.a-btn--shortcode.a-btn--primary")[4].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(simpleView).toContain("See the Simple View of Writing")
          const skillsByYear = await $$(".a-btn.a-btn--shortcode.a-btn--primary")[3].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(skillsByYear).toContain("Skills by year")
          const seeUnits = await $$(".a-btn.a-btn--shortcode.a-btn--primary")[2].getText()
          await expect($('.a-btn.a-btn--shortcode.a-btn--primary').toBeVisible())
          await expect(seeUnits).toContain("See units and connections")
        await browser.pause(5000);
    })
})
