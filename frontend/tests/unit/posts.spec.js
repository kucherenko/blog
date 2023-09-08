import { mount } from '@vue/test-utils';
import Posts from '@/components/posts.vue';

// Mock the child component
jest.mock('@/components/post-preview.vue', () => ({
  name: 'PostPreview',
  template: '<div>Mocked Post Preview</div>',
}));

describe('Posts', () => {
  it('renders the Posts component', () => {
    const wrapper = mount(Posts);
    expect(wrapper.html()).toContain('Mocked Post Preview');
  });
});
