import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'

// const PostLink = (props) => (

//   <Link href={`/post?title=${props.title}`}>
//     <a>
//       {props.title}
//     </a>
//   </Link>
// )

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Index() {
  return (
    <Layout>
      <h1> MY BLOG</h1>
      <ul>
        <PostLink id="Hello-Next.js" title="Hello Next.js" />
        <PostLink id="Learn-Next.js" title="Learn Next.js" />
        <PostLink id="Deploy-Next.js" title="Deploy Next.js" />
      </ul>

    </Layout>


  )
}