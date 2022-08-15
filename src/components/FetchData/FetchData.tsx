import React from "react";
import "./fetchData.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";

type result = {
  name: String;
  assetId: String;
  available: Boolean;
  unitname1: String;
  logo: String;
};

const FetchData = () => {
  const { data, loading } = useQuery(GET_DATA);

  if (!data && !loading) return <h1>No ASAs</h1>;

  return (
    <div>
      <p className="data-asas">
        Algorand Standard Asset on the Algorand Protocol(ASAs)
      </p>
      {loading ? (
        <Spinner message={"Loading Data...."} />
      ) : (
        <div className="data">
          {data?.asalist?.results?.map((props: result) => (
            <div className="fetchData" key={`${props.assetId}`}>
              <img
                src={
                  props.logo === null
                    ? "https://tinychart.org/assets/placeholder.png"
                    : `${props.logo}`
                }
                alt=""
                className="fetchData-img"
              />
              <p className="fetchData-p">
                {props.name} ({props.unitname1})
              </p>
              <button
                className={
                  props.available ? "fetchData-button" : "fetchData-button red"
                }
              >
                {props.available ? "available" : "unavailable"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const GET_DATA = gql`
  query {
    asalist {
      results {
        name
        assetId
        available
        logo
        unitname1
      }
    }
  }
`;

export default FetchData;
