const MS_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;
const MS_MONTH = 1000 * 60 * 60 * 24 * 30;
const MS_WEEK = 1000 * 60 * 60 * 24 * 7;
const MS_DAY = 1000 * 60 * 60 * 24;
const MS_HOUR = 1000 * 60 * 60;
const MS_MIN = 1000 * 60;

function convertISOtoTimestamp (isoString) {
  return new Date(isoString).getTime();
}
function relativeNow (timestamp) {
  const now = new Date();
  const diff = now.getTime() - timestamp;
  if (diff < MS_HOUR) {
    const mins = Math.floor(diff / MS_MIN);
    if (mins === 0) {
      return `剛剛`;
    }
    return `${mins} 分鐘前`;
  } else if (diff < MS_DAY) {
    const hours = Math.floor(diff / MS_HOUR);
    return `${hours} 小時前`;
  } else if (diff < MS_WEEK) {
    const days = Math.floor(diff / MS_DAY);
    return `${days} 天前`;
  } else if (diff < MS_MONTH) {
    const weeks = Math.floor(diff / MS_WEEK);
    return `${weeks} 週前`;
  } else if (diff < MS_YEAR) {
    const months = Math.floor(diff / MS_MONTH);
    return `${months} 月前`;
  } else {
    const years = Math.floor(diff / MS_YEAR);
    return `${years} 年前`;
  }
}

export default {
  convertISOtoTimestamp,
  relativeNow,
};
