/*
  Util - Youtube API boilerplate code
 */

export function buildApiRequest(
  requestMethod: any,
  path: any,
  params: any,
  properties: any
) {
  params = removeEmptyParams(params);
  let request;

  if (properties) {
    let resource = createResource(properties);
    // @ts-ignore
    request = window.gapi.client.request({
      body: resource,
      method: requestMethod,
      path: path,
      params: params
    });
  } else {
    // @ts-ignore
    request = window.gapi.client.request({
      method: requestMethod,
      path: path,
      params: params
    });
  }
  return request;
}

function removeEmptyParams(params: any) {
  for (var p in params) {
    if (!params[p] || params[p] === "undefined") {
      delete params[p];
    }
  }
  return params;
}

function createResource(properties: any) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) === "[]") {
      var adjustedName = p.replace("[]", "");
      if (value) {
        normalizedProps[adjustedName] = value.split(",");
      }
      delete normalizedProps[p];
    }
  }
  for (var prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      var propArray = prop.split(".");
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa === propArray.length - 1) {
          // @ts-ignore
          ref[key] = normalizedProps[prop];
        } else {
          // @ts-ignore
          ref = ref[key] = ref[key] || {};
        }
      }
    }
  }
  return resource as any;
}

export function buildMostPopularVideosRequest(
  amount: number = 12,
  loadDescription: boolean = false,
  nextPageToken: any
) {
  let fields =
    "nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,localized/title,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)";
  if (loadDescription) {
    fields += ",items/snippet/description";
  }

  return buildApiRequest(
    "GET",
    "/youtube/v3/videos",
    {
      part: "snippet,statistics,contentDetails",
      chart: "mostPopular",
      maxResults: amount,
      regionCode: "US",
      pageToken: nextPageToken,
      fields
    },
    null
  );
}
