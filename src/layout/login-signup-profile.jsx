import { useState } from "react";
export default function LoginSingupProfile() {
  // State to manage the current page ('login', 'register', 'profile')
  const [currentPage, setCurrentPage] = useState('login');

  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // --- Page Rendering Logic ---

  const renderPage = () => {
    switch (currentPage) {
      case 'register':
        return (
          <Register
            onRegisterSuccess={handleLoginSuccess}
            onNavigate ={navigateTo}
          />
        );
      case 'profile':
        return <Profile user={user} onLogout={handleLogout} />;
      case 'login':
        return (
          <Login
            loginSuccess={handleLoginSuccess}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return (
    <div className="bg-gray-100  mt-30 ml-100 min-h-screen flex items-center justify-center font-sans">
      {renderPage()}
    </div>
  );
}
