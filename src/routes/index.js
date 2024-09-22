import { PageNotFound } from "../pages";
import PrivateRouteAuth from "./PrivateRoutesAuth";

const publicRoutes = [
     { path: '*', element: PageNotFound }
]

const privateRoutes = [
     {}
]

export { publicRoutes, privateRoutes, PrivateRouteAuth }