import React from "react";

import Tag from "@components/tag";
import "@styles/card.scss";

export default function Card({ title, description, image, tagsName }: { title: string, description: string, image?: URL, tagsName: string[]; }) {

  let imageLink;
  if (image) {
    imageLink = image.toString();
  }
  else {
    imageLink = window.location.origin + "/test.svg";
  }

  return (
    <div className="card-wrapper rounded-4 border">
      <div className="card rounded-4 shadow-lg" style={{ clipPath: "content-box" }}>
        <img
          className="card-img-top"
          style={{ width: "100%", aspectRatio: "4 / 3", objectFit: image ? "cover" : "contain" }}
          src={imageLink} alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text" style={{ height: "3rem" }}>{description}</p>
          <ul className="tags" style={{ height: "1.75em", clipPath: "content-box" }}>
            {tagsName.map(name => <li><Tag name={name}></Tag></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
