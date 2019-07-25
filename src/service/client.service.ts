import * as req from "request-promise";
const server = "http://localhost:9200"



export async function save ( body: any, index: string, type?: string, ) {

  let uri: string = "";
  if ( type ) {
    uri = `${server}/${index}/${type}`
  } else {
    uri = `${server}/${index}`
  }
  const options = {
    uri: uri,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    body: body,
    json: true
  }
  try {
    return await req.post( options );
  } catch ( err ) {
    return err.message;
  }
}

export async function search ( query: any, index: string, type?: string, ) {
  let uri: string = "";
  if ( type ) {
    uri = `${server}/${index}/${type}/_search`
  } else {
    uri = `${server}/${index}/_search`
  }
  const options = {
    uri: uri,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    body: { query: query },
    json: true
  }
  try {
    return await req.get( options );
  } catch ( err ) {
    return err.message;
  }
}

export async function upsert ( body: any, index: string, id: string, type?: string, ) {

  let uri: string = "";
  if ( type ) {
    uri = `${server}/${index}/${type}/_${id}`
  } else {
    uri = `${server}/${index}/${id}`
  }
  const options = {
    uri: uri,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    body: body,
    json: true
  }
  try {
    return await req.post( options );
  } catch ( err ) {
    return err.message;
  }
}