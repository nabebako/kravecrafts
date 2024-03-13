import React, { useEffect, useState } from "react";

import Card from "@components/card";

export default function Search({ handleSearch }: { handleSearch: (s: string) => SearchResult[]; }) {
  const [searchValue, setSerachValue] = useState("");
  const [searchResult, setSerachResult] = useState([] as SearchResult[]);
  const LAG_TIME = 0.3 * 1000;

  useEffect(() => {
    const newURL = searchValue !== "" ? `?q=${searchValue}` : "/";
    window.history.replaceState("", "", newURL);

    const timeout = setTimeout(() => {
      setSerachResult(handleSearch(searchValue));
    }, LAG_TIME);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  console.log(searchResult.length);

  return (
    <div>
      <div className="d-flex w-50 mx-auto">
        <div className="d-flex align-items-center me-auto">
          <input
            type="text" id="search-form" placeholder="Search" style={{ width: "40ch" }}
            className="form-control rounded-pill"
            value={searchValue}
            onChange={e => setSerachValue(e.target.value)}
          />
          <button type="button" className="btn rounded-pill" onClick={() => handleSearch(searchValue)}>
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
          </button>
          <p className="align-middle mb-0 text-nowrap">{searchResult.length} {searchResult.length > 1 ? "results" : "result"}</p>
        </div>
        <div className="d-flex">
          <button type="button" className="btn rounded-pill mx-2 p-0" >
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
              <path d="M0 60C0 26.8629 26.8629 0 60 0H156C189.137 0 216 26.8629 216 60V156C216 189.137 189.137 216 156 216H60C26.8629 216 0 189.137 0 156V60Z" />
              <path d="M296 60C296 26.8629 322.863 0 356 0H452C485.137 0 512 26.8629 512 60V156C512 189.137 485.137 216 452 216H356C322.863 216 296 189.137 296 156V60Z" />
              <path d="M0 356C0 322.863 26.8629 296 60 296H156C189.137 296 216 322.863 216 356V452C216 485.137 189.137 512 156 512H60C26.8629 512 0 485.137 0 452V356Z" />
              <path d="M296 356C296 322.863 322.863 296 356 296H452C485.137 296 512 322.863 512 356V452C512 485.137 485.137 512 452 512H356C322.863 512 296 485.137 296 452V356Z" />
            </svg>
          </button>
          <button type="button" className="btn rounded-pill mx-2 p-0" >
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {searchResult.map(info => {
          return (
            <Card
              title={info.title}
              description={info.description}
              image={info.image}
              url={info.url}
              tagsName={info.tagsName}
            />
          );
        })}
      </div>
    </div>
  );

}
