import Cookie from 'js-cookie';
import uuid from 'uuid';

const senderIdKey = "__sid";

/**
 * @returns a user UUID a.k.a. sender identifier.
 */
export function getUUID() {
  let identifier = Cookie.get(senderIdKey)
  if (!identifier) {
    identifier = generateUUID();
    Cookie.set(senderIdKey, identifier);
  }
  return identifier;
}

function generateUUID() {
  return uuid();
}