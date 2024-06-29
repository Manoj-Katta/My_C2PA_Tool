import React from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css'

const Homepage = () => {
  const Navigate = useNavigate();

  function handleAddManifests() {
    Navigate("/addManifest");
  }

  function handleVerifyManifests() {
    Navigate("/verifyManifest");
  }

  return (
    <div className="container">

      <h1>Welcome to C2PA Tool</h1>
      <p>You can add manifest and also verify the manifest</p>
      <div className="buttons">
        <button className="addCredentials" onClick={handleAddManifests}>
          Add Manifest
        </button>
        <button className="verifyCredentials" onClick={handleVerifyManifests}>
          Verify Manifest
        </button>
      </div>
    </div>
  );
};

export default Homepage;
