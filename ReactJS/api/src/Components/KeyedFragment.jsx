import React from "react";
function CountryList(props) {
    return (
      <dl>
        {props.countries.map(country => (
          <React.Fragment key={country.id}>
            <dt>{country.name}</dt>
            <dd>{country.capital}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  
}

export default CountryList;