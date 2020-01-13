import React, { useState, useCallback, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";

// my component
import { History } from './History'
import './History.css'

let cache;

export const HistoryList = () => {

  let [histories, setHistories] = useState([]);
  const perPage = 10;

  const [showLoader, setShowLoader] = React.useState(false);
  const [lastFetchFlag, setLastFetchFlag] = React.useState(false);
  const [pagenation, setPagenation] = React.useState({
    perPage: 1,
    currentPage: 1
  });

  async function fetchData(){
    let data = await axios.get(`/api/v1/histories?page=1&limit=${perPage}`)
      .then(response => response.data)
      .catch(error => console.log(error));
      setHistories(data);
      console.log(data);
  };

  async function fetchMore(){
    if(!lastFetchFlag){
      setShowLoader(true);
      let moreData = await axios
        .get(
          `/api/v1/histories?page=${pagenation.currentPage + 1}&limit=${perPage}`
        )
        .then(result => result.data)
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
      if(!moreData.length) {
        setLastFetchFlag(true);
      }else{
        setHistories(histories.concat(moreData));
        setPagenation({
          currentPage: pagenation.currentPage+1
        });
        console.log(histories)
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={showLoader == false && !lastFetchFlag}
      loadMore={fetchMore}
      initialLoad={false}
    >
      <div className="main">
        <ul className="cbp_tmtimeline">
          {
            histories.map((history,index) => {
              return (
                <History history={history} key={index}/>
              );
            })
          }
        </ul>
        <div style={{ textAlign: "center" }}>
          {showLoader ? <CircularProgress style={{ margin: "24px auto" }}/> : ""}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default HistoryList;