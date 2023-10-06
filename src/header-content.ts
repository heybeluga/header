import type { HeaderDropdown, NavDropdownColumnProps } from './types'

const TOOLS_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Portfolio Tracker',
    subtitle: 'Your home for your crypto',
    groupHref: 'https://dashboard.heybeluga.com/',
    hoverBackground: 'hover:bg-blue-50',
    links: [],
    hasHeader: true
  },
  {
    title: 'Crypto Calendar',
    subtitle: 'Upcoming crypto events',
    groupHref: 'https://calendar.heybeluga.com/',
    hoverBackground: 'hover:bg-red-50',
    links: [],
    hasHeader: true
  }
]
const COMPARE_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Crypto Companies',
    subtitle: 'Crypto companies and their products',
    links: [
      { href: '/comparisons/nft-marketplaces/', text: 'NFT Marketplaces' },
      {
        href: '/comparisons/centralized-crypto-staking-platforms/',
        text: 'Staking Platforms'
      },
      { href: '/comparisons/crypto-stocks/', text: 'Public Stocks' }
    ]
  }
]
const LEARN_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Blockchains',
    subtitle: 'The building blocks of crypto',
    links: [
      { href: '/articles/bitcoin/', text: 'Bitcoin' },
      { href: '/articles/ethereum/', text: 'Ethereum' },
      { href: '/articles/litecoin/', text: 'Litecoin' },
      { href: '/articles/dogecoin/', text: 'Dogecoin' },
      { href: '/articles/solana/', text: 'Solana' },
      { href: '/articles/cosmos/', text: 'Cosmos' }
    ]
  },
  {
    title: 'DeFi',
    subtitle: 'Decentralized finance',
    links: [
      { href: '/articles/defi/', text: 'DeFi' },
      { href: '/articles/uniswap/', text: 'Uniswap' },
      { href: '/articles/lido/', text: 'Lido' },
      { href: '/articles/aave/', text: 'Aave' },
      { href: '/articles/dydx/', text: 'dYdX' }
    ]
  },
  {
    title: 'NFTs',
    subtitle: 'Non-fungible tokens',
    links: [
      { href: '/articles/nfts/', text: 'Bored Ape Yacht Club' },
      { href: '/articles/opensea/', text: 'OpenSea' }
    ]
  }
]

export const HEADER_DROPDOWNS: HeaderDropdown[] = [
  { title: 'Tools', body: TOOLS_COLUMNS },
  { title: 'Compare', body: COMPARE_COLUMNS },
  { title: 'Learn', body: LEARN_COLUMNS }
]
