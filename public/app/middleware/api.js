const dataUrl = '/sampleData.json';

function callApi() {
  return fetch(dataUrl)
    .then(response =>
      response.json().then((json) => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(response);
      }

      return json;
    });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];

  // skip if it isn't a fetch action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = callAPI.types;

  // fire the first action: the fetch request
  next(actionWith({ type: requestType }));

  // run the fetch
  return callApi().then(
    (response) => {
      return next(actionWith({
        response,
        type: successType,
      }));
    },
    (error) => {
      return next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened',
      }));
    }
  );
}
