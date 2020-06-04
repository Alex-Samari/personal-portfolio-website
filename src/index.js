import { handleNavBar } from './scripts/sticky-nav';
import './scss/styles.scss';
import { preventScrollOverFlow } from './scripts/scrollEffects';

// wait for the window to load and identify dom elements
window.onload = () => {
  // function replaces feather icon tags with svg images
  feather.replace();
  handleNavBar();
  preventScrollOverFlow();
};
