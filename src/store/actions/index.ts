export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function createRequestTypes(base: any) {
  if (!base) {
    throw new Error("cannot create request type with base = '' or base = null");
  }

  return [REQUEST, SUCCESS, FAILURE].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {} as any
  );
}

export function createAction(type: string, payload = {}) {
  return {
    // array type
    type,
    ...payload
  };
}
