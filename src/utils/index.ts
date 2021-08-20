import moment from "moment";
import _truncate from "lodash/truncate";

export const dateFormatter = (date: string) => {
  return moment(date).format("LL");
};

export const truncate = (htmlText: any, length = 200) => {
  return _truncate(htmlText, { length: length });
};
