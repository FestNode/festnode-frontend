import React from 'react';
import citLogo from "../../../Images/cit_logo.png";
import { useDispatch, useSelector } from 'react-redux';
import SmallPrimaryButton from '../../CommonComponents/SmallPrimaryButton';
import { controlFest } from '../../../Redux/fest/festSlice';
import { Card } from 'antd';

const AdminHeader = ({ user }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleActivateFest = async () => {
    try {
      const resultAction = await dispatch(controlFest({ token }));
      if (controlFest.fulfilled.match(resultAction)) {
        alert('Fest activated successfully!');
      } else if (controlFest.rejected.match(resultAction)) {
        alert(`Error: ${resultAction.payload}`);
      }
    } catch (error) {
      alert('An error occurred while activating the fest.');
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center border-b-2 py-2 px-2'>
        <img
          src={citLogo}
          alt="Portrait of Dr. A.P.J. Abdul Kalam"
          className="h-12 w-10 drop-shadow-lg"
        />
        <div>
          <SmallPrimaryButton
            content="Deactivate Fest"
            onClick={handleActivateFest}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;