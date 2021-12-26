import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_MOVIE = gql`
  {
    random {
      name
      rating
      gif
    }
  }
`;

function App() {
  return (
    <main className="App">
      <h1>Random good movie</h1>
      <Display />
    </main>
  );
}

function Display() {
  const { loading, error, data, refetch } = useQuery(GET_MOVIE);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <section>
      <img src={data.random.gif} alt={data.random.name} />
      <h1>{data.random.name}</h1>
      <p>Rating: {data.random.rating}</p>

      <button onClick={() => refetch()}>Other</button>
    </section>
  );
}

export default App;
