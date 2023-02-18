import '../scss/style.scss';

import { modal } from './components/modal';
import { toggleButton } from './components/toggleButton';

window.onload = () => {
  modal();
  toggleButton();
};
