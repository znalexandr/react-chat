import * as FNS from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

export function getDistanceInWordsNow(date: Date): string {
  return FNS.formatDistanceToNow(date, { addSuffix: true, locale: ruLocale });
}

export function isToday(date: number | Date): boolean {
  return FNS.isToday(date);
}

export function getDialogsTime(date: Date): string {
  if (isToday(date)) {
    return FNS.lightFormat(date, 'HH:mm');
  }

  return FNS.lightFormat(date, 'dd.MM.yyyy');
}
