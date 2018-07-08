import $ from 'jquery';
import { Foundation } from './foundation-sites/js/foundation.core';
import { MediaQuery } from './foundation-sites/js/foundation.util.mediaQuery';
import { AccordionMenu } from './foundation-sites/js/foundation.accordionMenu';
import { Drilldown } from './foundation-sites/js/foundation.drilldown';
import { ResponsiveMenu } from './foundation-sites/js/foundation.responsiveMenu';
import { OffCanvas } from './foundation-sites/js/foundation.offcanvas';
import { Reveal } from './foundation-sites/js/foundation.reveal';
import { Dropdown } from './foundation-sites/js/foundation.dropdown';
import { Tooltip } from './foundation-sites/js/foundation.tooltip';
import { Toggler } from './foundation-sites/js/foundation.toggler';
// import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle'; /* ? */

Foundation.addToJquery($);

Foundation.MediaQuery = MediaQuery;
Foundation.plugin(AccordionMenu, 'AccordionMenu');
Foundation.plugin(Drilldown, 'Drilldown');
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
Foundation.plugin(Reveal, 'Reveal');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(Tooltip, 'Tooltip');
Foundation.plugin(Toggler, 'Toggler');
// Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

module.exports = Foundation;