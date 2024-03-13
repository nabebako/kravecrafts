
import React from "react";
import { createRoot } from "react-dom/client";

import { init } from "@scripts/main";
import Header from "@components/header";
import Dashboard from "@components/dashbord";
import Search from "@components/search";

init();

const header = document.getElementById("header") as HTMLElement;
const dashboard = document.getElementById("dashboard") as HTMLElement;
const search = document.getElementById("search") as HTMLElement;

const headerRoot = createRoot(header);
const dashboardRoot = createRoot(dashboard);
const searchRoot = createRoot(search);

headerRoot.render(<Header />);
dashboardRoot.render(<Dashboard />);
searchRoot.render(<Search handleSearch={() => []} />);

// const root = createRoot(domNode);
// root.render(
//   <>
//     <div className="row" >
//       <div className="col" >
//         <Card />
//       </div>
//       <div className="col" >
//         <Card />
//       </div>
//       <div className="col" >
//         <Card />
//       </div>
//     </div>
//   </>
// );
