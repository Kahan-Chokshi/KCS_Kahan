import React from "react";
function CountryListWithoutKey(props) {
    return (
      <dl>
        {props.countriesWithoutKeys.map((country,index) => (
          <React.Fragment key={index}>
            <dt>{country.name}</dt>
            <dd>{country.capital}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  
}

export default CountryListWithoutKey;