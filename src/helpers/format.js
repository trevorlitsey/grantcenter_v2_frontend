import format from 'date-fns/format';

export const formatDate = dateStr => format(dateStr, 'MMM D, YYYY');

export const formatDollarAmount = num =>
  num ? `$${num.toLocaleString()}` : '$0';
