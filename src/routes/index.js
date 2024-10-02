import { PageNotFound } from "../pages";
import PrivateRouteAuth from "./PrivateRoutesAuth";
import Home from "../pages/Home/Home";

const publicRoutes = [
     { path: '*', element: PageNotFound },
     { path: '/', element: Home }
]

const privateRoutes = [
     {}
]

export { publicRoutes, privateRoutes, PrivateRouteAuth }