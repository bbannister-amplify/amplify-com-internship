import { expect } from '@wdio/globals'
import ElaPage from '../pageobjects/ela.page.js'

describe('Amplify.com', () => {
    it('should go to the ela page', async () => {
        await ElaPage.open()

    })
})

