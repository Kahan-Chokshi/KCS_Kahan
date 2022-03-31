import './App.css';
// import ComponentAPIDemo from './Components/ComponentApi';
// import ForceUpdateStateComponent from './Components/ForceUpdate';
// import Fragment from './Components/Fragment';
// import  ShorthandFragment from './Components/ShorthandFragment';
// import CountryList from './Components/KeyedFragment';
import CountryListWithoutKey from './Components/WithoutKeyedFragment';

function App() {
  const countries = [
    {id: 1, name: 'India', capital: 'Delhi'},
    {id: 2, name: 'USA', capital: 'Washington DC'},
    {id: 3, name: 'Spain', capital: 'Madrid'}
  ];

  const countriesWithoutKeys = [
    {name: 'India', capital: 'Delhi'},
    {name: 'USA', capital: 'Washington DC'},
    {name: 'Spain', capital: 'Madrid'}
  ];
  return (
  // <ComponentAPIDemo/>
  // <ForceUpdateStateComponent/>
  // <Fragment/>
  // <ShorthandFragment/>
  // <CountryList countries={countries} />
  <CountryListWithoutKey countriesWithoutKeys={countriesWithoutKeys}/>
  );
}

export default App;
