import { MOST_POPULAR } from "../actions/video";
import { SUCCESS } from "../actions";

const initialState = {
  byId: {},
  mostPopular: {}
};

function reduceFetchMostPopularVideos({
  response,
  prevState
}: {
  response: any;
  prevState: any;
}) {
  const videoMap = response.items.reduce(
    (accumulator: { [x: string]: any }, video: { id: string | number }) => {
      accumulator[video.id] = video;
      return accumulator;
    },
    {}
  );

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty("prevPageToken") && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items
  };

  return {
    ...prevState,
    mostPopular,
    byId: { ...prevState.byId, ...videoMap }
  };
}

export default function videos({
  state = initialState,
  action
}: {
  state: { byId: {}; mostPopular: {} };
  action: any;
}) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos({
        response: action.response,
        prevState: state
      });

    default:
      return state;
  }
}
