import { expect } from '@wdio/globals'
import BoostPage from '../pageobjects/boost.page.js'

describe('Amplify.com', () => {
    it('should go to the Boost Reading page', async () => {
        await BoostPage.open()

        await expect($('.m-subheader__branding').toBeVisible())

    })
})

