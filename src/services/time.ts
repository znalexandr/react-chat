import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

function getDistanceInWordsNow(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true, locale: ruLocale });
}

export const Time = { getDistanceInWordsNow };
