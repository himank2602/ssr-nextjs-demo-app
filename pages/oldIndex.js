




import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const Index = props =>(
  <Layout>
      <ul>

      <div className="cityButton">
          Cities
        </div>
        {props.cities.map(show =>(

          <li key = {show.id}> 
          <Link as ={`/p/${show.id}`} href={`post?id={show.id}`}>
            <a>{show.name} </a>
          </Link>
          </li>
        ))}
      </ul>

  </Layout>
)

Index.getInitialProps = async function(){

  const res = await fetch('');
  const data = await res.json();
  
  return{
    cities: data.response
  }
}

export default Index;
