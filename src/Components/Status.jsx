import React from "react";

const Status = ({ loading, error, recipes }) => {
  if (loading) return <div className="loader-container">Loading ...</div>;
  if (error) return <div className="error-container">{error}</div>;
  if (recipes) return <h3 className="result-header">Your Search Results : </h3>;
  return null;
};

export default Status;
