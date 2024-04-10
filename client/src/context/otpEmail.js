import { useState, useContext, createContext, useEffect } from 'react';

const OtpEmailContext = createContext();
const OtpEmailProvider = ({ children }) => {
  const [otpEmail, setOtpEmail] = useState('');

  useEffect(() => {
    let existingOtpEmail = localStorage.getItem('otpEmail');
    if (existingOtpEmail) setOtpEmail(existingOtpEmail);
  }, []);

  return (
    <OtpEmailContext.Provider value={[otpEmail, setOtpEmail]}>
      {children}
    </OtpEmailContext.Provider>
  );
};

// custom hook
const useOtpEmailGroup = () => useContext(OtpEmailContext);

export { useOtpEmailGroup, OtpEmailProvider };
