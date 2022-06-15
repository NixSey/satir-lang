const booleanValue = (msg) => {
  if (msg.match(/beneran ancrit$/) || msg.match(/rill coy$/)) {
    return "true";
  } else if (msg.match(/boong ancrit$/) || msg.match(/fek coy$/)) {
    return "false";
  }

  return null;
};

const valueTransform = (msg) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let res = transform(msg);
    if (res) {
      return res;
    }
  }

  // if not transformed
  return msg;
};

module.exports = valueTransform;
