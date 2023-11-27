import React from 'react';

import DeleteIcon from '../../assets/icons/delete-icon.svg?react';
import ExpandMore from '../../assets/icons/expand-more.svg?react';
import ReplyIcon from '../../assets/icons/reply-icon.svg?react';

interface IconProps {
  name: 'delete' | 'reply' | 'expandMore';
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const { name, fill = 'currentColor', ...svgProps } = props;

  const Icons: Record<IconProps['name'], React.ReactElement> = {
    delete: <DeleteIcon fill={fill} {...svgProps} />,
    reply: <ReplyIcon fill={fill} {...svgProps} />,
    expandMore: <ExpandMore fill={fill} {...svgProps} />,
  };

  return Icons[name];
};