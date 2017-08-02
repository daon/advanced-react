import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ArticleList from '../ArticleList';

describe('ArticleList', () => {
  
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  it('renders correctly', () => {
    
    const wrapper = shallow(
      <ArticleList 
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });

});
