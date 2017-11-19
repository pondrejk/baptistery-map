import React from 'react';

var Shapes = {
  shapesDictionary: [
    {
      label: 'rectangle',
      values: ['rectangle'],
      icon: '&#9646;'
    },
    {
      label: 'square',
      values: ['square'],
      icon: '&#9632;'
    },
    {
      label: 'circle',
      values: ['round', 'circle', 'semicircle'],
      icon: '&#9679;'
    },
    {
      label: 'central building',
      values: ['central building'],
      icon: '&#9711;'
    },
    {
      label: 'inside the church',
      values: ['inside the church'],
      icon: '&#10752;'
    },
    {
      label: 'cross',
      values: ['cross'],
      icon: '&#128932;'
    },
    {
      label: 'foil',
      values: ['trefoil', 'quatrefoil', 'octofoil'],
      icon: '&#9827;'
    },
    {
      label: 'other regular polygons (octogons...)',
      values: ['triangle', 'hexagon', 'octogon', 'dodekagon', 'dekagon'],
      icon: '&#11042;'
    },
    {
      label: 'other',
      values: ['trapezoid', 'irregular', 'other', 'polygon'],
      icon: '&#9676;'
    },
    {
      label: 'unknown',
      values: [''],
      icon: '&#10067;'
    }
  ],
  defaultShape: () => {
    return Shapes.getShape('other');
  },
  getIcon: shape => {
    return Shapes.getShape(shape) ? Shapes.getShape(shape).icon : false;
  },
  getShape: shapeValue => {
    const shape = Shapes.shapesDictionary.find(s => {
      return s.values.includes(shapeValue);
    });
    return shape ? shape : Shapes.defaultShape();
  },
  getLabel: shapeValue => {
    const shape = Shapes.getShape(shapeValue);
    return shape ? shape.label : false;
  }
};

module.exports = Shapes;
