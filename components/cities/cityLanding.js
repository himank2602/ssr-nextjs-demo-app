// import Layout from '../components/MyLayout';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const CityLanding = props =>(
//   <Layout>
//       <ul>
//         {props.citys.map(city =>(

//           <li key = {city.id}> 
//           <Link as ={`/p/${city.id}`} href={`post?id={city.id}`}>
//             <a>{city.name} </a>
//           </Link>
//           </li>
//         ))}
//       </ul>

//   </Layout>
// )

// CityLanding.getInitialProps = async function(){

//   const res = await fetch('http://uatapi.justride.in/city');
//   const data = await res.json();
  
//   return{
//     citys: data.response
//   }
// }

// export default CityLanding;