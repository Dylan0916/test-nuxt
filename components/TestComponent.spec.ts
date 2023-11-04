import { mount } from '@vue/test-utils';

import TestComponent from './TestComponent.vue';

Object.defineProperties(global, {
  definePageMeta: { value: vi.fn() },
  useSeoMeta: { value: vi.fn() },
});

describe('my describe', () => {
  it('test', () => {
    const wrapper = mount(TestComponent, { props: { count: 123 } });

    console.log(wrapper.html());

    expect(useSeoMeta).toBeCalledWith({
      title: 'About Page',
      description: 'this is index',
    });
  });
});
