import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render a list of components as an unordered list', () => {
  const mockProducts  = [
    { id: 1, name: 'MockProduct1', brand: 'MockBrand1' },
    { id: 1, name: 'MockProduct2', brand: 'MockBrand2' },
    { id: 1, name: 'MockProduct3', brand: 'MockBrand3' }
  ]

  const wrapper = shallow(<ProductList products={mockProducts}/>)
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
})
