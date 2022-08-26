import React from 'react'
import { mount } from 'enzyme'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter as Router, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NFTTabs } from '../NFTTabs'
import i18n from '../../../../i18nTestConfig'

describe('NFT Transactions tab container', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: false,
      },
    },
  })

  const nftId =
    '000800011C7D8ED1D715A0017E41BF9499ECC17E7FB666320000099B00000000'

  const createWrapper = (tab = 'transactions') =>
    mount(
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <Router initialEntries={[`/tokens/${nftId}/${tab}`]}>
            <Route path="/tokens/:id/:tab?" component={NFTTabs} />
          </Router>
        </I18nextProvider>
      </QueryClientProvider>,
    )

  it('renders without crashing', () => {
    const wrapper = createWrapper()
    wrapper.unmount()
  })

  it('renders table content', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.tabs').length).toBe(1)
    expect(wrapper.find('a.tab').length).toBe(3)
    expect(wrapper.find('a.tab').at(0).props().title).toBe('transactions')
    expect(wrapper.find('a.tab').at(1).props().title).toBe('buy-offers')
    expect(wrapper.find('a.tab').at(2).props().title).toBe('sell-offers')
    expect(wrapper.find('a.tab.selected').text()).toEqual('transactions')
    wrapper.unmount()
  })

  it('renders transactions tab', () => {
    const wrapper = createWrapper('transactions')
    expect(wrapper.find('a.tab.selected').text()).toEqual('transactions')
    wrapper.unmount()
  })

  it('renders buy offers tab', () => {
    const wrapper = createWrapper('buy-offers')
    expect(wrapper.find('a.tab.selected').text()).toEqual('buy-offers')
    wrapper.unmount()
  })

  it('renders sell offers tab', () => {
    const wrapper = createWrapper('sell-offers')
    expect(wrapper.find('a.tab.selected').text()).toEqual('sell-offers')
    wrapper.unmount()
  })
})
