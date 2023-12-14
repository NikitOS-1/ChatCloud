import { AvatarSelect } from './components/AvatarSelect';
import { StyledLayout } from './components/Layout';

const options = [
  { id: 0, src: 'src/assets/icons/Avatar/NoPhoto.svg' },
  { id: 1, src: 'src/assets/icons/Avatar/Group1.svg' },
  { id: 2, src: 'src/assets/icons/Avatar/Group2.svg' },
  { id: 3, src: 'src/assets/icons/Avatar/Group3.svg' },
  { id: 4, src: 'src/assets/icons/Avatar/Group4.svg' },
  { id: 5, src: 'src/assets/icons/Avatar/Group5.svg' },
  { id: 6, src: 'src/assets/icons/Avatar/Group6.svg' },
  { id: 7, src: 'src/assets/icons/Avatar/Group7.svg' },
  { id: 8, src: 'src/assets/icons/Avatar/Group8.svg' },
  { id: 9, src: 'src/assets/icons/Avatar/Group9.svg' },
  { id: 10, src: 'src/assets/icons/Avatar/Group10.svg' },
  { id: 11, src: 'src/assets/icons/Avatar/Group11.svg' },
  { id: 12, src: 'src/assets/icons/Avatar/Group12.svg' },
  { id: 13, src: 'src/assets/icons/Avatar/Group13.svg' },
  { id: 14, src: 'src/assets/icons/Avatar/Group14.svg' },
  { id: 15, src: 'src/assets/icons/Avatar/Group15.svg' },
  { id: 16, src: 'src/assets/icons/Avatar/Group16.svg' },
  { id: 17, src: 'src/assets/icons/Avatar/Group17.svg' },
];

function App() {
  return (
    <StyledLayout>
      <AvatarSelect options={options} />
    </StyledLayout>
  );
}

export default App;
