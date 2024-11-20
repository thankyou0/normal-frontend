import React, { useEffect, useState } from 'react';
import {
  Card,
  Button,
  Typography,
  Box,
  InputBase,
  styled
} from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { POST } from '../api.js';
import toast from 'react-hot-toast';
import CryptoJS from 'crypto-js';
import config from '../config.js';
import { useNavigate } from 'react-router-dom';

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: '440px',
  margin: '0 auto',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  borderRadius: '12px'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  backgroundColor: '#3b82f6',
  '&:hover': {
    backgroundColor: '#2563eb',
  }
}));

const StyledCodeInput = styled(InputBase)(({ theme }) => ({
  width: '48px',
  height: '48px',
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  '&:focus': {
    border: '2px solid #3b82f6',
    backgroundColor: '#fff',
  },
  input: {
    textAlign: 'center',
  }
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  marginBottom: '12px',
  transition: 'all 0.2s',
  '&:focus-within': {
    border: '2px solid #3b82f6',
    backgroundColor: '#fff',
  }
}));

const VerifyEmail = (props) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [Code, setCode] = useState(['', '', '', '', '', '']);
  const [BackendCode, setBackendCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const handleEmailSubmit = async (e) => {
      // e.preventDefault();
      setLoading(true); // Start loading

      try {
        const result = await POST('/api/sendemail/forgotpassword', { username: props.username, email: props.email, CheckUserExist: false });
        if (result.data?.success) {
          toast.success(result.data?.message);
          setBackendCode(result.data.code);
          setCurrentStep(2);
        } else if (result.data?.caught) {
          // toast.error(result.data?.message);
          navigate("/login");

        } else {
          toast.error(result.data?.message);
        }
      } catch (error) {
        toast.error('Something went wrong.');
      } finally {
        setLoading(false); // Stop loading once the API call is complete
      }
    };

    handleEmailSubmit();

  }, [props.email, props.username, navigate]);

  const handleCodeSubmit = async (e) => {


    if (BackendCode !== Code.join('')) {
      toast.error('Invalid verification code');
      return;
    }

    props.setModalResponse(true);

    return;

    // e.preventDefault();
    // const response = await POST('/api/sendemail/forgotpassword/verifycode', { email: props.email, code: Code });

    // if (response.data?.success) {
    //   toast.success(response.data?.message);
    //   setCurrentStep(3);
    // } else {
    //   toast.error(response.data?.message);
    // }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const encryptedPassword = CryptoJS.AES.encrypt(newPassword, config.PWD_SECRET).toString();
    const response = await POST('/api/sendemail/forgotpassword/resetpassword', { email: props.email, password: encryptedPassword });

    if (response.data?.success) {
      toast.success(response.data?.message);
      props.setShowModal(false);
    } else if (response.data?.caught) {
      // toast.error(response.data?.message);
      navigate('/login'); return;
    } {
      toast.error(response.data?.message);
    }
  };



  const handleCodeChange = (index, value) => {
    if (!/^\d$/.test(value)) return; // Only allow digits

    const newCode = [...Code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus the next input field if not at the last input
    if (index < 5 && value !== '') {
      const nextInput = document.getElementById(`Code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace') {
      event.preventDefault(); // Prevent default backspace behavior

      const newCode = [...Code];

      if (newCode[index] === '') {
        // If current box is empty and we press backspace, clear previous box and move there
        if (index > 0) {
          newCode[index - 1] = '';
          setCode(newCode);
          const prevInput = document.getElementById(`Code-${index - 1}`);
          if (prevInput) prevInput.focus();
        }
      } else {
        // If current box has a number, just clear it and stay there
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };




  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return (
          <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>

              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Check your email
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We sent a code to {props.email}
              </Typography>
            </Box>

            <form onSubmit={handleCodeSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                {Code.map((digit, index) => (
                  <StyledCodeInput
                    key={index}
                    id={`Code-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    required
                  />
                ))}
              </Box>
              <StyledButton variant="contained" type="submit">
                Verify Code
              </StyledButton>
            </form>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Button
                sx={{
                  p: 0,
                  mb: 2,
                  minWidth: 'auto',
                  color: 'text.primary',
                  '&:hover': { backgroundColor: 'transparent' }
                }}
                onClick={() => setCurrentStep(currentStep - 1)}
              />
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Set a new password
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Please enter your new password
              </Typography>
            </Box>

            <form onSubmit={handlePasswordSubmit}>
              <Box sx={{ mb: 3 }}>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  fullWidth
                  required
                />
                <StyledInput
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Box>
              <StyledButton variant="contained" type="submit">
                Update Password
              </StyledButton>
            </form>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <StyledCard>
      {renderStep()}
    </StyledCard>
  );
};

export default VerifyEmail;
