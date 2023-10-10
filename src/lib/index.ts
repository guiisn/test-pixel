import {
  Paper, Box, Group, Stack, Grid, SimpleGrid,
} from '@mantine/core';

import Button from './components/Buttons/Button';
import IconButton from './components/Buttons/IconButton';
import PanelButton from './components/Buttons/Panel';
import Tabs from './components/Navigation/Step';
import Switch from './components/Inputs/Switch';
import DataTable from './components/Tables/DataTable';
import Pagination from './components/Navigation/Pagination';
import NoResults from './components/Feedbacks/NoResults';
import LaraProvider from './components/Mantine/LaraProvider';
import HeaderReturnButton from './components/Buttons/HeaderReturnButton';
import HeaderInput from './components/Inputs/HeaderInput';
import AppShell from './components/Layout/AppShel';
import AppShellHeader from './components/Layout/AppShelHeader';
import AppShellNavbar from './components/Layout/AppShellNavbar';
import NavLink from './components/Layout/Navlink';
import NavLinkList from './components/Layout/NavLinkList';
import TextInput from './components/Inputs/TextInput';
import Textarea from './components/Inputs/Textarea';
import DateInput from './components/Inputs/DateInput';
import FileDropzone from './components/Inputs/FileDropzone';
import ColorInput from './components/Inputs/ColorInput';
import MaskInput from './components/Inputs/MaskInput';
import PasswordInput from './components/Inputs/PasswordInput';
import Select from './components/Inputs/Select';
import Breadcrumbs from './components/Navigation/Breadcrumbs';
import ProfileMenu from './components/Overlays/ProfileMenu';
import InfoBox from './components/DataDisplay/Cards/InfoBox';
import DetailingCard from './components/DataDisplay/Cards/DetailingCard';
import ActionButton from './components/Buttons/ActionButton';
import CircleCheck from './components/Feedbacks/CircleCheck';
import Modal from './components/Overlays/Modal';
import CurrentCompanyCard from './components/DataDisplay/Cards/CurrentCompany';
import Accordion from './components/DataDisplay/Accordion';
import Carousel from './components/DataDisplay/Carousel';
import Checkbox from './components/Inputs/Checkbox';
import DashboardHeader, { DashboardHeaderProps } from './components/Layout/DashboardHeader';

export {
  Checkbox, DashboardHeader,
  Paper,
  Box,
  Group,
  Stack,
  Grid,
  SimpleGrid,
  Button,
  IconButton,
  PanelButton,
  Tabs,
  Switch,
  DataTable,
  Pagination,
  NoResults,
  LaraProvider,
  HeaderReturnButton,
  HeaderInput,
  NavLink,
  NavLinkList,
  AppShellNavbar,
  AppShellHeader,
  AppShell,
  TextInput,
  Textarea,
  DateInput,
  FileDropzone,
  ColorInput,
  MaskInput,
  PasswordInput,
  Select,
  Breadcrumbs,
  ProfileMenu,
  InfoBox,
  DetailingCard,
  ActionButton,
  CircleCheck,
  Modal,
  CurrentCompanyCard,
  Accordion,
  Carousel,
};

export type { DashboardHeaderProps };
