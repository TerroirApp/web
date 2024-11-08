import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export const routes: RouteConfig = [
    index("./routes/home.tsx"),
    route("map", "./routes/map.tsx"),
];
