// var _ = require('lodash');
import _ from "lodash";

const data = [
  {
    username: 'amanda',
    role: 'admin'
  },
  {
    username: 'draco',
    role: 'seller'
  },
  {
    username: 'hershel',
    role: 'seller'
  },
  {
    username: 'tomasa',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
