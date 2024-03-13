import { subDays, format } from "date-fns";

// Restar fechas
const date = new Date(1998, 9, 15);
const rta = subDays(date, 280);
const str = format(rta, 'yyy,MM,dd')

console.log(str);
