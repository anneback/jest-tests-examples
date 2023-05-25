import React from 'react';
import { act, create } from 'react-test-renderer';

import Button from '@/components/Button/Button';

describe('Button', () => {
  it('should render with custom buttonText', () => {
    const component = create(<Button>SomeText</Button>);
    const button = component.root.findByType('button').props;
    expect(button.children).toEqual('SomeText');
  });

  it('should onClick has been invoked', () => {
    const onClickMock = jest.fn();

    const component = create(<Button onClick={onClickMock}>Text</Button>);

    const button = component.root.findByType('button').props;

    expect(onClickMock).not.toHaveBeenCalled();

    act(() => {
      button.onClick();
    });

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
