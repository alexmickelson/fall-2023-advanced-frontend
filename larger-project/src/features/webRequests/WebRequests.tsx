import React, { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { apiService } from "./apiService";

export const WebRequests = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false)

  const [displayText, setDisplayText] = useState("this is API data");

  return (
    <div className="container">
      <h1 className="text-center">Interacting With the API</h1>

      <hr />
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          apiService
            .getDataFetch()
            .then((b) => {
              setLoading(false);
              console.log(b);
            })
            .catch();
        }}
      >
        Get
      </button>
      <button onClick={() => apiService.addDataFetch().catch()}>Add</button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => setIsEditing((e) => !e)}
      >
        Toggle Edit
      </button>

      <hr />
      {loading && <Spinner />}
      {!isEditing && <h3 className="text-center">{displayText}</h3>}

      {isEditing && (
        <div className="mb-3">
          <label htmlFor="apiStorage" className="form-label">
            Api String:
          </label>
          <input className="form-control" id="apiStorage" />
          <button className="btn btn-outline-primary mt-3">Submit</button>
        </div>
      )}

      <hr />
      <Spinner />
    </div>
  );
};
