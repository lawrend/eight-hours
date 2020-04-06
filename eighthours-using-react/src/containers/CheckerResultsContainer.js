import React from 'react';
import CheckerIngredientResult from '../components/CheckerIngredientResult.js';

const badlist = ["algae", "kelp", "seaweed", "spirulina", "plankton", "cetearyl alcohol", "ceteareth 20", "chlorella", "cocoa butter", "coconut oil", "butter", "soybean oil", "avocado oil", "agrgan oil", "moroccan oil", "ethylhexyl palmitate", "isopropyl isostearate", "isopropyl myristate", "isopropyl palmitate", "laureth-23", "laureth 23", "laureth-4", "laureth 4", "myristic acid", "myristyl lactate", "myristyl myristate", "polyglyceryl-3", "polyglyceryl 3", "polyglyceryl-4", "polyglyceryl 4", "steareth 10", "sodium lauryl sulfate", "sodium laureth sulfate", "helianthus annuus (sunflower) seed oil", "shea butter", "shea butter ethyl esters" ]


export default props =>(

  props.results.map(x => {
    if(badlist.some(i => i == x)) {
      return <CheckerIngredientResult name={x} status="found" statusText="FOUND"/>
      } else {
        return <CheckerIngredientResult name={x} status="not-found" statusText="NOT FOUND"/>
      }
    }
  )
)

