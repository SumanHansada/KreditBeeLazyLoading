import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Album from './components/Album';
import Photo from './components/Photo';
import { act } from 'react-dom/test-utils';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

it('renders App component', () => {
  const AppComponent = shallow(<App />);
  expect(toJson(AppComponent)).toMatchSnapshot();
});

it('renders Photo component', () => {
  const PhotoComponent = shallow(<Photo />);
  expect(toJson(PhotoComponent)).toMatchSnapshot();
});

describe('Album', () => {
  it('should render', () => {
    const AlbumComponent = shallow(<Album />);
    expect(toJson(AlbumComponent)).toMatchSnapshot();
  });
  it('should fetch data after rendering', () => {
    let AlbumComponent;
    const albums = [];
    React.useState = jest.fn().mockReturnValue([
      albums,
      [
        {
          userId: 1,
          id: 1,
          title: 'quidem molestiae enim',
        },
        {
          userId: 1,
          id: 2,
          title: 'sunt qui excepturi placeat culpa',
        },
      ],
    ]);
    act(() => {
      AlbumComponent = mount(<Album />);
    });
    expect(toJson(AlbumComponent)).toMatchSnapshot();
  });
});
