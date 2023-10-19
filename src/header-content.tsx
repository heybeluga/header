import type { HeaderDropdown, NavDropdownColumnProps } from './types'

const TOOLS_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Portfolio Tracker',
    subtitle: 'Your home for your crypto',
    groupHref: 'https://dashboard.heybeluga.com/',
    hoverBackground: 'hover:bg-blue-50',
    links: [],
    hasHeader: true,
    image: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M239.8 88.5001C239.8 88.5001 235 82.2001 216.6 84.1001C198.2 86.0001 212.7 93.1001 186.2 90.5001C160.2 87.9001 158.1 94.6001 160.1 99.1001C162.1 103.6 175.5 119.7 175.5 119.7L234 114.1C233.9 114 247.3 100.4 239.8 88.5001Z"
          fill="#E78B54"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M250.4 167C272.9 181.9 287.7 206.4 287.7 234.2C287.7 279.6 248.4 316.3 200 316.3C151.6 316.3 112.3 279.5 112.3 234.2C112.3 207.4 126 183.7 147.1 168.7C152.5 163.8 169.9 147.5 171.4 137.2C173.2 125 164.1 115.4 161.4 108.6C159.9 104.6 159.4 100.2 159.8 96C159.7 98.8 160.8 106.4 177.6 106.7C202.2 107.2 188 95 215.1 97.4C242.2 99.8 239.7 88.7 239.7 88.7C249.1 110 228.3 120.7 227.7 135.4C227.5 145.6 241.9 159.6 250.4 167ZM159.9 95.8C159.9 95.5 160 95.1 160 94.8C160 94.8 160 95.2 159.9 95.8Z"
          fill="#FBD730"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M234.8 106.5C232.1 110.6 230.1 115.1 229 119.9C227.1 127.9 225.2 135.8 225.2 135.8"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M200.7 112.2C200.7 112.2 206.5 143.1 194.7 159.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M172.8 150.7C172.8 150.7 167.3 168.2 144.2 184.9"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M259.8 254.7C259.8 254.7 260.6 284 217.3 296.4"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M233.8 246.1C233.8 240.4 232.4 235.8 228.9 232.6C226.1 230 221.8 228.3 215.9 227.5L212.1 227V216.2C214.9 216.4 219.7 217.1 222.6 219.8L232.8 210.3C227.9 205.7 221.7 203.5 213.9 203V195.3H202.2V203.2C189.8 204.7 182.6 212.4 182.6 222.4C182.6 227.7 184.1 231.8 187.2 234.8C190.2 237.7 194.6 239.6 200.5 240.3L204.1 240.7V252C198.9 251.9 193.2 250.8 189.9 247.7L179.5 257.4C185.6 263.3 193.2 265.3 202.3 265.5V274.9H214V265.1C225.1 263.4 233.8 256.9 233.8 246.1ZM217.8 246.4C217.8 249.2 215.9 251 212 251.7V241.1C213.6 241.1 215.2 241.7 216.5 242.7C217.4 243.8 217.9 245.1 217.8 246.4ZM204 226.4C202.4 226.3 200.8 225.7 199.5 224.6C198.7 223.9 198.2 222.8 198.2 221.7C198.2 219.4 199.9 216.8 204 216.2V226.4Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    title: 'Crypto Calculator',
    subtitle: 'Compare market caps of crypto assets',
    groupHref: 'https://marketcap.heybeluga.com/',
    hoverBackground: 'hover:bg-red-50',
    links: [],
    hasHeader: true,
    image: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M274.1 98.9001L249.4 142.9V220.2C249.4 226.5 245.7 233.7 241.1 236.3L176 273.9L152 316.6L126 301.2C123.6 300.6 122 297.9 122 293.8V163.8C122 157.5 125.7 150.3 130.3 147.7L241.1 83.7001C243.5 82.3001 245.6 82.5001 247.1 83.7001L247.3 83.4001L274.1 98.9001Z"
          fill="#FBFBFB"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M158.3 163.7L269.1 99.6999C273.7 96.9999 277.4 99.9999 277.4 106.2V236.2C277.4 242.5 273.7 249.7 269.1 252.3L158.3 316.3C153.7 319 150 316 150 309.8V179.8C150 173.5 153.7 166.3 158.3 163.7Z"
          fill="#CBE2EA"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M276 182.6L270.8 238C270.8 240.7 269.2 243.9 267.2 245L223 277.6L216.9 273.3C215.9 273 215.3 271.8 215.3 270.1V213.3C215.3 210.6 216.9 207.4 218.9 206.3L267.2 178.4C268 177.8 269 177.8 269.8 178.4L269.9 178.3L276 182.6Z"
          fill="#CE1818"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M226.1 210.3L274.4 182.4C276.4 181.2 278 182.5 278 185.3V242C278 244.7 276.4 247.9 274.4 249L226.1 277C224.1 278.2 222.5 276.9 222.5 274.1V217.3C222.5 214.6 224.1 211.5 226.1 210.3Z"
          fill="#E15C41"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M216 217.6L211.5 225.6V274.2C211.5 276.9 209.9 280.1 207.9 281.2L167.4 304.6L163 312.6L157.7 309.5C156.7 309.2 156 308.1 156 306.3V249.5C156 246.8 157.6 243.6 159.6 242.5L207.9 214.6C208.7 214 209.7 214 210.5 214.6L210.6 214.5L216 217.6Z"
          fill="#5EB8DD"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M166.9 246.5L215.2 218.6C217.2 217.4 218.8 218.7 218.8 221.5V278.3C218.8 281 217.2 284.2 215.2 285.3L166.9 313.2C164.9 314.4 163.3 313.1 163.3 310.4V253.6C163.2 250.8 164.9 247.6 166.9 246.5Z"
          fill="#93D8F5"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M276 109.6L270.8 165.7C270.8 168.4 269.2 171.6 267.2 172.7L226.9 196L222 204.6L217 201C216 200.7 215.4 199.5 215.4 197.8V141C215.4 138.3 217 135.1 219 134L267.3 106.1C268.1 105.5 269.1 105.5 269.9 106.1L270 106L276 109.6Z"
          fill="#5EB8DD"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M226.1 138L274.4 110.1C276.4 108.9 278 110.2 278 113V169.8C278 172.5 276.4 175.7 274.4 176.8L226.1 204.7C224.1 205.9 222.5 204.6 222.5 201.9V145C222.5 142.3 224.1 139.1 226.1 138Z"
          fill="#93D8F5"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M216 145.6L211.5 201.8C211.5 204.5 209.9 207.7 207.9 208.8L167.7 232.1L163 240.6L157.7 237.2C156.7 236.9 156 235.8 156 234V177.2C156 174.5 157.6 171.3 159.6 170.2L207.9 142.3C208.7 141.7 209.7 141.7 210.5 142.3L210.6 142.2L216 145.6Z"
          fill="#5EB8DD"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M166.9 174.2L215.2 146.3C217.2 145.1 218.8 146.4 218.8 149.2V206C218.8 208.7 217.2 211.9 215.2 213L166.9 240.9C164.9 242.1 163.3 240.8 163.3 238.1V181.3C163.2 178.5 164.9 175.3 166.9 174.2Z"
          fill="#93D8F5"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M235.9 161L264.3 144.6V153.6L235.9 170V161Z"
          fill="#E4E0EA"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M237.6 224.7L266 208.3V217.3L237.6 233.7V224.7ZM237.6 239.7L266 223.3V232.3L237.6 248.7V239.7Z"
          fill="#E4E0EA"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M204.4 191.2L194.3 197V208L186.1 212.8V201.8L176 207.6V198.6L186.1 192.8V180.8L194.3 176V188L204.4 182.2V191.2Z"
          fill="#E4E0EA"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M205.4 248.6L197.6 261.6L204.7 265.3L199 275L191.9 271.3L184.8 283.2L179 280.2L186.1 268.3L179 264.6L184.8 254.9L191.9 258.6L199.7 245.6L205.4 248.6Z"
          fill="#E4E0EA"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    )
  },
  {
    title: 'Crypto Calendar',
    subtitle: 'Upcoming crypto events',
    groupHref: 'https://calendar.heybeluga.com/',
    hoverBackground: 'hover:bg-green-50',
    links: [],
    hasHeader: true,
    image: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M233.9 132.3L227.5 128.6V240.3L150.7 284.6L157.3 288.4L138.2 321.4L112.6 306.7L112.7 306.6L112.5 306.7V151.1L227.4 84.9L227.5 84.7L253 99.3L233.9 132.3Z"
          fill="#E1EBF1"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M118.6 153.6L118.5 309.4Z"
          fill="white"
        />
        <path
          d="M118.6 153.6L118.5 309.4"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M125.6 157.6L125.5 314.4Z"
          fill="white"
        />
        <path
          d="M125.6 157.6L125.5 314.4"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M132.5 162.4V317.4Z"
          fill="white"
        />
        <path
          d="M132.5 162.4V317.4"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M112.3 151L138.4 165.6V194.6L112.3 180V151Z"
          fill="#93D8F5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M112.3 151L138.4 165.6L253.8 99.3001L227.7 84.6001L112.3 151Z"
          fill="#93D8F5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M138.2 165.8L253.2 99.5V255.1L138.2 321.4V165.8Z"
          fill="#DDE7ED"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M138.2 193.8L253.3 127.4C253.3 127.4 253.3 154.6 253.3 183.9C253.3 240.4 287.7 244.4 287.7 244.4L172.6 310.8C172.6 310.8 138.2 304.7 138.2 250.9C138.3 221.4 138.2 193.8 138.2 193.8Z"
          fill="white"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M138.2 193.8L253.3 127.4L253.5 131.8L224.3 149.6L198.6 161.3L173.2 181.7L146.4 194L138.5 201.2L138.2 193.8Z"
          fill="white"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.4 178.7L207.8 168.1C209.3 167.2 210.5 168.2 210.5 170.3V170.7C210.5 172.8 209.5 174.8 207.8 176.1L189.4 186.7C187.9 187.6 186.7 186.6 186.7 184.5V184C186.7 181.9 187.7 179.9 189.4 178.7Z"
          fill="white"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M187.7 230.7L210.3 217.7L195.4 270.7L207.9 263.5L226.8 196.1L187.7 218.6V230.7Z"
          fill="black"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M208 275.7C194.2 283.7 183.6 281.3 177.7 277.9C169.2 273.1 165.5 264.1 165.4 251.6C165.3 228.9 180 201.6 199.9 190.1C205.9 185.4 207.7 196.8 201.9 199.9C184.3 209.3 173.7 230.7 173.7 252.1C173.7 267.3 188.1 279.7 202.9 270.8C242.5 247 230.9 217 235 218.6C239.1 220.2 244.8 254.4 208 275.7Z"
          fill="#56DC7F"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M138.3 165.8L253.3 99.5V128L138.3 194.3V165.8Z"
          fill="#70C3E6"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M170.3 156.4C173.2 154.7 175.5 156.1 175.5 159.3C175.3 162.9 173.3 166.3 170.3 168.2C167.4 169.9 165.1 168.5 165.1 165.3C165.3 161.7 167.3 158.4 170.3 156.4Z"
          fill="black"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M218.6 127.9C221.5 126.2 223.8 127.6 223.8 130.8C223.6 134.4 221.6 137.8 218.6 139.7C215.7 141.4 213.4 140 213.4 136.8C213.6 133.2 215.5 129.9 218.6 127.9Z"
          fill="black"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M182.5 165.6C180.1 166.9 177.5 167.6 174.7 167.6C172.5 167.6 170.2 167.2 168.1 166.4C167.2 165.8 165.9 164.3 167 161.3C168.4 157.5 170.7 157 171.6 157C173.9 157.7 176 157.7 177.5 156.9C179.6 155.7 180.9 152.6 180.9 148.4C180.9 137.5 172.9 123.7 163.3 118.2C159.6 116.1 156.2 115.6 154 116.8C151.9 118 150.6 121.1 150.6 125.3C150.6 126.5 150.7 127.7 150.9 128.9L141.7 134.2C141 131.3 140.6 128.3 140.6 125.3C140.6 117.3 143.6 111.2 149 108.1C154.4 105 161.3 105.5 168.3 109.5C181 116.8 190.9 133.9 190.9 148.4C190.9 156.4 187.9 162.5 182.5 165.6Z"
          fill="white"
          stroke="black"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M230.4 138.1C228 139.4 225.4 140.1 222.6 140.1C220.4 140.1 218.1 139.7 216 138.9C215.1 138.3 213.8 136.8 214.9 133.8C216.3 130 218.6 129.5 219.5 129.5C221.8 130.2 223.9 130.2 225.4 129.4C227.5 128.2 228.8 125.1 228.8 120.9C228.8 110 220.8 96.2 211.2 90.7C207.5 88.6 204.1 88 201.9 89.3C199.8 90.5 198.5 93.6 198.5 97.8C198.5 99 198.6 100.2 198.8 101.4L189.6 106.7C188.9 103.8 188.5 100.8 188.5 97.8C188.5 89.8 191.5 83.7 196.9 80.6C202.3 77.5 209.2 78 216.2 82C228.9 89.3 238.8 106.4 238.8 120.9C238.8 128.9 235.8 135 230.4 138.1Z"
          fill="white"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    )
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
