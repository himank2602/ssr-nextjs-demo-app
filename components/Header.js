import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
<h1>SSR using nextjs</h1>

    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/city">
      <a style={linkStyle}>City</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/login">
      <a style={linkStyle}>Login</a>

    </Link>
    <Link href="/nossr">
      <a style={linkStyle}>NOssr</a>

    </Link>

  </div>
)

export default Header