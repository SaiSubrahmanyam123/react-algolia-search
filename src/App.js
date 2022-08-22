import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';
import './App.css';

const searchClient = algoliasearch('TM2MOF16VN', '4bf80b49def726641f9bbf90d6e12941');


function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_users">
      <SearchBox />
    </InstantSearch>
  );
}

export default App;
