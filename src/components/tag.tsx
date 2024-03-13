import React from "react";


function hash(str: string) {
  let hash = 0,
    i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};


export default function Tag({ name }: { name: string; }) {
  const COLOR_LIST = ["#882C4D", "#E2876C", "#EFD8A6", "#AEC9A8", "#5B9E9A"];

  const style = { "--tag-color": COLOR_LIST.at(hash(name) % COLOR_LIST.length) } as React.CSSProperties;
  return (
    <a className="tag" style={style}>{name}</a>
  );
}

