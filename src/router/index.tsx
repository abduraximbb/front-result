import { useRoutes } from "react-router-dom"
import { SuspenseContainer } from "../config"
import Layout from "../pages/layout/Layout"
import Home from "../pages/home/Home"
import Wishlist from "../pages/wishlist/Wishlist"
import Login from "../pages/auth/login/Login"
import Account from "../pages/account/Account"
import ProductDetail from "../pages/Detail/ProductDetail"

const Router = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "product/:id",
              element: (
                <SuspenseContainer>
                  <ProductDetail />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/login",
          element: (
            <SuspenseContainer>
              <Login />
            </SuspenseContainer>
          ),
        },
        {
          path: "/account",
          element: (
            <SuspenseContainer>
              <Account />
            </SuspenseContainer>
          ),
        },
      ])}
    </>
  );
}

export default Router