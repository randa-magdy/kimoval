import Space from '@/components/UI/Space';
import BottomFooter from './BottomFooter';
import TopFooter from './TopFooter';

const Footer = () => {
  return (
    <footer className="py-5 bg-light-gray border-t-8 border-gray-300">
      <div className="container mx-auto">
        <Space direction="vertical">
          <TopFooter />
          <BottomFooter />
          <span className="text-center text-light-gray text-less-medium font-medium py-3">
            Copyright 2024 Kimoval. All Rights Reserved. | Privacy Policy |
            Tersms & Conditions
          </span>
        </Space>
      </div>
    </footer>
  );
};

export default Footer;
