type devices = typeof devices[keyof typeof devices];

const devices = {
  pc: 'pc',
  mobile: 'mobile',
  tablet: 'tablet',
} as const;

export default devices;
