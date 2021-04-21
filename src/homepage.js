import React from "react";
import { useEffect, useState } from "react";
import { requestApiData } from "./global/actions";
import { useDispatch, useSelector } from "react-redux";
import { Asset } from "./assets/asset1";
import { Icon1, Icon2, Icon3, Icon4 } from "./assets/svgs";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/homepage.css";

const Homepage = () => {
  const [allAppsData, setAllAppsData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(requestApiData());
    axios.get("https://api.npoint.io/d734975d2aee62d197ef/").then((res) => {
      setAllAppsData(res.data);
      setInitialLoad(false);
    });
  }, []);

  return (
    <>
      {loading || initialLoad ? (
        <h1>loading...</h1>
      ) : (
        <div className="wrapper">
          <div className="blocks block-1">
            <div className="halfs half-1">
              <h1 className="tagline">ADSOUL</h1>
              <Asset />
            </div>
            <div className="halfs half-2">
              <h1 className="rev-opt">Revenue Optimization</h1>
              <div className="icons">
                <div className="icon-wrapper">
                  <Icon1 />
                  <p className="icon-text">Fill Rate</p>
                </div>
                <div className="icon-wrapper">
                  <Icon2 />
                  <p className="icon-text">Improve CTR</p>
                </div>
                <div className="icon-wrapper">
                  <Icon3 />
                  <p className="icon-text">Refresh Rate</p>
                </div>
                <div className="icon-wrapper">
                  <Icon4 />
                  <p className="icon-text">Quick Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blocks block-2">
            <h1 className="block-1-head">Apps</h1>
            <div className="list">
              {users.map((detail) => {
                return (
                  <Link
                    className="row"
                    key={detail.id}
                    to={{
                      pathname: `/detailspage/${detail.id}`,
                      state: {
                        appName: detail.appName,
                      },
                    }}
                  >
                    <div className="img-text-wrapper">
                      <div className="img-icon"></div>
                      <div className="app-text">
                        <p>{detail.appName}</p>
                        <p>{detail.publisherName}</p>
                      </div>
                    </div>
                    <div className="other-details-wrapper">
                      <div className="od-prop">
                        <p>Revenue</p>
                        <p>{`$${allAppsData[detail.id][0].revenue}`}</p>
                      </div>
                      <div className="od-prop">
                        <p>Ad Requests</p>
                        <p>{`${Math.round(
                          allAppsData[detail.id][0].adRequest / 1000000
                        )}M`}</p>
                      </div>
                      <div className="od-prop">
                        <p>Ad Responses</p>
                        <p>{`${Math.round(
                          allAppsData[detail.id][0].adResponse / 1000000
                        )}M`}</p>
                      </div>
                      <div className="od-prop">
                        <p>Impressions</p>
                        <p>{`${Math.round(
                          allAppsData[detail.id][0].impressions / 100000
                        )}M`}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
