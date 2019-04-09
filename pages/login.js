import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import {Form} from 'react'

const Post = props => (
    <Layout>
        {/* <h1>{props.data.image}</h1> */}
        <h1>Hello {props.res.name}</h1>
{/*        
        <div>
       <form >
        <label>
          username:
          <input type="text"  />
        </label>
        <label>
          password:
          <input type=
          "password"
           name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
       </div> */}

    </Layout>


)

Post.getInitialProps = async function () {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('credentials','include',);

    const data = {
        "name": "morpheus",
        "job": "leader"
    }

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://reqres.in/api/users";
    const res =
        await fetch( proxyurl + url, {
            method: 'post',
            headers:headers,
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        })
        console.log("response", res);
    return {res}
}

export default Post


