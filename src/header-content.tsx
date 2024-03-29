import type { HeaderMenuItem, NavDropdownColumnProps } from './types'

const TOOLS_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Portfolio Tracker',
    subtitle: 'Your home for your crypto',
    groupHref: 'https://dashboard.heybeluga.com/',
    hoverBackground: 'hover:bg-blue-50',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.8 88.5001C239.8 88.5001 235 82.2001 216.6 84.1001C198.2 86.0001 212.7 93.1001 186.2 90.5001C160.2 87.9001 158.1 94.6001 160.1 99.1001C162.1 103.6 175.5 119.7 175.5 119.7L234 114.1C233.9 114 247.3 100.4 239.8 88.5001Z"
          fill="#E78B54"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250.4 167C272.9 181.9 287.7 206.4 287.7 234.2C287.7 279.6 248.4 316.3 200 316.3C151.6 316.3 112.3 279.5 112.3 234.2C112.3 207.4 126 183.7 147.1 168.7C152.5 163.8 169.9 147.5 171.4 137.2C173.2 125 164.1 115.4 161.4 108.6C159.9 104.6 159.4 100.2 159.8 96C159.7 98.8 160.8 106.4 177.6 106.7C202.2 107.2 188 95 215.1 97.4C242.2 99.8 239.7 88.7 239.7 88.7C249.1 110 228.3 120.7 227.7 135.4C227.5 145.6 241.9 159.6 250.4 167ZM159.9 95.8C159.9 95.5 160 95.1 160 94.8C160 94.8 160 95.2 159.9 95.8Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M234.8 106.5C232.1 110.6 230.1 115.1 229 119.9C227.1 127.9 225.2 135.8 225.2 135.8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200.7 112.2C200.7 112.2 206.5 143.1 194.7 159.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M172.8 150.7C172.8 150.7 167.3 168.2 144.2 184.9"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.8 254.7C259.8 254.7 260.6 284 217.3 296.4"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M274.1 98.9001L249.4 142.9V220.2C249.4 226.5 245.7 233.7 241.1 236.3L176 273.9L152 316.6L126 301.2C123.6 300.6 122 297.9 122 293.8V163.8C122 157.5 125.7 150.3 130.3 147.7L241.1 83.7001C243.5 82.3001 245.6 82.5001 247.1 83.7001L247.3 83.4001L274.1 98.9001Z"
          fill="#FBFBFB"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M158.3 163.7L269.1 99.6999C273.7 96.9999 277.4 99.9999 277.4 106.2V236.2C277.4 242.5 273.7 249.7 269.1 252.3L158.3 316.3C153.7 319 150 316 150 309.8V179.8C150 173.5 153.7 166.3 158.3 163.7Z"
          fill="#CBE2EA"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M276 182.6L270.8 238C270.8 240.7 269.2 243.9 267.2 245L223 277.6L216.9 273.3C215.9 273 215.3 271.8 215.3 270.1V213.3C215.3 210.6 216.9 207.4 218.9 206.3L267.2 178.4C268 177.8 269 177.8 269.8 178.4L269.9 178.3L276 182.6Z"
          fill="#CE1818"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M226.1 210.3L274.4 182.4C276.4 181.2 278 182.5 278 185.3V242C278 244.7 276.4 247.9 274.4 249L226.1 277C224.1 278.2 222.5 276.9 222.5 274.1V217.3C222.5 214.6 224.1 211.5 226.1 210.3Z"
          fill="#E15C41"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M216 217.6L211.5 225.6V274.2C211.5 276.9 209.9 280.1 207.9 281.2L167.4 304.6L163 312.6L157.7 309.5C156.7 309.2 156 308.1 156 306.3V249.5C156 246.8 157.6 243.6 159.6 242.5L207.9 214.6C208.7 214 209.7 214 210.5 214.6L210.6 214.5L216 217.6Z"
          fill="#5EB8DD"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M166.9 246.5L215.2 218.6C217.2 217.4 218.8 218.7 218.8 221.5V278.3C218.8 281 217.2 284.2 215.2 285.3L166.9 313.2C164.9 314.4 163.3 313.1 163.3 310.4V253.6C163.2 250.8 164.9 247.6 166.9 246.5Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M276 109.6L270.8 165.7C270.8 168.4 269.2 171.6 267.2 172.7L226.9 196L222 204.6L217 201C216 200.7 215.4 199.5 215.4 197.8V141C215.4 138.3 217 135.1 219 134L267.3 106.1C268.1 105.5 269.1 105.5 269.9 106.1L270 106L276 109.6Z"
          fill="#5EB8DD"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M226.1 138L274.4 110.1C276.4 108.9 278 110.2 278 113V169.8C278 172.5 276.4 175.7 274.4 176.8L226.1 204.7C224.1 205.9 222.5 204.6 222.5 201.9V145C222.5 142.3 224.1 139.1 226.1 138Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M216 145.6L211.5 201.8C211.5 204.5 209.9 207.7 207.9 208.8L167.7 232.1L163 240.6L157.7 237.2C156.7 236.9 156 235.8 156 234V177.2C156 174.5 157.6 171.3 159.6 170.2L207.9 142.3C208.7 141.7 209.7 141.7 210.5 142.3L210.6 142.2L216 145.6Z"
          fill="#5EB8DD"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M166.9 174.2L215.2 146.3C217.2 145.1 218.8 146.4 218.8 149.2V206C218.8 208.7 217.2 211.9 215.2 213L166.9 240.9C164.9 242.1 163.3 240.8 163.3 238.1V181.3C163.2 178.5 164.9 175.3 166.9 174.2Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M235.9 161L264.3 144.6V153.6L235.9 170V161Z"
          fill="#E4E0EA"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M237.6 224.7L266 208.3V217.3L237.6 233.7V224.7ZM237.6 239.7L266 223.3V232.3L237.6 248.7V239.7Z"
          fill="#E4E0EA"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.4 191.2L194.3 197V208L186.1 212.8V201.8L176 207.6V198.6L186.1 192.8V180.8L194.3 176V188L204.4 182.2V191.2Z"
          fill="#E4E0EA"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M205.4 248.6L197.6 261.6L204.7 265.3L199 275L191.9 271.3L184.8 283.2L179 280.2L186.1 268.3L179 264.6L184.8 254.9L191.9 258.6L199.7 245.6L205.4 248.6Z"
          fill="#E4E0EA"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    )
  },
  {
    title: 'Crypto Calendar',
    subtitle: 'Upcoming crypto events',
    groupHref: 'https://calendar.heybeluga.com/',
    hoverBackground: 'hover:bg-green-50',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M233.9 132.3L227.5 128.6V240.3L150.7 284.6L157.3 288.4L138.2 321.4L112.6 306.7L112.7 306.6L112.5 306.7V151.1L227.4 84.9L227.5 84.7L253 99.3L233.9 132.3Z"
          fill="#E1EBF1"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M118.6 153.6L118.5 309.4Z"
          fill="white"
        />
        <path
          d="M118.6 153.6L118.5 309.4"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125.6 157.6L125.5 314.4Z"
          fill="white"
        />
        <path
          d="M125.6 157.6L125.5 314.4"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.5 162.4V317.4Z"
          fill="white"
        />
        <path
          d="M132.5 162.4V317.4"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.3 151L138.4 165.6V194.6L112.3 180V151Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.3 151L138.4 165.6L253.8 99.3001L227.7 84.6001L112.3 151Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.2 165.8L253.2 99.5V255.1L138.2 321.4V165.8Z"
          fill="#DDE7ED"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.2 193.8L253.3 127.4C253.3 127.4 253.3 154.6 253.3 183.9C253.3 240.4 287.7 244.4 287.7 244.4L172.6 310.8C172.6 310.8 138.2 304.7 138.2 250.9C138.3 221.4 138.2 193.8 138.2 193.8Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.2 193.8L253.3 127.4L253.5 131.8L224.3 149.6L198.6 161.3L173.2 181.7L146.4 194L138.5 201.2L138.2 193.8Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M189.4 178.7L207.8 168.1C209.3 167.2 210.5 168.2 210.5 170.3V170.7C210.5 172.8 209.5 174.8 207.8 176.1L189.4 186.7C187.9 187.6 186.7 186.6 186.7 184.5V184C186.7 181.9 187.7 179.9 189.4 178.7Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187.7 230.7L210.3 217.7L195.4 270.7L207.9 263.5L226.8 196.1L187.7 218.6V230.7Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M208 275.7C194.2 283.7 183.6 281.3 177.7 277.9C169.2 273.1 165.5 264.1 165.4 251.6C165.3 228.9 180 201.6 199.9 190.1C205.9 185.4 207.7 196.8 201.9 199.9C184.3 209.3 173.7 230.7 173.7 252.1C173.7 267.3 188.1 279.7 202.9 270.8C242.5 247 230.9 217 235 218.6C239.1 220.2 244.8 254.4 208 275.7Z"
          fill="#56DC7F"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.3 165.8L253.3 99.5V128L138.3 194.3V165.8Z"
          fill="#70C3E6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M170.3 156.4C173.2 154.7 175.5 156.1 175.5 159.3C175.3 162.9 173.3 166.3 170.3 168.2C167.4 169.9 165.1 168.5 165.1 165.3C165.3 161.7 167.3 158.4 170.3 156.4Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M218.6 127.9C221.5 126.2 223.8 127.6 223.8 130.8C223.6 134.4 221.6 137.8 218.6 139.7C215.7 141.4 213.4 140 213.4 136.8C213.6 133.2 215.5 129.9 218.6 127.9Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M182.5 165.6C180.1 166.9 177.5 167.6 174.7 167.6C172.5 167.6 170.2 167.2 168.1 166.4C167.2 165.8 165.9 164.3 167 161.3C168.4 157.5 170.7 157 171.6 157C173.9 157.7 176 157.7 177.5 156.9C179.6 155.7 180.9 152.6 180.9 148.4C180.9 137.5 172.9 123.7 163.3 118.2C159.6 116.1 156.2 115.6 154 116.8C151.9 118 150.6 121.1 150.6 125.3C150.6 126.5 150.7 127.7 150.9 128.9L141.7 134.2C141 131.3 140.6 128.3 140.6 125.3C140.6 117.3 143.6 111.2 149 108.1C154.4 105 161.3 105.5 168.3 109.5C181 116.8 190.9 133.9 190.9 148.4C190.9 156.4 187.9 162.5 182.5 165.6Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M230.4 138.1C228 139.4 225.4 140.1 222.6 140.1C220.4 140.1 218.1 139.7 216 138.9C215.1 138.3 213.8 136.8 214.9 133.8C216.3 130 218.6 129.5 219.5 129.5C221.8 130.2 223.9 130.2 225.4 129.4C227.5 128.2 228.8 125.1 228.8 120.9C228.8 110 220.8 96.2 211.2 90.7C207.5 88.6 204.1 88 201.9 89.3C199.8 90.5 198.5 93.6 198.5 97.8C198.5 99 198.6 100.2 198.8 101.4L189.6 106.7C188.9 103.8 188.5 100.8 188.5 97.8C188.5 89.8 191.5 83.7 196.9 80.6C202.3 77.5 209.2 78 216.2 82C228.9 89.3 238.8 106.4 238.8 120.9C238.8 128.9 235.8 135 230.4 138.1Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    )
  }
]
const COMPARE_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Crypto IRAs',
    groupHref: 'https://heybeluga.com/comparisons/crypto-iras/',
    hoverBackground: 'hover:bg-sky-100',
    hasHeader: true,
    image: (
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176.835 189.865L289.244 224.215L300.372 217.572L189.077 183.222L176.835 189.865ZM298.926 211.686L286.223 215.073L287.738 220.68L300.441 217.302L298.926 211.686Z"
          fill="#8F785D"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M289.069 223.771L287.833 218.407Z"
          fill="#8F785D"
        />
        <path
          d="M289.069 223.771L287.833 218.407"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176.069 185.094L287.834 218.407L298.979 211.799L188.312 178.442L176.069 185.094Z"
          fill="#F8F4E6"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M251.525 207.584L176.069 185.094L188.312 178.442L261.983 200.645L251.525 207.584Z"
          fill="#89A2B0"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.603 64.9878L165.751 69.1064L290.324 280.576L302.096 288.021L172.603 64.9878Z"
          fill="#8F785C"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M179.021 61L172.177 65.1185L301.669 288.152L308.522 284.033L179.021 61Z"
          fill="#E1ECF2"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M172.7 75.0358L92.7427 121.001C92.3094 121.248 91.9292 121.578 91.624 121.973C91.3188 122.367 91.0947 122.818 90.9644 123.3C90.8341 123.781 90.8003 124.284 90.8649 124.778C90.9295 125.273 91.0913 125.75 91.3408 126.181C91.8509 127.052 92.6842 127.686 93.6593 127.945C94.6345 128.205 95.6726 128.068 96.5477 127.566L176.505 81.601C176.938 81.3542 177.317 81.0242 177.621 80.6301C177.926 80.2361 178.149 79.7857 178.279 79.3049C178.408 78.8242 178.441 78.3225 178.376 77.8289C178.311 77.3353 178.148 76.8595 177.898 76.4289C177.391 75.5576 176.56 74.9222 175.586 74.6612C174.613 74.4002 173.575 74.5348 172.7 75.0358Z"
          fill="#E1ECF2"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M280.494 218.843L181.677 275.213C181.244 275.455 180.864 275.78 180.558 276.171C180.252 276.561 180.028 277.009 179.897 277.487C179.767 277.966 179.733 278.465 179.798 278.957C179.863 279.448 180.025 279.922 180.275 280.35C180.789 281.219 181.625 281.851 182.601 282.108C183.577 282.366 184.615 282.228 185.491 281.726L284.317 225.356C284.75 225.114 285.13 224.788 285.435 224.398C285.741 224.007 285.965 223.56 286.096 223.082C286.226 222.603 286.26 222.104 286.195 221.612C286.13 221.121 285.968 220.647 285.719 220.219C285.203 219.35 284.366 218.718 283.388 218.461C282.411 218.204 281.371 218.341 280.494 218.843Z"
          fill="#E1ECF2"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M161.597 79.825L94.8223 117.501C94.8223 117.501 99.5589 115.524 102.119 123.204C110.8 149.264 135.685 207.637 158.82 239.61C177.723 265.748 198.568 257.398 206.918 260.115C213.762 262.344 211.759 268.587 211.759 268.587L284.028 227.193C284.028 227.193 288.077 218.321 279.57 218.329C270.819 218.347 237.079 215.97 224.271 201.185C197.871 170.728 175.92 107.714 168.049 83.2208C166.029 76.9256 161.597 79.825 161.597 79.825Z"
          fill="#3CB2DC"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.8525 114.836L77 118.946L201.573 330.425L213.345 337.869L83.8525 114.836Z"
          fill="#8F785C"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.2783 110.848L83.4258 114.958L212.918 338L219.771 333.882L90.2783 110.848Z"
          fill="#E1ECF2"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M131.297 210.24L84.1044 239.383L205.421 277.059L216.549 270.415L106.447 236.37L135.685 218.947M215.582 264.651L201.546 266.714L203.714 273.419L216.409 270.432L215.582 264.651ZM97.5134 231.207L83.4775 234.098L83.8867 239.47L98.0011 236.64L97.5134 231.207Z"
          fill="#8F785C"
        />
        <path
          d="M131.297 210.24L84.1044 239.383L205.421 277.059L216.549 270.415L106.447 236.37L135.685 218.947M215.582 264.651L201.546 266.714L203.714 273.419L216.409 270.432L215.582 264.651ZM97.5134 231.207L83.4775 234.098L83.8867 239.47L98.0011 236.64L97.5134 231.207Z"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M204.856 271.26L205.675 277.041Z"
          fill="#8F785C"
        />
        <path
          d="M204.856 271.26L205.675 277.041"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M129.322 206.148L83.6963 233.845L205.004 271.521L216.14 264.869L107.066 231.625L133.78 215.012"
          fill="#E1ECF2"
        />
        <path
          d="M129.322 206.148L83.6963 233.845L205.004 271.521L216.14 264.869L107.066 231.625L133.78 215.012"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M185.787 126.4C185.787 126.4 206.388 140.227 217.655 153.993C228.922 167.759 230.42 172.173 230.42 172.173C230.42 172.173 225.613 177.293 214.364 169.561C203.393 162.012 193.606 159.426 185.491 145.268C185.491 145.268 175.704 125.407 185.787 126.4Z"
          fill="white"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M189.495 129.003C191.367 130.344 193.814 132.155 196.557 134.297C204.801 145.792 211.695 158.197 217.105 171.268C216.235 170.78 215.329 170.223 214.363 169.561C208.572 165.573 203.113 162.961 198.045 159.304L189.495 129.003Z"
          fill="black"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M188.807 91.3274C188.807 91.3274 186.665 69.5597 159.264 73.1035C129.904 76.9085 121.823 111.101 123.103 135.821C125.115 174.524 140.648 207.245 177.601 233.689C217.149 261.987 269.758 251.121 269.758 251.121C269.758 251.121 261.494 283.085 288.025 286.202C288.025 286.202 282.235 283.912 289.514 270.224C297.498 255.213 289.732 246.924 289.749 246.924C289.749 246.924 304.995 240.812 312.118 230.328C319.24 219.845 322.497 221.194 322.497 221.194C322.497 221.194 304.917 214.333 277.733 237.181C277.733 237.181 224.158 225.278 216.827 195.282C206.413 152.695 183.217 121.028 183.217 121.028C183.217 121.028 197.845 114.776 199.404 107.357C201.581 96.9784 188.807 91.3274 188.807 91.3274Z"
          fill="white"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M166.709 102.952C167.536 102.943 168.39 103.936 168.616 105.163C168.842 106.391 168.363 107.392 167.536 107.401C166.709 107.41 165.856 106.408 165.629 105.181C165.403 103.953 165.882 102.952 166.709 102.952Z"
          fill="black"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M167.317 98.3714C167.317 98.3714 181.458 98.1886 188.632 91.6321"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M167.797 115.107C167.797 115.107 174.432 116.613 185.838 113.026C198.942 108.907 199.482 102.046 199.482 102.046"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.251 123.17C175.251 123.17 179.204 123.187 187.659 118.825Z"
          fill="white"
        />
        <path
          d="M175.251 123.17C175.251 123.17 179.204 123.187 187.659 118.825"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M184.437 168.168C184.437 170.658 180.928 172.678 176.6 172.678C172.273 172.678 168.764 170.658 168.764 168.168C168.764 168.09 168.781 168.02 168.781 167.95H168.764V150.371H184.437V167.95H184.419C184.43 168.022 184.435 168.095 184.437 168.168Z"
          fill="white"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M182.529 167.018C182.486 168.847 179.856 170.319 176.617 170.319C173.378 170.319 170.749 168.847 170.705 167.018H170.696V159.896H182.538V167.018H182.529Z"
          fill="#E57429"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176.617 156.544C179.882 156.544 182.538 158.033 182.538 159.87C182.538 161.707 179.882 163.187 176.617 163.187C173.352 163.187 170.696 161.698 170.696 159.87C170.696 158.041 173.343 156.544 176.617 156.544Z"
          fill="#F28F4E"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176.6 146.095C180.928 146.095 184.437 148.124 184.437 150.614C184.437 153.105 180.928 155.133 176.6 155.133C172.273 155.133 168.764 153.113 168.764 150.614C168.764 148.115 172.273 146.095 176.6 146.095Z"
          fill="white"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M135.729 149.596C135.729 149.596 152.185 163.222 159.734 166.244C159.734 166.244 176.461 166.357 182.024 164.128C187.588 161.899 184.976 169.666 182.503 173.645C175.468 184.981 166.595 186.462 158.567 185.974C145.794 185.199 136.652 177.345 136.652 177.345"
          fill="white"
        />
        <path
          d="M135.729 149.596C135.729 149.596 152.185 163.222 159.734 166.244C159.734 166.244 176.461 166.357 182.024 164.128C187.588 161.899 184.976 169.666 182.503 173.645C175.468 184.981 166.595 186.462 158.567 185.974C145.794 185.199 136.652 177.345 136.652 177.345"
          stroke="black"
          strokeWidth="1.74143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Decentralized Exchanges',
    groupHref: 'https://heybeluga.com/comparisons/decentralized-exchanges/',
    hoverBackground: 'hover:bg-violet-100',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.7 148.7C120.8 159.1 106.3 183 106.3 202.2C106.3 221.4 120.8 228.6 138.7 218.2C156.6 207.8 171.1 183.9 171.1 164.7C171.1 145.5 156.6 138.3 138.7 148.7Z"
          fill="#E78B54"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M262.9 160.1L290 208C281.6 214.5 273.7 221.6 266.3 229.2C260.3 235.3 256.5 243.7 248.5 250.4C234.8 261.9 225.4 261.7 194.5 267.7C155.3 275.3 136.2 252.9 136.2 252.9C123 252.5 121.9 236.4 124.4 233.4C126.9 230.4 133.3 235.5 133.3 235.5C117.4 233.3 115.8 221.1 117.7 216.4C119.7 211.5 137.1 210.5 137.1 210.5L244.5 169.4L262.9 160.1Z"
          fill="#FFC8C8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M230.4 227.4C230.4 227.4 207.7 239 186 224.4Z"
          fill="#FFC8C8"
        />
        <path
          d="M230.4 227.4C230.4 227.4 207.7 239 186 224.4"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M211.8 234.2C206.8 238.2 203.9 244.3 204.2 250.7Z"
          fill="#FFC8C8"
        />
        <path
          d="M211.8 234.2C206.8 238.2 203.9 244.3 204.2 250.7"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M131.9 132.6C131.9 132.6 160 159.3 162.3 161C164.6 162.7 199.4 160 213.9 180.9L192.4 205C194.7 213.4 198 221.5 202.1 229.1C208.7 240.8 217.3 254.3 237.2 257.5C237.2 257.5 242.1 262.4 237.6 268.1C232.2 275 221.5 273.6 221.5 273.6C221.5 273.6 215 286 194 277.8C194 277.8 187.1 284.9 169.9 276.1C169.9 276.1 160.5 276.9 150.5 269.7C129.4 254.7 124.7 226.9 124.7 226.9C124.7 226.9 121 208.1 112.9 196.4C106 186.5 94.7 174.8 94.7 174.8C94.7 174.8 97.2 159.5 112 145.5C126.7 131.8 131.9 132.6 131.9 132.6Z"
          fill="#7F5A50"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M187.3 250.7C194.9 263.1 207.6 271.5 222 273.6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M169.5 257.5C175.2 266.9 183.9 274 194.2 277.8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M154.3 260.1C158.6 267.1 164.5 272.9 171.7 277"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.5 151C123.3 161.5 108.5 185.7 108.5 205.2C108.4 209.1 109.2 212.9 110.7 216.5L110.5 216.8L87.8999 195.9C86.3999 195 85.1999 193.8 84.0999 192.4L83.7999 192.1L83.8999 192C81.3999 188.5 79.8999 183.7 79.8999 177.6C79.8999 158.4 94.3999 134.5 112.3 124.1C123 117.9 132.4 118 138.3 123.1L138.4 123L164.9 147.8C158.7 144.9 150.5 145.8 141.5 151Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M117.6 216C117.6 216 119.8 208.9 125.6 208C131.4 207.1 134.8 210.7 135.3 214.8C135.9 220.1 132.9 223.6 129.8 226.7C127.9 228.6 126.2 230.8 124.7 233.1"
          fill="#FFC8C8"
        />
        <path
          d="M117.6 216C117.6 216 119.8 208.9 125.6 208C131.4 207.1 134.8 210.7 135.3 214.8C135.9 220.1 132.9 223.6 129.8 226.7C127.9 228.6 126.2 230.8 124.7 233.1"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M123.9 233.8C123.9 233.8 125.2 227.5 131.1 226.6C137 225.7 140.3 229.3 140.8 233.4C141.7 240.7 131.9 249.1 131.9 249.1"
          fill="#FFC8C8"
        />
        <path
          d="M123.9 233.8C123.9 233.8 125.2 227.5 131.1 226.6C137 225.7 140.3 229.3 140.8 233.4C141.7 240.7 131.9 249.1 131.9 249.1"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145.9 266.4L141.7 261.5C141.7 261.5 146.6 252.9 145.9 249C143.3 234.5 132.3 241.9 129.4 250.7C128.3 254.2 131.1 263.3 145.9 266.4Z"
          fill="#FFC8C8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M153.9 271.9L150.2 268.8C150.2 268.8 154.7 262.6 154.1 259.4C151.5 245.4 142.3 252.3 139.9 259.8C138.9 262.7 140 270.1 153.9 271.9Z"
          fill="#FFC8C8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M262.1 159.7C262.1 159.7 229.5 173.8 223.2 176.2C216.9 178.6 195.1 171.4 183.5 172.8C171.9 174.2 137.4 199.1 137.4 199.1C137.4 199.1 140.5 208.2 152.2 208C163.9 207.8 178.8 203.3 178.8 203.3L199.9 213.9"
          fill="#FFC8C8"
        />
        <path
          d="M262.1 159.7C262.1 159.7 229.5 173.8 223.2 176.2C216.9 178.6 195.1 171.4 183.5 172.8C171.9 174.2 137.4 199.1 137.4 199.1C137.4 199.1 140.5 208.2 152.2 208C163.9 207.8 178.8 203.3 178.8 203.3L199.9 213.9"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M234.5 165.6C234.5 165.6 223.7 184.6 241.7 210.9C263.5 242.8 281.4 231.3 281.4 231.3L312.3 213.3C312.3 213.3 255.6 177.1 270.3 144.7L234.5 165.6Z"
          fill="#93D8F5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M272.2 217.1C274.8 217.1 276.9 219.2 276.9 221.7C276.9 224.3 274.8 226.4 272.3 226.4C269.8 226.4 267.6 224.3 267.6 221.8C267.5 219.2 269.6 217.1 272.2 217.1Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M320 191.3C317.7 172.7 302.9 152.1 286.9 145.3C270.9 138.5 259.8 148.1 262.1 166.7C264.4 185.3 279.2 205.9 295.2 212.7C311.2 219.5 322.3 209.9 320 191.3Z"
          fill="#70C3E6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Crypto Tax Software',
    groupHref: 'https://heybeluga.com/comparisons/crypto-tax-software/',
    hoverBackground: 'hover:bg-yellow-100',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.8 150.8L224.1 74.2002L241.2 237.1L145.1 306.2L122.8 150.8Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120.6 149.4C120.6 149.4 120.6 303.1 120.6 308.6C120.6 318 125.6 322.7 131.1 325C137.6 327.8 144.1 321.9 144.1 321.9L247.7 260.9C247.7 260.9 233.4 255.9 233.4 247.7C233.4 238.9 233.1 83.5 233.1 83.5L120.6 149.4Z"
          fill="#E9F1F3"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M202.1 257.2C202.1 257.2 201.1 232 206.1 244.2C211.1 256.4 207.8 249.7 214.1 250.2C220.4 250.7 209.3 239.5 217.1 243.2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.6 180.7C141.3 181 141.2 181.4 141.1 181.8C141 182.3 140.9 182.9 141 183.5C141 184 141 184.5 141.1 185C141.2 185.3 141.4 185.5 141.7 185.5C142.2 185.4 142.7 185.2 143.2 184.9L149.2 181.5V200.4C149.2 200.8 149.2 201.2 149.3 201.7C149.3 202 149.4 202.3 149.6 202.5C149.8 202.8 150.1 202.9 150.4 202.8C150.9 202.7 151.5 202.4 151.9 202.1C152.5 201.8 153 201.4 153.5 201C153.9 200.7 154.2 200.2 154.3 199.8C154.4 199.4 154.5 199.1 154.6 198.7C154.6 198.3 154.7 197.8 154.7 197.4V178.4L160.6 175C161.2 174.7 161.7 174.3 162.2 173.7C162.5 173.4 162.6 173 162.7 172.6C162.8 172.1 162.9 171.5 162.8 170.9C162.8 170.4 162.8 169.9 162.7 169.4C162.6 169.1 162.4 168.9 162.1 168.9C161.6 169 161.1 169.2 160.6 169.5L143.3 179.5C142.6 179.8 142.1 180.2 141.6 180.7ZM175.1 161.1C174.5 161.5 174 161.9 173.6 162.5C173.1 163.1 172.8 163.8 172.6 164.5L164.2 190.4C163.9 191.1 163.7 191.9 163.7 192.6C163.7 193.5 164.3 194 165.5 194C166.1 194 166.6 193.9 167.2 193.7C167.6 193.5 167.9 193.2 168.2 192.8C168.4 192.5 168.6 192.1 168.8 191.8C168.9 191.5 169.1 191.1 169.3 190.4L170.9 185.4L179.5 180.4L181.1 183.5C181.3 183.9 181.5 184.2 181.6 184.4C181.7 184.6 181.9 184.7 182.2 184.8C182.6 184.9 182.9 184.8 183.2 184.6C183.8 184.2 184.4 183.6 184.9 183C186.1 181.6 186.7 180.4 186.7 179.5C186.7 178.9 186.5 178.4 186.2 177.9L177.8 161.7C177.1 160.6 176.3 160.5 175.1 161.1ZM177.2 176.1L173.1 178.5L175.2 172.1L177.2 176.1ZM208.5 147.1C209.1 146.2 209.4 145.2 209.6 144.1C209.6 143.4 209.1 142.7 208.4 142.5C207.8 142.1 207 142 206.4 142.3C205.6 143 204.9 143.9 204.5 144.9L198.6 156.5L192.7 151.7C192.2 151.2 191.4 151 190.8 151.3C189.9 152 189.2 152.8 188.8 153.8C188.2 154.7 187.7 155.7 187.6 156.8C187.6 157.5 188.1 158.2 188.7 158.5L194.9 163.2L188.7 175.1C188.1 176 187.8 177.1 187.6 178.1C187.7 178.8 188.1 179.4 188.8 179.7C189.4 180.1 190.2 180.2 190.8 179.9C191.6 179.2 192.3 178.3 192.7 177.3L198.6 165.7L204.5 170.5C205 171 205.8 171.2 206.4 170.9C207.2 170.2 207.9 169.4 208.4 168.4C209 167.5 209.4 166.5 209.6 165.4C209.6 164.7 209.2 164 208.5 163.6L202.3 158.9L208.5 147.1Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.5 247.9L187.7 219.7C189.6 218.6 191.1 219.5 191.1 221.6C191 224 189.7 226.1 187.7 227.4L141.5 255.6C139.6 256.7 138.1 255.8 138.1 253.7C138.2 251.4 139.5 249.2 141.5 247.9Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.5 230.9L176.7 209.7C178.6 208.6 180.1 209.5 180.1 211.6C180 214 178.7 216.1 176.7 217.4L141.5 238.6C139.6 239.7 138.1 238.8 138.1 236.7C138.2 234.4 139.5 232.2 141.5 230.9Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200.5 211.9L215.7 202.7C217.6 201.6 219.1 202.5 219.1 204.6C219 207 217.7 209.1 215.7 210.4L200.5 219.6C198.6 220.7 197.1 219.8 197.1 217.7C197.2 215.4 198.5 213.2 200.5 211.9Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.5 262.1L172.7 242.9C174.6 241.8 176.1 242.7 176.1 244.8C176 247.2 174.7 249.3 172.7 250.6L141.5 269.8C139.6 270.9 138.1 270 138.1 267.9C138.2 265.5 139.5 263.4 141.5 262.1Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128.9 165.3C125.9 167.1 123.5 165.4 123.5 161.4V134.6C123.5 129.2 126.8 122.8 130.9 120.3C135 117.8 138.3 120.2 138.3 125.6V139L136.2 140.3V127C136.2 123.1 133.8 121.4 130.8 123.2C127.8 125 125.4 129.6 125.4 133.5V160.3C125.4 162.7 126.9 163.8 128.7 162.7C130.7 161.2 132 158.8 132 156.3V132.8C132 131.9 131.4 131.5 130.8 131.9C130 132.5 129.6 133.3 129.6 134.3V144.2L127.5 145.5V135.6C127.6 133.1 128.8 130.7 130.8 129.2C132.6 128.1 134.1 129.2 134.1 131.6V155.1C134.3 158.8 131.9 163.5 128.9 165.3Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M278.1 182.6C279.9 184.4 279.9 187.4 278.1 189.2L230.2 237.2L218.5 242.4L223.7 230.6L271.6 182.6C273.3 180.8 276.2 180.8 278.1 182.6Z"
          fill="#70C3E6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M269.1 185.1L271.5 182.7C273.3 180.9 276.2 180.8 278.1 182.6C279.9 184.4 280 187.3 278.2 189.2C278.2 189.2 278.2 189.2 278.1 189.3L275.7 191.7L269.1 185.1Z"
          fill="#FF3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M266.2 188L269.1 185.1L275.7 191.7L272.8 194.6L266.2 188Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.6 230.8L230.1 237.3L218.5 242.4L223.6 230.8Z"
          fill="#F9AB7C"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'NFT Marketplaces',
    groupHref: 'https://heybeluga.com/comparisons/nft-marketplaces/',
    hoverBackground: 'hover:bg-orange-100',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M291.4 69.6998L282.4 84.6998L273.1 80.1998L273 234C268.3 237 264.6 243.4 264.6 248.7C264.6 248.8 264.6 248.8 264.6 248.9L134.8 324L143.4 328.7L135.4 343.7L117.3 334.1L117 334H116.9L108.7 329.2H108.6V329.1H108.5L108.6 329L108.7 156.7C113.5 153.8 117.4 147.2 117.4 141.8C117.4 141.7 117.4 141.7 117.4 141.6L264.7 56.2998V56.3998L264.8 56.2998L272.8 60.7998L272.7 60.9998C272.8 60.8998 273 60.8998 273.1 60.7998V61.1998L273.2 60.9998L291.4 69.6998Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M136.1 171.9L109.1 156.4C113.7 153.4 117.4 147 117.4 141.8C117.4 141.7 117.4 141.7 117.4 141.6L117.9 141.3L144.8 156.8L136.1 171.9Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M282.4 65.8999C282.6 70.7999 286.3 72.6999 290.8 70.2999L290.7 243.6C286 246.6 282.3 253 282.3 258.3C282.3 258.4 282.3 258.4 282.3 258.5L135 343.7C135 343.6 135 343.6 135 343.5C135 338.1 131.1 336 126.3 338.7L126.4 166.1C131.2 163.2 135.1 156.6 135.1 151.2C135.1 151.1 135.1 151.1 135.1 151L282.4 65.8999Z"
          fill="#E7AD5A"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M273.1 253.2L141 329.7C139.7 328.1 137.8 327.1 135.7 326.8L135.8 168.2C138.2 165 140.2 161.5 141.6 157.8L273.3 81.5C274.5 83.3 276.4 84.6 278.5 85L278.4 243.2C276.3 246.3 274.5 249.7 273.1 253.2Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M273.5 81.8002C274 82.6002 274.7 83.2002 275.5 83.8002L275.4 240.7C273.2 243.8 271.4 247.1 270 250.7L137.9 327.2C137.3 326.5 136.5 325.9 135.7 325.4L135.8 168.3C138.2 165.1 140.2 161.6 141.6 157.9L273.2 81.7002C273.3 81.7002 273.4 81.7002 273.5 81.8002Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M261.5 246.4L149.7 311C148.6 309.6 146.9 308.7 145.1 308.5V169.6C147.2 166.9 148.9 163.9 150.1 160.7L261.5 96.2998C262.6 97.8998 264.2 98.8998 266 99.2998L265.9 237.9C264.2 240.5 262.6 243.4 261.5 246.4Z"
          fill="#799EB0"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.7 198V233.5L234.7 236.4V248.6L230.4 251.1V256.6L210.1 268.4V275.5L186 289.5V241.2L181.4 243.9V238L176.6 240.8V234.5L181.4 231.7V219.3L186 216.6V197.1L210.1 183.1L222.5 175.9L239.7 165.9V173.4L245 170.3V195L239.7 198ZM210.8 151.9L215.6 149.1V163L210.8 165.8V151.9Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M230.1 215.2V221.1L206.1 235V229.1L225.4 217.9V212L235.3 206.3V212.2L230.1 215.2ZM195.8 229.2L215.8 217.6V223.5L195.8 235.1V229.2ZM191 226.1L195.8 223.3V229.2L191 232V226.1ZM185.7 222.7L191 219.6V226.1L185.7 229.2V222.7ZM191 194.3L195.8 191.5V199L191 201.8V194.3ZM195.8 271.6L201.1 268.5V274.8L206.5 271.6V277.5L201.1 280.7L195.7 283.9L190.4 287V262.5L195.8 259.3V271.6Z"
          fill="#FBE0EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M190.3 262.4L191.8 261.5V286L190.3 286.9V262.4ZM205 272.5L206.5 271.6V277.5L205 278.4V272.5Z"
          fill="#738587"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M195.8 223.5V216.8L191 219.6V208.2L195.8 205.4V199L239.7 173.5V198L195.8 223.5Z"
          fill="#B6B6B6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M210.9 238.8L225.4 230.4V236.1L210.9 244.5V238.8Z"
          fill="#9A3A2C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.4 231.7L186.5 228.7V235L181.4 238V231.7Z"
          fill="#F6FD36"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201 201.8L234.9 182.2V194L201 213.6V201.8Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200.9 158.7V151.6L225.3 137.4V144.5L200.9 158.7ZM205.8 162.7V174.1L200.4 177.3V183.4L195.3 186.4V191.9L186.1 197.3V185.9L191.2 182.9V177.4L196.6 174.2V168.1L205.8 162.7Z"
          fill="#1C72C3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M225.2 162.9V169L230.6 165.8V171.3L195.2 191.8V186.3L200.2 183.4V177.3L205.5 174.2V162.8L220.5 154.1V165.5L225.2 162.9Z"
          fill="#F6FD36"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M240.2 165.7L230.5 171.4V165.9L225.2 169V162.9L220.4 165.7V154.3L229.6 148.9V155L235 151.8V157.3L240.1 154.3V165.7H240.2Z"
          fill="#CC2822"
        />
      </svg>
    )
  },
  {
    title: 'Staking Platforms',
    groupHref:
      'https://heybeluga.com/comparisons/centralized-crypto-staking-platforms/',
    hoverBackground: 'hover:bg-lime-100',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M131.6 244.2C131.6 244.2 137.2 280.9 138.1 286.3C139 291.7 145.1 294.3 151.9 294C158.7 293.7 163.7 290.3 164.1 285.2C164.5 280.1 172.9 242.7 172.9 242.7L131.6 244.2Z"
          fill="#F8B9E2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M126.2 176.8C126.2 176.8 120.3 152.9 122.7 144.5C125.1 136.1 147.7 147.4 157 160.1L126.2 176.8Z"
          fill="#F8B9E2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M294.2 210.1C293 224.1 288.8 271.2 288.4 275.5C287.9 280.6 281.8 285.1 275 285.5C268.2 285.9 259.4 283.2 258.6 277.8C258.3 276.1 257.5 271 256.5 264.7L229.3 280.5C226.3 282.2 223.1 283.8 219.9 285.1C217.6 295.8 215 308.3 214.7 311.1C214.2 316.2 209.3 319.5 202.5 319.9C195.7 320.3 189.6 317.6 188.7 312.2C188.3 309.6 186.8 299.9 185.3 290.4C143.3 287 112 250.3 115.4 208.3C117.4 183.3 131.5 160.9 153.2 148.4L181 132.3C217.4 111.3 264 123.8 285 160.3C293.6 175.5 296.8 193 294.2 210.1Z"
          fill="#F8B9E2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M170.7 155.1L207 134.1C210.5 132.4 214.6 132.5 218.1 134.3C221.2 136.1 221.4 139 218.4 140.7L182.1 161.7C178.6 163.4 174.5 163.3 171 161.5C167.9 159.7 167.8 156.8 170.7 155.1Z"
          fill="#A91257"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M171.5 161.7L207 141.1C209.8 139.5 214.4 139.5 217.6 141L182.1 161.6C179.3 163.3 174.7 163.3 171.5 161.7Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M178.6 186.3C178.6 186.3 203.3 170.1 211.9 179.2C223 191 210.8 213 202.3 225.7"
          fill="#F8B9E2"
        />
        <path
          d="M178.6 186.3C178.6 186.3 203.3 170.1 211.9 179.2C223 191 210.8 213 202.3 225.7"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M142.9 257.1L134.7 261.8L131.6 256.4C131.2 256.2 130.8 256 130.4 255.8C120.6 250.1 112.6 236.3 112.6 224.9C112.6 224.4 112.6 223.9 112.7 223.4L109.7 218.2L116.7 214.2C120 211.5 124.9 211.5 130.4 214.7C140.2 220.4 148.2 234.2 148.2 245.6C148.2 251.2 146.2 255.2 142.9 257.1Z"
          fill="#F8B9E2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.7 195.6C130.3 196.5 132.2 200 131.9 203.3C131.6 206.6 129.3 208.7 126.7 207.8C124.1 206.9 122.2 203.4 122.5 200.1C122.8 196.8 125.2 194.7 127.7 195.6ZM154.5 206.7C157.1 207.6 159 211.1 158.7 214.4C158.4 217.7 156.1 219.8 153.5 218.9C150.9 218 149 214.5 149.3 211.2C149.6 207.9 151.9 205.8 154.5 206.7Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.7 219.2C132.5 224.9 140.5 238.7 140.5 250.1C140.5 261.5 132.5 266 122.7 260.4C112.9 254.8 104.9 240.9 104.9 229.5C104.9 218.1 112.9 213.6 122.7 219.2Z"
          fill="#F8B9E2"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.6 230C118.2 230.9 119.6 234.8 119.6 238.6C119.6 242.4 118.3 244.7 116.6 243.8C114.9 242.9 113.6 239 113.6 235.2C113.6 231.4 114.9 229.1 116.6 230ZM127 236.1C128.6 237 130 240.9 130 244.7C130 248.5 128.7 250.8 127 249.9C125.3 249 124 245.1 124 241.3C124 237.5 125.4 235.1 127 236.1Z"
          fill="#7F1744"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M217.8 86.5999L215.1 91.2999C215.5 93.2999 215.8 95.1999 215.7 97.2999C215.7 112.4 205.4 130.4 192.7 137.6C190.9 138.6 189 139.4 187 139.9L185 143.4L177.1 139C176.9 138.9 176.6 138.7 176.4 138.6L176.2 138.5C172.2 135.8 169.7 130.5 169.7 123.1C169.7 108 180 89.9999 192.6 82.7999C198.9 79.2999 204.6 79.0999 208.7 81.5999V81.4999L217.8 86.5999Z"
          fill="#FBD730"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.9 101.6C223.9 116.7 213.6 134.7 201 141.9C188.4 149.1 178 142.6 178 127.5C178 112.4 188.3 94.4 200.9 87.2C213.5 80 223.9 86.5 223.9 101.6Z"
          fill="#EF9762"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M216.5 105.7C216.5 115.9 209.5 128.2 200.9 133C192.3 137.8 185.3 133.5 185.3 123.2C185.3 112.9 192.3 100.7 200.9 95.9C209.5 91.1 216.5 95.5 216.5 105.7Z"
          fill="#EFB46F"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Public Stocks',
    groupHref: 'https://heybeluga.com/comparisons/crypto-stocks/',
    hoverBackground: 'hover:bg-red-100',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M274.1 85.7001V232.4C274.1 236.6 271.3 241.6 267.9 243.5L134.1 320.3L127.3 332.1L118.6 327.1L118.7 327C117.6 326.3 116.9 324.8 116.9 322.7V162.6C116.9 158.4 119.7 153.4 123.1 151.5L268 68.3002C269.9 67.2002 271.6 67.3002 272.7 68.3002L272.9 67.9002L281.6 72.9002L274.1 85.7001Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.1 156.5L277 73.3C280.4 71.3 283.2 73.1 283.2 77.3V237.4C283.2 241.6 280.4 246.6 277 248.5L132.1 331.7C128.7 333.7 125.9 331.9 125.9 327.7V167.6C125.9 163.4 128.6 158.4 132.1 156.5Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M262.8 134.4C230.8 146.2 228.8 183.6 216.9 189C205 194.4 201.4 184.6 189.7 189.9C178 195.2 165.6 232 143.9 241.7"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M151 244.8L162.3 238.3V262.5L151 269V244.8ZM171.7 227.8L183.2 221.6L182.8 250.7L171.5 257.2L171.7 227.8ZM192 208.4L203.5 202.2L203.2 238.9L191.9 245.4L192 208.4ZM212.4 209.5L223.7 203V227.2L212.4 233.7V209.5ZM232.7 185.5L244.2 179.3V215.4L232.9 221.9L232.7 185.5ZM253 156.4L264.5 150.2L264.6 203.6L253.3 210.1L253 156.4Z"
          fill="#70C3E6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M125.9 174V167.6C125.9 163.4 128.7 158.4 132.1 156.5L277 73.3C280.4 71.3 283.2 73.1 283.2 77.3V83.7L125.9 174Z"
          fill="#E5EBED"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M138.9 200.1V279.8L273.5 203.3"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.3 160.5C135.2 160 135.9 160.5 135.9 161.5C135.9 162.6 135.3 163.7 134.3 164.3C133.4 164.8 132.7 164.3 132.7 163.3C132.8 162.2 133.4 161.1 134.3 160.5ZM141.9 156.1C142.8 155.6 143.5 156.1 143.5 157.1C143.5 158.2 142.9 159.3 141.9 159.9C141 160.4 140.3 159.9 140.3 158.9C140.4 157.8 141 156.8 141.9 156.1ZM149.5 151.8C150.4 151.3 151.1 151.8 151.1 152.8C151.1 153.9 150.5 155 149.5 155.6C148.6 156.1 147.9 155.6 147.9 154.6C148 153.4 148.6 152.4 149.5 151.8Z"
          fill="#E5EBED"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M257.3 128.8L255.3 129.9L251.8 136.2L248.3 133.9L245.5 135.5C241.1 138 237.6 135.6 237.6 130.2C237.6 124.8 241.2 118.4 245.5 115.9L257.3 109.2C261.7 106.7 265.2 109.1 265.2 114.5C265.2 119.9 261.7 126.3 257.3 128.8Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M174.2 270.1L197.6 256.7C202.5 253.9 206.5 256.4 206.5 262.4C206.5 268.4 202.5 275.4 197.6 278.2L174.2 291.6C169.3 294.4 165.3 291.9 165.3 285.9C165.3 279.9 169.3 272.9 174.2 270.1Z"
          fill="#4ED674"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.5 242L246.9 228.6C251.8 225.8 255.8 228.3 255.8 234.2C255.8 240.1 251.8 247.2 246.9 250L223.5 263.4C218.6 266.2 214.6 263.7 214.6 257.8C214.6 251.9 218.6 244.7 223.5 242Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.4 274.8C181.5 274 181.2 273.3 180.6 272.8C180 272.4 179.2 272.5 178.6 272.9L175.4 274.8C175 275 174.6 275.4 174.4 275.8C174.3 276 174.3 276.1 174.3 276.3C174.3 276.5 174.3 276.7 174.3 276.9V285.5C174.3 285.8 174.3 286 174.4 286.3C174.5 286.6 174.8 286.6 175.5 286.3L178.9 284.4C179.8 283.9 180.5 283.1 181 282.2C181.6 281.3 181.9 280.2 181.9 279.1C182 278.3 181.7 277.6 181.1 277.1C181.2 276.2 181.4 275.5 181.4 274.8ZM178.6 281.6L176.5 282.8V276.9L178.3 275.9C178.5 275.8 178.7 275.7 178.9 275.7C179 275.7 179.1 275.9 179.1 276.1C179.1 276.3 179.1 276.5 179.1 276.7C179 277 178.8 277.2 178.5 277.4C178.2 277.6 177.9 277.8 177.7 278.1C177.5 278.4 177.4 278.8 177.5 279.1C177.4 279.4 177.5 279.7 177.7 279.9C177.9 279.9 178.2 279.9 178.4 279.7C178.6 279.6 178.9 279.5 179.1 279.4C179.2 279.4 179.3 279.5 179.3 279.6C179.4 279.8 179.4 280 179.4 280.2C179.4 280.7 179.1 281.3 178.6 281.6ZM188.6 268.5V273.3C188.6 274.1 188.4 274.8 188.1 275.5C187.8 276.2 187.3 276.8 186.7 277.1C186.4 277.3 186.1 277.4 185.8 277.4C185.6 277.4 185.3 277.2 185.2 277C184.9 276.5 184.8 276 184.8 275.4V270.7C184.8 270.4 184.8 270.1 184.6 269.8C184.5 269.7 184.4 269.6 184.3 269.7C184.1 269.8 183.8 269.9 183.6 270C183.4 270.1 183.1 270.3 182.9 270.5C182.7 270.6 182.6 270.8 182.6 271C182.5 271.2 182.5 271.3 182.5 271.5C182.5 271.6 182.5 271.8 182.5 272.1V276.8C182.4 277.9 182.8 279.1 183.6 279.9C183.9 280.3 184.4 280.5 184.9 280.5C185.5 280.5 186.2 280.3 186.7 280C187.4 279.6 188 279.1 188.5 278.5C189 277.9 189.5 277.2 189.8 276.5C190.5 275.1 190.8 273.7 190.9 272.2V267.5C190.9 267.2 190.9 267 190.8 266.7C190.8 266.6 190.7 266.5 190.6 266.5C190.5 266.5 190.4 266.5 190.3 266.5C190.1 266.6 189.9 266.6 189.7 266.8C189.5 266.9 189.3 267.1 189.1 267.2C188.9 267.4 188.8 267.5 188.7 267.8C188.6 267.9 188.5 268.2 188.6 268.5ZM198.6 261.3C198.4 261.4 198.3 261.5 198.2 261.7C198 262 197.9 262.3 197.8 262.6L195.8 267.6L193.8 264.9C193.7 264.7 193.5 264.6 193.3 264.5C193.2 264.5 193 264.5 192.9 264.6C192.6 264.9 192.3 265.2 192.1 265.5C191.8 265.9 191.6 266.3 191.5 266.8C191.5 267 191.6 267.3 191.8 267.5L194.6 270.9V273.8C194.6 274 194.6 274.2 194.6 274.3C194.6 274.4 194.7 274.5 194.7 274.6C194.8 274.7 194.9 274.8 195.1 274.7C195.3 274.6 195.6 274.5 195.8 274.4C196 274.3 196.3 274.1 196.4 273.9C196.6 273.8 196.7 273.6 196.8 273.4C196.9 273.2 196.9 273.1 196.9 272.9C196.9 272.8 196.9 272.6 196.9 272.4V269.4L199.7 262.8C199.9 262.5 200 262.1 200 261.8C200 261.5 199.7 261.2 199.4 261.1C199.1 261.2 198.8 261.2 198.6 261.3Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M222.5 257.9C222.8 258.1 223.1 258.3 223.4 258.3C223.7 258.3 224 258.3 224.3 258.2C224.7 258.1 225.1 257.9 225.4 257.7C226.3 257.2 227 256.4 227.6 255.6C228 255.1 228.3 254.5 228.5 253.9C228.7 253.3 228.8 252.6 228.8 251.9C228.8 251.4 228.7 250.8 228.5 250.4C228.3 250.1 228 249.9 227.7 249.9C227.3 249.9 227 249.9 226.6 250C226.2 250.1 225.9 250.2 225.5 250.3C225.2 250.4 225 250.5 224.7 250.4C224.5 250.3 224.3 250.1 224.4 249.9C224.4 249.6 224.5 249.3 224.7 249.1C224.9 248.8 225.1 248.6 225.4 248.5C225.6 248.4 225.8 248.3 226.1 248.3C226.2 248.3 226.2 248.4 226.3 248.4L226.4 248.5C226.6 248.6 226.9 248.5 227.1 248.4C227.5 248.1 227.8 247.6 228 247.1C228.2 246.8 228.3 246.4 228.3 246.1C228.3 245.9 228.1 245.7 227.9 245.6L227.6 245.5C227.3 245.4 227 245.4 226.7 245.5C226.2 245.6 225.7 245.8 225.3 246.1C224.3 246.7 223.5 247.5 223 248.4C222.5 249.3 222.2 250.3 222.2 251.3C222.2 251.8 222.3 252.4 222.5 252.8C222.7 253.1 223 253.3 223.3 253.4C223.7 253.4 224 253.4 224.4 253.4C224.8 253.3 225.1 253.3 225.5 253.1C225.8 253 226 253 226.3 253C226.5 253 226.7 253.2 226.6 253.4C226.6 254.2 226.1 254.9 225.4 255.3C225.2 255.4 225 255.4 224.8 255.4C224.6 255.4 224.4 255.3 224.3 255.2C224 255 223.6 254.9 223.3 255C223 255.2 222.8 255.5 222.6 255.8C222.3 256.2 222.1 256.7 222 257.2C222 257.5 222.1 257.7 222.3 257.9H222.5ZM232.1 249.5L234.6 248.1C234.8 248 235.1 247.8 235.3 247.6C235.7 247.2 235.8 246.6 235.8 246C235.8 245.3 235.7 245 235.4 245C235.3 245 235.2 245 235.1 245C234.9 245.1 234.8 245.1 234.7 245.2L232.1 246.7V245.1L236 242.8C236.2 242.7 236.5 242.5 236.7 242.3C237.1 241.9 237.2 241.3 237.2 240.8C237.2 240.1 237.1 239.8 236.8 239.8C236.7 239.8 236.6 239.8 236.5 239.8C236.3 239.9 236.2 239.9 236.1 240L231 242.9C230.6 243.1 230.3 243.4 230.1 243.7C229.9 244.1 229.8 244.5 229.9 244.9V253.6C229.9 253.9 229.9 254.1 230 254.4C230.1 254.7 230.5 254.7 231.1 254.4L236.2 251.5C236.4 251.4 236.7 251.2 236.9 251C237.3 250.6 237.4 250 237.4 249.5C237.4 248.8 237.3 248.5 237 248.5C236.9 248.5 236.8 248.5 236.7 248.5C236.5 248.6 236.4 248.6 236.3 248.7L232.3 251L232.1 249.5ZM240.3 239.1C240.3 238.8 240.3 238.6 240.2 238.3C240.1 238 239.7 238 239.1 238.3C238.7 238.5 238.3 238.9 238.1 239.3C238 239.5 238 239.6 238 239.8C238 240 238 240.2 238 240.3V249C238 249.3 238 249.5 238.1 249.8C238.2 250.1 238.5 250.1 239.2 249.8L243.8 247.2C244.1 247.1 244.3 246.9 244.5 246.7C244.6 246.6 244.7 246.4 244.7 246.2C244.7 246 244.8 245.7 244.8 245.5C244.8 245.3 244.8 245.1 244.7 244.9C244.7 244.8 244.6 244.7 244.4 244.7C244.2 244.7 244 244.8 243.8 244.9L240.3 246.9V239.1ZM247.8 234.8C247.8 234.5 247.8 234.3 247.7 234C247.6 233.7 247.2 233.7 246.6 234C246.2 234.2 245.8 234.6 245.6 235C245.5 235.2 245.5 235.3 245.5 235.5C245.5 235.6 245.5 235.8 245.5 236V244.7C245.5 245 245.5 245.2 245.6 245.5C245.7 245.8 246.1 245.8 246.7 245.5L251.3 242.9C251.6 242.8 251.8 242.6 252 242.4C252.1 242.3 252.2 242.1 252.2 241.9C252.2 241.7 252.3 241.4 252.3 241.2C252.3 241 252.3 240.8 252.2 240.6C252.2 240.5 252.1 240.4 251.9 240.4C251.7 240.4 251.5 240.5 251.3 240.6L247.8 242.6V234.8Z"
          fill="black"
        />
      </svg>
    )
  }
]
const LEARN_COLUMNS: NavDropdownColumnProps[] = [
  {
    title: 'Start Here',
    groupHref: 'https://heybeluga.com/categories/start-here/',
    hoverBackground: 'hover:bg-slate-50',
    hasHeader: true,
    image: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 13.5C11.5 13.1022 11.658 12.7206 11.9393 12.4393C12.2206 12.158 12.6022 12 13 12H22C22.3978 12 22.7794 12.158 23.0607 12.4393C23.342 12.7206 23.5 13.1022 23.5 13.5C23.5 13.8978 23.342 14.2794 23.0607 14.5607C22.7794 14.842 22.3978 15 22 15H13C12.6022 15 12.2206 14.842 11.9393 14.5607C11.658 14.2794 11.5 13.8978 11.5 13.5ZM13 20H22C22.3978 20 22.7794 19.842 23.0607 19.5607C23.342 19.2794 23.5 18.8978 23.5 18.5C23.5 18.1022 23.342 17.7206 23.0607 17.4393C22.7794 17.158 22.3978 17 22 17H13C12.6022 17 12.2206 17.158 11.9393 17.4393C11.658 17.7206 11.5 18.1022 11.5 18.5C11.5 18.8978 11.658 19.2794 11.9393 19.5607C12.2206 19.842 12.6022 20 13 20ZM29.5 8V23C29.5 23.4596 29.4095 23.9148 29.2336 24.3394C29.0577 24.764 28.7999 25.1499 28.4749 25.4749C28.1499 25.7999 27.764 26.0577 27.3394 26.2336C26.9148 26.4095 26.4596 26.5 26 26.5H4.5C3.43913 26.5 2.42172 26.0786 1.67157 25.3284C0.921427 24.5783 0.5 23.5609 0.5 22.5V11C0.5 10.6022 0.658035 10.2206 0.93934 9.93934C1.22064 9.65804 1.60218 9.5 2 9.5C2.39782 9.5 2.77936 9.65804 3.06066 9.93934C3.34196 10.2206 3.5 10.6022 3.5 11V22.5C3.5 22.7652 3.60536 23.0196 3.79289 23.2071C3.98043 23.3946 4.23478 23.5 4.5 23.5C4.76522 23.5 5.01957 23.3946 5.20711 23.2071C5.39464 23.0196 5.5 22.7652 5.5 22.5V8C5.5 7.33696 5.76339 6.70107 6.23223 6.23223C6.70107 5.76339 7.33696 5.5 8 5.5H27C27.663 5.5 28.2989 5.76339 28.7678 6.23223C29.2366 6.70107 29.5 7.33696 29.5 8ZM26.5 8.5H8.5V22.5C8.50066 22.8373 8.45866 23.1733 8.375 23.5H26C26.1326 23.5 26.2598 23.4473 26.3536 23.3536C26.4473 23.2598 26.5 23.1326 26.5 23V8.5Z"
          fill="#4B5563"
        />
      </svg>
    )
  },
  {
    title: 'Product Reviews',
    groupHref: 'https://heybeluga.com/categories/product-reviews/',
    hoverBackground: 'hover:bg-slate-50',
    hasHeader: true,
    image: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2785_1844)">
          <path
            d="M16.5 4.125L27.5 10.3125V22.6875L16.5 28.875L5.5 22.6875V10.3125L16.5 4.125Z"
            stroke="#475569"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 16.5L27.5 10.3125"
            stroke="#475569"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 16.5V28.875"
            stroke="#475569"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 16.5L5.5 10.3125"
            stroke="#475569"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2785_1844">
            <rect width="33" height="33" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Beluga Spotlights',
    groupHref: 'https://heybeluga.com/categories/beluga-spotlights/',
    hoverBackground: 'hover:bg-slate-50',
    hasHeader: true,
    image: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5475 22.6375C21.4703 21.734 22.103 20.5762 22.3649 19.3116C22.6269 18.047 22.5062 16.7331 22.0183 15.5374C21.5304 14.3417 20.6973 13.3184 19.6255 12.5981C18.5536 11.8778 17.2914 11.4932 16 11.4932C14.7086 11.4932 13.4465 11.8778 12.3746 12.5981C11.3027 13.3184 10.4697 14.3417 9.98179 15.5374C9.49388 16.7331 9.3732 18.047 9.63515 19.3116C9.89709 20.5762 10.5298 21.734 11.4525 22.6375C9.89021 23.468 8.59129 24.7189 7.70253 26.2488C7.51219 26.5927 7.46447 26.9976 7.56963 27.3764C7.67479 27.7551 7.92443 28.0775 8.26483 28.2741C8.60524 28.4706 9.0092 28.5257 9.38982 28.4275C9.77043 28.3293 10.0973 28.0855 10.3 27.7488C10.8862 26.7585 11.7202 25.9379 12.7199 25.3679C13.7196 24.7979 14.8505 24.4982 16.0013 24.4982C17.1521 24.4982 18.283 24.7979 19.2827 25.3679C20.2824 25.9379 21.1164 26.7585 21.7025 27.7488C21.799 27.9232 21.9293 28.0765 22.0857 28.2C22.2422 28.3234 22.4216 28.4145 22.6137 28.4678C22.8057 28.5211 23.0064 28.5356 23.2041 28.5105C23.4018 28.4854 23.5925 28.4211 23.7651 28.3214C23.9377 28.2218 24.0886 28.0887 24.2092 27.9301C24.3298 27.7714 24.4176 27.5903 24.4674 27.3973C24.5172 27.2044 24.528 27.0034 24.4993 26.8062C24.4706 26.609 24.4028 26.4195 24.3 26.2488C23.4106 24.7185 22.1108 23.4676 20.5475 22.6375ZM12.5 18C12.5 17.3078 12.7053 16.6311 13.0899 16.0555C13.4745 15.48 14.0211 15.0314 14.6606 14.7665C15.3002 14.5016 16.0039 14.4322 16.6828 14.5673C17.3618 14.7023 17.9854 15.0357 18.4749 15.5252C18.9644 16.0146 19.2977 16.6383 19.4328 17.3172C19.5678 17.9962 19.4985 18.6999 19.2336 19.3394C18.9687 19.979 18.5201 20.5256 17.9445 20.9102C17.3689 21.2948 16.6923 21.5 16 21.5C15.0718 21.5 14.1815 21.1313 13.5252 20.4749C12.8688 19.8185 12.5 18.9283 12.5 18ZM30.9013 19.1988C30.7437 19.3172 30.5644 19.4035 30.3735 19.4526C30.1826 19.5017 29.9839 19.5126 29.7887 19.4849C29.5936 19.4572 29.4058 19.3912 29.2362 19.2909C29.0665 19.1905 28.9183 19.0577 28.8 18.9C27.7588 17.5138 26.3188 16.4513 25.1338 16.195C24.8187 16.1269 24.5339 15.959 24.3217 15.7164C24.1095 15.4737 23.9811 15.1691 23.9556 14.8477C23.93 14.5264 24.0087 14.2053 24.18 13.9322C24.3512 13.659 24.6059 13.4483 24.9063 13.3313C25.2803 13.1853 25.6136 12.9514 25.8781 12.6493C26.1425 12.3473 26.3304 11.986 26.4257 11.596C26.521 11.206 26.521 10.7988 26.4257 10.4088C26.3304 10.0188 26.1425 9.65755 25.8781 9.35551C25.6136 9.05347 25.2803 8.81956 24.9063 8.67357C24.5323 8.52759 24.1286 8.47381 23.7295 8.5168C23.3303 8.5598 22.9474 8.69829 22.6131 8.92056C22.2787 9.14283 22.0029 9.44235 21.8088 9.79379C21.7167 9.97188 21.5899 10.1297 21.4358 10.258C21.2818 10.3862 21.1035 10.4823 20.9117 10.5405C20.7199 10.5987 20.5183 10.6178 20.3189 10.5968C20.1196 10.5758 19.9264 10.515 19.751 10.4181C19.5755 10.3211 19.4212 10.19 19.2973 10.0325C19.1733 9.87489 19.0822 9.69407 19.0293 9.5007C18.9765 9.30733 18.9629 9.10532 18.9894 8.90661C19.0159 8.7079 19.082 8.51652 19.1838 8.34379C19.5549 7.68747 20.0571 7.11448 20.6591 6.66042C21.261 6.20635 21.9499 5.8809 22.6829 5.70428C23.4159 5.52767 24.1774 5.50366 24.9201 5.63375C25.6628 5.76384 26.3708 6.04524 27.0002 6.46049C27.6296 6.87574 28.1668 7.41596 28.5786 8.04759C28.9904 8.67922 29.2679 9.38877 29.3939 10.1322C29.5199 10.8756 29.4917 11.6369 29.311 12.369C29.1304 13.101 28.8011 13.7881 28.3438 14.3875C29.4444 15.1207 30.4106 16.0378 31.2 17.0988C31.4389 17.4169 31.5415 17.8168 31.4855 18.2107C31.4295 18.6045 31.2193 18.9599 30.9013 19.1988ZM6.86628 16.1988C5.68128 16.455 4.24128 17.5175 3.20003 18.905C2.9605 19.2231 2.60443 19.433 2.21013 19.4886C1.81584 19.5442 1.41562 19.4408 1.09753 19.2013C0.779432 18.9618 0.569517 18.6057 0.513959 18.2114C0.458402 17.8171 0.561753 17.4169 0.801276 17.0988C1.59107 16.0381 2.55721 15.1211 3.65753 14.3875C3.20015 13.7881 2.87092 13.101 2.69027 12.369C2.50963 11.6369 2.48143 10.8756 2.60743 10.1322C2.73343 9.38877 3.01094 8.67922 3.42272 8.04759C3.8345 7.41596 4.37175 6.87574 5.0011 6.46049C5.63046 6.04524 6.33847 5.76384 7.08117 5.63375C7.82386 5.50366 8.58537 5.52767 9.3184 5.70428C10.0514 5.8809 10.7403 6.20635 11.3423 6.66042C11.9442 7.11448 12.4464 7.68747 12.8175 8.34379C12.9193 8.51652 12.9854 8.7079 13.0119 8.90661C13.0384 9.10532 13.0248 9.30733 12.972 9.5007C12.9191 9.69407 12.828 9.87489 12.704 10.0325C12.5801 10.19 12.4258 10.3211 12.2503 10.4181C12.0749 10.515 11.8817 10.5758 11.6824 10.5968C11.483 10.6178 11.2814 10.5987 11.0896 10.5405C10.8978 10.4823 10.7195 10.3862 10.5655 10.258C10.4114 10.1297 10.2846 9.97188 10.1925 9.79379C9.99843 9.44235 9.72256 9.14283 9.38824 8.92056C9.05392 8.69829 8.67098 8.5598 8.27182 8.5168C7.87266 8.47381 7.46901 8.52759 7.09503 8.67357C6.72104 8.81956 6.38772 9.05347 6.12324 9.35551C5.85877 9.65755 5.67092 10.0188 5.5756 10.4088C5.48028 10.7988 5.48028 11.206 5.5756 11.596C5.67092 11.986 5.85877 12.3473 6.12324 12.6493C6.38771 12.9514 6.72104 13.1853 7.09503 13.3313C7.39541 13.4483 7.65009 13.659 7.82133 13.9322C7.99257 14.2053 8.07126 14.5264 8.04573 14.8477C8.0202 15.1691 7.89181 15.4737 7.67959 15.7164C7.46738 15.959 7.18262 16.1269 6.86753 16.195L6.86628 16.1988Z"
          fill="#4B5563"
        />
      </svg>
    )
  },
  {
    title: 'Token Reviews',
    groupHref: 'https://heybeluga.com/token-reviews/',
    hoverBackground: 'hover:bg-slate-50',
    hasHeader: true,
    image: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 2.5H13C8.23375 2.5 4.5 8.43 4.5 16C4.5 23.57 8.23375 29.5 13 29.5H19C23.7663 29.5 27.5 23.57 27.5 16C27.5 8.43 23.7663 2.5 19 2.5ZM23.6513 21.5H20.7887C21.1419 20.192 21.3634 18.852 21.45 17.5H24.4412C24.3428 18.8607 24.0774 20.2041 23.6513 21.5ZM21.45 14.5C21.3634 13.148 21.1419 11.808 20.7887 10.5H23.6513C24.0774 11.7959 24.3428 13.1393 24.4412 14.5H21.45ZM22.1537 7.5H19.6537C19.3022 6.79478 18.8836 6.12503 18.4037 5.5H19C19.6713 5.5 20.9062 5.78125 22.1537 7.5ZM9.34625 23.73C8.155 21.6887 7.5 18.9438 7.5 16C7.5 13.0562 8.155 10.3113 9.34625 8.27C10.75 5.86 12.2387 5.5 13 5.5C13.7612 5.5 15.25 5.86 16.6537 8.27C17.845 10.3113 18.5 13.0562 18.5 16C18.5 18.9438 17.845 21.6887 16.6537 23.73C15.25 26.14 13.7612 26.5 13 26.5C12.2387 26.5 10.75 26.14 9.34625 23.73ZM19 26.5H18.4013C18.8811 25.875 19.2997 25.2052 19.6513 24.5H22.1513C20.9062 26.2188 19.6713 26.5 19 26.5Z"
          fill="#4B5563"
        />
      </svg>
    )
  }
]

