import React from 'react';
import ProductList from './ProductList';
import { shallow } from 'enzyme';
import './setupTests';

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {

  mockProducts  = [
    { id: 1, name: 'MockProduct1', brand: 'MockBrand1' },
    { id: 1, name: 'MockProduct2', brand: 'MockBrand2' },
    { id: 1, name: 'MockProduct3', brand: 'MockBrand3' },
  ];

  productSelectFn = jest.fn();

  wrapper = shallow(
    <ProductList
      products={mockProducts}
      onProductSelect={productSelectFn}
      />
    );
  });

  afterEach(() => {
    productSelectFn.mockReset();
  })

it('should render a list of components as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
});

it('should display the product name in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each <li> element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});

it('should call props.onProductSelect when a <li> is clicked', () => {
  const firstElement = wrapper.find('li').first();

  // Check the function has not yet been called.
  expect(productSelectFn.mock.calls.length).toEqual(0);

  // Click the <li>
  firstElement.simulate('click');

  // Check the function has now been called.
  expect(productSelectFn.mock.calls.length).toEqual(1);

  // Check it's been called with the right arguments.
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});
