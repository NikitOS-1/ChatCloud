import React from 'react';

import ArrowBack from '../../assets/icons/arrow-back.svg?react';
import ArrowLeft from '../../assets/icons/arrow-left.svg?react';
import ArrowRight from '../../assets/icons/arrow-right.svg?react';
import BtnSend from '../../assets/icons/button-send.svg?react';
import CircleIcon from '../../assets/icons/circle-icon.svg?react';
import CloseIcon from '../../assets/icons/close.svg?react';
import DeleteIcon from '../../assets/icons/delete-icon.svg?react';
import ExpandMore from '../../assets/icons/expand-more.svg?react';
import ReplyIcon from '../../assets/icons/reply-icon.svg?react';

interface IconProps {
  name:
    | 'delete'
    | 'reply'
    | 'expandMore'
    | 'circle'
    | 'close'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowBack'
    | 'btnSend';
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const { name, fill = 'currentColor', ...svgProps } = props;

  const Icons: Record<IconProps['name'], React.ReactElement> = {
    delete: <DeleteIcon fill={fill} {...svgProps} />,
    reply: <ReplyIcon fill={fill} {...svgProps} />,
    expandMore: <ExpandMore fill={fill} {...svgProps} />,
    circle: <CircleIcon fill={fill} {...svgProps} />,
    close: <CloseIcon fill={fill} {...svgProps} />,
    arrowLeft: <ArrowLeft fill={fill} {...svgProps} />,
    arrowRight: <ArrowRight fill={fill} {...svgProps} />,
    arrowBack: <ArrowBack fill={fill} {...svgProps} />,
    btnSend: <BtnSend fill={fill} {...svgProps} />,
  };

  return Icons[name];
};
