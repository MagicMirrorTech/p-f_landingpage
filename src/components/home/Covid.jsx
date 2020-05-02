import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const Covid = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss} style={{color:'black',margin:'0', padding:'10px 10px 10px 5px',width:'100%',height:'120px'}}>
    A notice to our valued customers:<br/>
    We are taking the utmost precaution in this difficult time to maintain our most stringent standards in culinary preparation. In addition, we are now offering clients the options to have food individually packaged for take home meals.
    Plain and Fancy is paying close attention, as are all of you, to the ever changing guidelines set forth by our state and federal agencies. We will continue to monitor and practice all safety guidelines in the interest of our employees, families and community. 
    <br/>
    <b>Thank you for your patronage and look forward to seeing you in the near future.</b>
    </Alert>
  );
}

export default Covid;