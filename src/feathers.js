const host = 'http://localhost:3030';

import superagent from 'superagent';
import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import hooks from 'feathers-hooks';

export default feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks());
