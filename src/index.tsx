import React from "react";
import { createRoot } from "react-dom/client";

import { init } from "@scripts/main";
import Header from "@components/header";
import Dashboard from "@components/dashbord";
import Search from "@components/search";

init();

const header = document.getElementById("header-wrapper") as HTMLElement;
const dashboard = document.getElementById("dashboard-wrapper") as HTMLElement;
const search = document.getElementById("search-wrapper") as HTMLElement;

const headerRoot = createRoot(header);
const dashboardRoot = createRoot(dashboard);
const searchRoot = createRoot(search);

headerRoot.render(<Header />);
dashboardRoot.render(<Dashboard />);
searchRoot.render(<Search handleSearch={() => []} />);
