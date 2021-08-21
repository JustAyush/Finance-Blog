import moment from "moment";
import _truncate from "lodash/truncate";
import DOMPurify from "isomorphic-dompurify";

export const dateFormatter = (date: string) => {
  return moment(date).format("LL");
};

export const truncate = (htmlText: any, length = 200) => {
  return _truncate(htmlText, { length: length });
};

export const parseHtml = (html: any, chars?: number) => {
  if (chars) {
    return _truncate(DOMPurify.sanitize(html), { length: chars });
  } else {
    return DOMPurify.sanitize(html);
  }
};
