import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'
import SharedPage from '../pageobjects/shared.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page and check the for the Amplify logo', async () => {
        await StartPage.open()
        await SharedPage.checkLogo()
    })
})

