/**
 * Standard backend communication functions.
 * @author Johan Svensson
 */
;

//@ts-ignore
//import fetch from 'whatwg-fetch';

let dev = window.location.origin.indexOf(':808') != -1
let baseUrl = dev ? `http://172.16.42.22:8080/api` : `/api`;

/**
 * Performs a standard backend request.
 * Expects the result as JSON!
 */
export async function request(path: string, method: 'get' | 'post' | 'put' | 'delete' = 'get', body: any = null, query: string = null) {
  path = path || "";
  query = query || "";

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  if (!query.startsWith("?")) {
    query = `?${query}`;
  }

  let isFormData = body instanceof FormData;

  if (body && !isFormData && typeof body == "object") {
    body = JSON.stringify(body);
  }

  if (method == "get") {
    body = undefined;
  }

  let url = `${baseUrl}${path}${query}`;
  let result = await fetch(url, {
    method,
    headers: {
      ...(!isFormData ? {
        "Content-Type": "application/json",
      } : {}),
    },
    body
  });

  return result.json();
}