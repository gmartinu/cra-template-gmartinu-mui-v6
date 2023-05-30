import { matchRoutes } from "react-router-dom"
import { routesList } from "../router"

const useCurrentPath = () => {
  const [{ route }] = matchRoutes(routesList, window.location)

  return route
}

export default useCurrentPath;