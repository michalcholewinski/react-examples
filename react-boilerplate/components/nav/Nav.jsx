import Link from 'next/link';
import React from 'react';

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/anotherPage">
          <a>Another Page</a>
        </Link>
      </li>
    </ul>
  </nav>
);
