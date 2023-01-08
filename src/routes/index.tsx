import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      { true ? <AppRoutes /> : ''}
    </BrowserRouter>
  )
}