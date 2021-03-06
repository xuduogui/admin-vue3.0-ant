/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:55:02
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-30 00:56:56
 * @Description: TODO
 */
import { App } from "@vue/runtime-dom";
import {
  message,
  notification,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
  Image,
  Typography,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

/**
 * 挂载ant
 * @param {App} app
 */
export function pluginInstallCopAnt(app: App): void {
  /* Automatically register components under Button, such as Button.Group */
  [
    Button,
    Affix,
    Anchor,
    AutoComplete,
    Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Calendar,
    Card,
    Collapse,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Icon,
    Input,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    Menu,
    Mentions,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Statistic,
    Steps,
    Switch,
    Table,
    Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Upload,
    Drawer,
    Skeleton,
    Comment,
    ConfigProvider,
    Empty,
    Result,
    Descriptions,
    PageHeader,
    Space,
    Image,
    Typography,
  ].map((e) => app.use(e));

  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
}
