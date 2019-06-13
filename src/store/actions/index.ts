export function createAction(type: string, payload = {}) {
  return {
    // array type
    type,
    ...payload
  };
}
