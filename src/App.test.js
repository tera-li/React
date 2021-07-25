import { render, screen } from '@testing-library/react';
import App from './App';

// jest 测试文件
test('renders learn react link', () => {
  render(<App />);
  // 获取屏幕上有text为learn react的元素
  const linkElement = screen.getByText(/learn react/i);
  // 判断该Dom元素是否在document中
  expect(linkElement).toBeInTheDocument();
});
