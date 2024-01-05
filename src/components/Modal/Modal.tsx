import { Modal } from '@mui/material';

import { useLogin } from '../../hooks/login/login';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { H1, P } from '../Typography';

import {
  FooterStyled,
  HeaderStyled,
  MainStyled,
  ModalContainerStyled,
  ModalStyled,
} from './styled';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  handleContinueClick?: (event: React.MouseEvent) => void;
}

const ModalWindow = ({ isOpen, onClose }: ModalWindowProps) => {
  const { mutate } = useLogin();

  const handleContinueClick = () => {
    mutate({
      username: 'values.userName',
      profile_picture: 'selectedAvatar',
      country: 'selectedCountry',
      topics: ['selectedInterests'],
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalStyled>
        <ModalContainerStyled>
          <HeaderStyled onClick={onClose}>
            <span>
              <Icon name="close" />
            </span>
          </HeaderStyled>
          <MainStyled>
            <H1>Skip this step?</H1>
            <P>Choosing interests will help personalize your group chats!</P>
            <P>You can also set them later in preferences.</P>
          </MainStyled>
          <FooterStyled>
            <Button
              variant="text"
              type="button"
              label="Cancel"
              onClick={onClose}
              marginright="20px"
            />
            <Button type="submit" label="Skip" onClick={handleContinueClick} />
          </FooterStyled>
        </ModalContainerStyled>
      </ModalStyled>
    </Modal>
  );
};

export default ModalWindow;
