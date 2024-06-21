import type { Page } from '@playwright/test'
import { addNewTokensFound, disconnectWalletFromDapps, getTokenAmount, getWalletAddress } from './actions'
import { homePageElements } from './selectors'

export class HomePage {
  static readonly selectors = homePageElements
  readonly selectors = homePageElements

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async getTokenAmount() {
    return await getTokenAmount(this.page, 'token name')
  }

  async getWalletAddress(wallet: string) {
    return await getWalletAddress(this.page, wallet)
  }

  async addNewTokensFound() {
    return await addNewTokensFound(this.page)
  }

  async disconnectWalletFromDapps() {
    const currentUrl = this.page.url()
    await this.page.goto(`${currentUrl}#/setting/security/permission`)
    return await disconnectWalletFromDapps(this.page)
  }
}
