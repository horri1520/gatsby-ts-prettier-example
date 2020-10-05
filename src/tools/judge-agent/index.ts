import devices from '../../types/devices';
import Matrix from '../../types/matrix';
import onServerSideRendering from '../judge-ssr';

const judgeAgent = () => {
  if (onServerSideRendering) {
    return devices.pc;
  }
  const innerScreenSize: Matrix = {
    x: window.innerWidth,
    y: window.innerHeight,
  };

  const pc = innerScreenSize.x >= 1024 && innerScreenSize.x > innerScreenSize.y;
  const portrait = innerScreenSize.x > innerScreenSize.y;
  const verticalMobile = portrait && innerScreenSize.x <= 420;
  const horizontalMobile = !portrait && innerScreenSize.y <= 420;

  if (pc) {
    return devices.pc;
  } else if (verticalMobile || horizontalMobile) {
    return devices.mobile;
  } else {
    return devices.tablet;
  }
};

export default judgeAgent;
