
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const City = props => (
    <Layout>
        <ul>
            {props.cities.map(city => (

                <li key={city.name}>
                    <Link as={`/${city.name}`} href={`post?id=${city.name}`}>
                        <a>{city.name} </a>
                    </Link>
                </li>
            ))}
        </ul>

    </Layout>
)

City.getInitialProps = async function () {

    const url = 'https://restcountries.eu/rest/v2/all'
    const res = await fetch(url);
    const data = await res.json();

    return {
        cities: data
    }
}

export default City;