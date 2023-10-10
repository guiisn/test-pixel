import { Modal as MantineModal, ModalProps } from '@mantine/core';
import React from 'react';
import useStyles from './style';
import ConfirmModal from './variants/Confirm';
import FeedbackModal from './variants/Feedback';
import ProgressModal from './variants/Progress';

export type ModalTypes = 'CONFIRM' | 'SUCCESS' | 'ERROR' | 'PROGRESS' | 'CUSTOM'

export interface CustomModalProps extends Omit<ModalProps, 'centered'| 'title'> {
    type: ModalTypes
    title?: string
    subtitle?: string
    onConfirm?: () => void
    icon?: React.ReactNode
    percentage?: number
}

export default function Modal({
  type = 'SUCCESS',
  opened,
  onClose,
  title,
  subtitle,
  onConfirm,
  icon,
  percentage,
  children,
}: CustomModalProps): JSX.Element {
  const { classes } = useStyles();

  const renderModal = {
    CONFIRM: <ConfirmModal
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      onConfirm={onConfirm}
      icon={icon}
    />,
    SUCCESS: <FeedbackModal
      type="SUCCESS"
      onClose={onClose}
      title={title}
      subtitle={subtitle}
    />,
    ERROR: <FeedbackModal
      type="ERROR"
      onClose={onClose}
      title={title}
      subtitle={subtitle}
    />,
    PROGRESS: <ProgressModal
      title={title}
      subtitle={subtitle}
      percentage={Number(percentage)}
    />,
    CUSTOM: children,
  };

  return (
    <MantineModal
      opened={opened}
      centered
      onClose={onClose}
      size="39.37rem"
      classNames={{
        root: classes.root,
        body: classes.body,
        header: classes.header,
      }}
    >
      {renderModal[type]}
    </MantineModal>
  );
}
