import React from 'react';

import TextField from '@material-ui/core/TextField';

function comments() {
  return (
    <div>
    <p>HI</p>
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Type your comment here!" />
    </form>
    </div>
  );
}
export default comments;
