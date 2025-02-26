import React from 'react';

interface Item {
  label: string;
  link: string;
}

export default function HeaderMenuOption({ item }: { item: Item }) {
  return <a href={item.link}>{item.label}</a>;
}
