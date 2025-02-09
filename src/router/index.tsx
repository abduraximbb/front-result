import { useRoutes } from "react-router-dom"
import { SuspenseContainer } from "../config"
import Layout from "../pages/layout/Layout"
import Home from "../pages/home/Home"
import Wishlist from "../pages/wishlist/Wishlist"
import Login from "../pages/auth/login/Login"
import Account from "../pages/account/Account"
import ProductDetail from "../pages/Detail/ProductDetail"
import NotFound from "../pages/not-found/NotFound"
import SignUp from "../pages/auth/signup/SignUp"

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
            {
              path: "/account",
              element: (
                <SuspenseContainer>
                  <Account />
                </SuspenseContainer>
              ),
            },
            {
              path: "/signin",
              element: (
                <SuspenseContainer>
                  <Login />
                </SuspenseContainer>
              ),
            },
            {
              path: "/signup",
              element: (
                <SuspenseContainer>
                  <SignUp />
                </SuspenseContainer>
              ),
            },
            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        },
      ])}
    </>
  );
}

export default Router