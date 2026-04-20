import React from "react";
import ProductCard from "../components/ProductCards";

const SearchResults = ({ searchResults, isLoggedIn }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Search Results</h2>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {searchResults.length > 0 ? (
          searchResults.map(p => (
            <ProductCard key={p.id} product={p} isLoggedIn={isLoggedIn} />
          ))
        ) : (
          <h4 className="text-center">No Products Found</h4>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
