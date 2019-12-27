import Vue from 'vue'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import {
  Button, Dialog, Input, InputNumber, Loading, Message, MessageBox, Table, TableColumn,
  TabPane, Tabs, Form, FormItem, Switch, Notification, Radio, Divider, Select, Option,
  Tag, DatePicker, Dropdown, DropdownItem, Pagination, CheckboxGroup, Checkbox, Popover,
  Tooltip, Row, Col, Autocomplete, Card, Container, Aside, Main, Header, Menu, Submenu, MenuItemGroup, MenuItem, Upload, BreadcrumbItem, Breadcrumb, Progress
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Switch.name, Switch);
Vue.component(Radio.name, Radio);
Vue.component(Divider.name, Divider);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Tag.name, Tag);
Vue.component(Notification.name, Notification);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Pagination.name, Pagination);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Popover.name, Popover);
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Card.name, Card)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Header.name, Header)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Upload.name, Upload)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Progress.name, Progress)









Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


