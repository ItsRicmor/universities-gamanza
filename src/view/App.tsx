import { RouteEnum } from 'constants/RouteEnum';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "view/layout/Layout";
import { HomePage } from "view/pages/home";
import { NoMatch } from "view/pages/no-match";
import { BreadcrumbItem } from './components/Breadcrumbs/BreadcrumbItem';
import { CountryPage } from './pages/country';


const router = createBrowserRouter([
  {
    path: RouteEnum.Home,
    element: <Layout />,
    handle: {
      Crumb: (isActive: boolean) => <BreadcrumbItem isActive={isActive} to={RouteEnum.Home}>Home</BreadcrumbItem>,
    },
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ':country',
        element: <CountryPage />,
        handle: {
          Crumb: (isActive: boolean, country: string, __: string) => <BreadcrumbItem isActive={isActive} to={`/${country}`}>Country</BreadcrumbItem>,
        }
      },
      {
        path: "*",
        element: <NoMatch />,
        handle: {
          Crumb: () => <BreadcrumbItem isActive>"No Match"</BreadcrumbItem>,
        },
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
