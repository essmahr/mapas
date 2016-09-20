const dataUrl = '/sampleData.json';

function callApi() {
  return fetch(dataUrl)
    .then(response =>
      response.json()
    ).then((data) => {
      if (!response.ok) {
        return Promise.reject(data);
      }

      return {
        response: data,
      };
    });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }
}
