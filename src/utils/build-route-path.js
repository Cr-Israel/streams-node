export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z])+/g
  const pathWithParams = 

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}