import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.data.name}</h1>
    <img src={props.data.flag} alt="Flag"/>


  </Layout>
)

Post.getInitialProps = async function (country) {

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('credentials','include',);

  const { id } = country.query
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const url = `http://restcountries.eu/rest/v2/name/${id}`

  const res = await fetch(proxyurl + url, {
    method: 'get',
    headers: headers,
    body: JSON.stringify(data)
  })
  const data = await res.json()
  
  return {
    data: data[0]
  }
}

export default Post

























// const Page = withRouter(props=>(
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog content</p>

//     </Layout>
// ))


// content
// // const Content = withRouter(

// //     props => (
// //         <div>
// //             <h1> {props.router.query.title}</h1>
// //             <p> This is the blog content</p>
// //         </div>

// //     )
// // )

// // const Page = props => (
// //     <Layout>

// //         <Content />
// //     </Layout>
// // )



// export default Page;