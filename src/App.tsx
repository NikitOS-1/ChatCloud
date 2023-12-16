import { StyledLayout } from './components/Layout';
import { Tabs } from './components/Tabs';
import { CustomTabPanel } from './components/Tabs/CustomTabPanel';

function App() {
  return (
    <StyledLayout>
      <div style={{ display: 'flex' }}>
        <div>swiper</div>
        <Tabs>
          <CustomTabPanel value={0} index={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            reprehenderit quo illum fugit voluptate velit sed, voluptates vel,
            ab dicta soluta temporibus distinctio quaerat quas quod debitis
            molestiae inventore perferendis!
          </CustomTabPanel>
          <CustomTabPanel value={1} index={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            reprehenderit quo illum fugit voluptate velit sed, voluptates vel,
            ab dicta soluta temporibus distinctio quaerat quas quod debitis
            molestiae inventore perferendis!
          </CustomTabPanel>
        </Tabs>
      </div>
    </StyledLayout>
  );
}

export default App;
