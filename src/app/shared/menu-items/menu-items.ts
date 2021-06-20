import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

//content data for list item menu -- NEMO
const MENUITEMS = [
  { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer', display: false, color_icon:"" },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5', display: false, color_icon:"" },
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy', display: false, color_icon:"" },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list', display: false, color_icon:"" },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline', display: false, color_icon:"" },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab', display: false, color_icon:"" },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web', display: false, color_icon:"" },
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center', display: false, color_icon:""
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette', display: false, color_icon:"" },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail', display: false, color_icon:"" },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal', display: false, color_icon:""
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular', display: false, color_icon:""
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in', display: false, color_icon:""
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' , display: false, color_icon:""},
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb', display: false, color_icon:"" },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode', display: false, color_icon:"" },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive', display: false, color_icon:""
  },
  {
    state: 'sucafina-pratice-interview',
    type: 'link',
    subroute:'1',
    name: 'Infomation',
    icon: 'check', 
    display: true, color_icon:"sfcn-succes"
  },
  {
    state: 'sucafina-pratice-interview',
    type: 'link',
    subroute:'2',
    name: 'Menu Item',
    icon: 'error', 
    display: true, color_icon:"sfcn-error"
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
