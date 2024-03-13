import React from "react";

import Tag from "@components/tag";

export default function Card({ title, description, image, url, tagsName }: { title: string, description: string, image: URL, url: URL, tagsName: string[]; }) {

  return (
    <div className="card w-100">
      <img className="card-img-top" src={image.toString()} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a className="btn btn-primary" href={url.toString()}>Go somewhere</a>
      </div>
      <div>
        <ul className="tags">
          {tagsName.map(name => <li><Tag name={name}></Tag></li>)}
        </ul>
      </div>
    </div>
  );
}
