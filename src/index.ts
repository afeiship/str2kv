const SEP_RE = /[:@/]/;

type ReturnObj = Record<string, string>;

export default (inString: string, inSap?: string | RegExp): ReturnObj => {
  const obj = {};
  const arr = inString.split(';');
  arr.forEach((item) => {
    const kv = item.split(inSap || SEP_RE);
    obj[kv[0].trim()] = kv[1].trim();
  });
  return obj;
};
