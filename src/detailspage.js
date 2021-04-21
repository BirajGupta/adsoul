import React from "react";
import { useEffect } from "react";
import { requestOneAppData } from "./global/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import "./css/details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  var location = useLocation();
  const loading = useSelector((state) => state.loading);
  const oneApp = useSelector((state) => state.oneApp);

  useEffect(() => {
    dispatch(requestOneAppData(id));
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h3 className="details-header">ADSOUL</h3>
          <div className="details-app-wrapper">
            <div className="img-icon2"></div>
            <h1 className="details-appName">{location.state.appName}</h1>
          </div>
          <table>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Ad Requests</th>
              <th>Ad Responses</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Render Rate</th>
            </tr>
            {oneApp.map((detail) => {
              return (
                <tr key={detail.date}>
                  <td>{detail.date}</td>
                  <td>{detail.revenue}</td>
                  <td>{detail.adRequest}</td>
                  <td>{detail.adResponse}</td>
                  <td>{detail.impressions}</td>
                  <td>{detail.clicks}</td>
                  <td>{`${Math.round(
                    (detail.impressions / detail.adResponse) * 100
                  )}%`}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Details;
