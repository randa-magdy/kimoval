import '@testing-library/jest-dom';

// Mock the global matchMedia function (we add it because we use react-query so need to fix window.matchMedia issue)
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {},
  };
};
