import { lazy } from "react";

// Lazy load all page components
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

// Route configuration
export interface RouteConfig {
  path: string | string[];
  component: React.LazyExoticComponent<React.ComponentType>;
  pageName: string;
}

export const routes: RouteConfig[] = [
  {
    path: ["/", "/Home"],
    component: Home,
    pageName: "Home",
  },
  {
    path: ["/Home/About", "/About"],
    component: About,
    pageName: "About",
  },
  {
    path: ["/Home/Contact", "/Contact"],
    component: Contact,
    pageName: "Contact",
  },
  {
    path: ["/Account/Login", "/Login"],
    component: Login,
    pageName: "Login",
  },
  {
    path: ["/Dashboard"],
    component: Dashboard,
    pageName: "Dashboard",
  },
];

// Route matcher function with wildcard support
export const findRoute = (pathname: string): RouteConfig | null => {
  return (
    routes.find((route) => {
      const paths = Array.isArray(route.path) ? route.path : [route.path];
      return paths.some((path) => {
        // Exact match
        if (pathname === path) return true;

        // Wildcard match for /pages/* pattern
        if (path.includes("*")) {
          const pattern = path.replace("*", ".*");
          const regex = new RegExp(`^${pattern}$`);
          return regex.test(pathname);
        }

        return false;
      });
    }) || null
  );
};
