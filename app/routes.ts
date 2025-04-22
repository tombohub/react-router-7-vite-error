import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("koko", "./routes/koko.tsx"),
] satisfies RouteConfig;
