import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import CardItems from '../CardItems';

function CardList({ cards }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl text-gray-500 text-center mb-5 font-bold">
        Danh sách nhà cho thuê
      </h1>
      <CardItems/>
    </div>
  );
}

export default CardList;
