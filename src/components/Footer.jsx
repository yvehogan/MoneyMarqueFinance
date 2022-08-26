import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../common/button';



const Footer = () => {
    const navigate = useNavigate();

  return (
      <div className="w-full flex justify-center py-8 space-x-3">
        
          <Button
              border
              bgColor="bg-white"
              textColor="text-primary"
              onClick={() => navigate('/')}
          >
              1
          </Button>
          <Button
              border
              bgColor="bg-white"
              textColor="text-primary"
              onClick={() => navigate('/second')}
          >
              2
          </Button>
          <Button
              border
              bgColor="bg-white"
              textColor="text-primary"
              onClick={() => navigate('/third')}
          >
              3
          </Button>
      </div>
  )
}

export default Footer;