export const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  {
    title: 'Newsletter',
    body: TOOLS_COLUMNS,
    bodyStyle: 'flex flex-col',
    articleLinks: [],
    moreLink: {
      href: '',
      text: ''
    },
    isDropdown: false,
    rootLink: 'https://beluga.beehiiv.com/'
  },
  // {
  //   title: 'Tools',
  //   body: TOOLS_COLUMNS,
  //   bodyStyle: 'flex flex-col',
  //   articleLinks: [
  //     {
  //       href: 'https://heybeluga.com/articles/bitcoin-gold/',
  //       text: 'Bitcoin Gold: Everything to Know',
  //       imageUrl:
  //         'https://heybeluga.com/images/external/ba7e3a2f-b1c7-4d73-8a65-33f1eca963ed.png'
  //     },
  //     {
  //       href: 'https://heybeluga.com/articles/ordinals-vs-ethereum-nfts/',
  //       text: 'The Wild World of NFTs: Bitcoin Ordinals vs. Ethereum NFTs',
  //       imageUrl:
  //         'https://heybeluga.com/images/external/20766420-e61b-43ad-a973-ceb930436afa.png'
  //     },
  //     {
  //       href: 'https://heybeluga.com/articles/origins-of-hodl/',
  //       text: 'Origins of the Word "HODL"',
  //       imageUrl:
  //         'https://heybeluga.com/images/external/fae36277-9d16-4e8f-87df-996b70573955.png'
  //     }
  //   ],
  //   moreLink: {
  //     href: 'https://heybeluga.com/articles/',
  //     text: 'View All Articles'
  //   },
  //   isDropdown: true,
  //   rootLink: ''
  // },
  {
    title: 'Starter Pack',
    body: TOOLS_COLUMNS,
    bodyStyle: 'flex flex-col',
    articleLinks: [],
    moreLink: {
      href: '',
      text: ''
    },
    isDropdown: false,
    rootLink: 'https://starter.heybeluga.com/'
  },
  {
    title: 'Compare',
    body: COMPARE_COLUMNS,
    bodyStyle: 'grid grid-cols-2',
    articleLinks: [],
    moreLink: {
      href: 'https://heybeluga.com/comparisons/',
      text: 'View All Comparisons'
    },
    isDropdown: true,
    rootLink: ''
  },
  {
    title: 'Learn',
    body: LEARN_COLUMNS,
    bodyStyle: 'grid grid-cols-4',
    articleLinks: [],
    moreLink: {
      href: 'https://heybeluga.com/articles/',
      text: 'View All Guides'
    },
    isDropdown: true,
    rootLink: ''
  }
]
