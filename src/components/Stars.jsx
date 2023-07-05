import React from 'react';
import Star from './Star';

function Stars({ count }) {

  let list;
  if (typeof(count) !== 'number') {
    list = []
  } else if (0 < count & count <= 5) {
    list = Array(count).fill('');
  } else {
    list = [];
  }

  return (
      <ul className='card-body-stars u-clearfix'>
        {list.map((_, index) => <Star key={index}/>)}
      </ul>
  )
}

export default Stars
