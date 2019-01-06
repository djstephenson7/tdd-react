import React from 'react';
import ProductList from './ProductList';
import { shallow } from 'enzyme';
import './setupTests';

it('should render a list of components as an unordered list', () => {
  const mockProducts  = [
    { id: 1, name: 'MockProduct1', brand: 'MockBrand1' },
    { id: 1, name: 'MockProduct2', brand: 'MockBrand2' },
    { id: 1, name: 'MockProduct3', brand: 'MockBrand3' }
  ]

  const wrapper = shallow(<ProductList products={mockProducts}/>)
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
});

it('should display the product name in each <li> element', () => {
  const mockProducts  = [
    { id: 1, name: 'MockProduct1', brand: 'MockBrand1' },
    { id: 1, name: 'MockProduct2', brand: 'MockBrand2' },
    { id: 1, name: 'MockProduct3', brand: 'MockBrand3' }
  ]

  const wrapper = shallow(<ProductList products={mockProducts}/>)
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each <li> element', () => {
  const mockProducts  = [
    { id: 1, name: 'MockProduct1', brand: 'MockBrand1' },
    { id: 1, name: 'MockProduct2', brand: 'MockBrand2' },
    { id: 1, name: 'MockProduct3', brand: 'MockBrand3' }
  ]

  const wrapper = shallow(<ProductList products={mockProducts}/>)
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});
