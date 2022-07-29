import React from 'react';

function Details({ status, premiered, network }) {
  return (
    <div>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </div>
  );
}

export default Details;
