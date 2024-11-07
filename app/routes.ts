import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
    index("./routes/home.tsx"),
    route("map", "./routes/map.tsx"),
];